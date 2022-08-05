import { useState } from 'react';

import useForm from '@/hooks/useForm';

export default function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const { formdata, handleChange } = useForm({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formdata),
    })
      .then((res) => {
        if (res.status === 200) {
          setIsSending(false);
          setSubmitted(true);
        }
      })
      .catch((err) => {
        //! TODO: handle error
        //! TODO: DKIM verification
        setIsSending(false);
        setError(JSON.stringify(err.message));
      });
  };

  return (
    <div className='mx-auto max-w-lg lg:max-w-none'>
      <div>
        {isSending && <p className='text-primary-500'>Message sending...</p>}
        {submitted && (
          <p>Your message has been sent! I will get back to you shortly.</p>
        )}
        {error && <p className='text-red-500'>{error}</p>}
      </div>
      {!submitted && (
        <form className='grid grid-cols-1 gap-y-6' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name' className='sr-only'>
              Full name
            </label>
            <input
              type='text'
              name='fullName'
              id='fullName'
              autoComplete='name'
              onChange={handleChange}
              className='block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary-500 focus:ring-primary-500'
              placeholder='Full name'
            />
          </div>
          <div>
            <label htmlFor='email' className='sr-only'>
              Email
            </label>
            <input
              id='email'
              name='email'
              type='email'
              autoComplete='email'
              onChange={handleChange}
              className='block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary-500 focus:ring-primary-500'
              placeholder='Email'
            />
          </div>
          <div>
            <label htmlFor='phone' className='sr-only'>
              Phone
            </label>
            <input
              type='text'
              name='phone'
              id='phone'
              autoComplete='tel'
              onChange={handleChange}
              className='block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary-500 focus:ring-primary-500'
              placeholder='Phone'
            />
          </div>
          <div>
            <label htmlFor='message' className='sr-only'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              onChange={handleChange}
              rows={4}
              className='block w-full rounded-md border border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary-500 focus:ring-primary-500'
              placeholder='Message'
              defaultValue=''
            />
          </div>
          <div>
            <button
              type='submit'
              className='inline-flex justify-center rounded-md border border-transparent bg-primary-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
