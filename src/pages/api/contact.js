import nodemailer from 'nodemailer';

// TODO: Add type and convert this file to TS
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  secure: true,
});

const mailData = ({ message, email, fullName, phone }) => ({
  from: process.env.SMTP_USER,
  to: process.env.MAIL_TO,
  subject: `Message From ${fullName}`,
  text: message,
  html: `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Message From ${fullName}</title>
  </head>
  <body>
    <h1>Message From ${fullName}</h1>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <p>${message}</p>
    <hr/>
    <p><small>This email was sent from a contact form on ${process.env.NEXT_PUBLIC_FRONTEND_URL}</small></p>
  </body>
  </html>
  `,
});

const handleSendMail = async ({ message, email, fullName, phone }) => {
  try {
    const sendMail = async () => {
      await new Promise((resolve, reject) => {
        transporter.sendMail(
          mailData({ message, email, fullName, phone }),
          (err, info) => {
            if (err) {
              if (process.env.NODE_ENV !== 'production')
                // eslint-disable-next-line no-console
                console.log('Error Sending Email >>:', err);
              reject(err);
            }
            if (info) {
              if (process.env.NODE_ENV !== 'production')
                // eslint-disable-next-line no-console
                console.log('Email Sent >>:', info.response);
              resolve(info);
            }
          }
        );
      });
    };

    await sendMail();
  } catch (err) {
    throw new Error('Error: An error occurred while sending the email' + err);
  }
};

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default async (req, res) => {
  try {
    const { message, email, fullName, phone } = req.body;
    await handleSendMail({ message, email, fullName, phone });
    res.status(200).json(true);
  } catch (error) {
    // eslint-disable-next-line no-console
    process.env.NODE_ENV !== 'production' && console.log(error);
    res
      .status(502)
      .json({ message: 'An error occurred while sending the email' });
  }
};
