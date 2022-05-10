// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';

import { loginUser } from '@/lib/api';

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'OPTIONS') {
    res.status(200).end();
  }

  if (req.method !== 'POST') {
    res.status(405).json({
      error: 'METHOD_NOT_ALLOWED',
      message: `${req.method} is not allowed, please use the POST http method.`,
    });
    return;
  }
  const formData = req.body;
  // const serverResponse = await loginUser(formData);

  // const serverResponse = await axios.post(
  //     `${baseUrl}/spa/login/`,
  //     // `${baseUrl}/api/v1/login`,
  //     { ...formData },
  //     {
  //       withCredentials: true,
  //       headers: {
  //         'Cookie': req.headers.cookie,
  //         'Content-Type': 'application/json',
  //         'X-CSRFToken': await getCSRF(),
  //       },
  //     }
  //   );
  // console.log('serverResponse.body', serverResponse.body)
  // console.log('serverResponse', serverResponse)
  try {
    const response = await loginUser(formData);
    // const response = await axios.post(
    //   `${baseUrl}/spa/login/`,
    //   // `${baseUrl}/api/v1/login`,
    //   { ...formData },
    //   {
    //     withCredentials: true,
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'X-CSRFToken': await getCSRF(),
    //     },
    //   }
    // );
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
}
