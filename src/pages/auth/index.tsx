import React from 'react';

import Block from '@/components/containers/Block';
import Box from '@/components/containers/Box';
import SignInForm from '@/components/forms/SignInForm';
import Layout from '@/components/layout/Layout';

export default function Auth() {
  return (
    <Layout>
      <Block id='block' className='h-full'>
        <Box id='Box' className='h-full'>
          <h1>Auth</h1>
          <SignInForm />
        </Box>
      </Block>
    </Layout>
  );
}
