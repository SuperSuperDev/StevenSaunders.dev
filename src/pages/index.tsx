import { useRouter } from 'next/router';
import { ReactElement, useEffect } from 'react';

import SignInForm from '@/components/forms/SignInForm';
/** SVGR Support * Caveat: No React Props Type.
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { useUser } from '../lib/api';
export default function Page() {
  const { isAuthenticated, user } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (user && isAuthenticated) {
      router.push('/dashboard');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, isAuthenticated]);

  return (
    <>
      <Seo templateTitle='Home' />
      <main>
        <SignInForm />
      </main>
    </>
  );
}

Page.getLayout = function getLayout(Page: ReactElement) {
  return <Layout>{Page}</Layout>;
};
