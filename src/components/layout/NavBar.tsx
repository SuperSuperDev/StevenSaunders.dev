/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Button from '@NonoviumUI/buttons/Button';
import LogoutButton from '@NonoviumUI/buttons/LogoutButton';
import { navItems } from 'data/navItems';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

import { useUser } from '@/lib/api';

import ThemeChanger from '@/components/layout/ThemeChanger';

export default function NavBar() {
  const router = useRouter();
  const { isAuthenticated } = useUser();
  return (
    <Popover>
      <div className='pointer-events-none absolute inset-0 z-30 shadow' />
      <div className='relative z-20'>
        <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 sm:py-4 md:justify-start md:space-x-10 lg:px-8'>
          <div>
            <Link href='/' passHref>
              <a>
                <img
                  className='h-8 w-auto'
                  src='https://s3.pub1.infomaniak.cloud/object/v1/AUTH_598753f3935548c6a1ca8f065e534ac1/supersuperdev-pub/img/logo-ss/logo-ss.svg'
                  alt='StevenSaunders.dev'
                />
              </a>
            </Link>
          </div>
          <div className='-my-2 -mr-2 md:hidden'>
            <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:bg-dark'>
              <span className='sr-only'>Open menu</span>
              <MenuIcon className='h-6 w-6' aria-hidden='true' />
            </Popover.Button>
          </div>
          <div className='hidden md:flex md:flex-1 md:items-center md:justify-between'>
            <div id='nav' className='flex space-x-10'>
              {navItems.map(({ href, title }) => (
                <Link href={href} key={title} passHref>
                  <a
                    className={`font-medium transition duration-150 ease-in-out hover:text-primary-600 focus:outline-none ${
                      router.pathname == href
                        ? 'text-primary-600 dark:text-primary-500'
                        : 'text-gray-400'
                    }`}
                  >
                    {title}
                  </a>
                </Link>
              ))}
            </div>
            <div className='flex items-center gap-2 md:ml-12'>
              {!isAuthenticated ? (
                <>
                  <Link href='/login' passHref>
                    <Button variant='outline'>Sign in</Button>
                  </Link>
                  {/* <Link href='#' passHref>
                    <Button>Register</Button>
                  </Link> */}
                </>
              ) : (
                <>
                  <Link href='/dashboard' passHref>
                    <Button variant='outline'>My Dashboard</Button>
                  </Link>
                  <LogoutButton />
                </>
              )}
              <ThemeChanger />
            </div>
          </div>
        </div>
      </div>
      {/* Slide Out Menu */}
      <Transition
        as={Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden'
        >
          <div className='divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-dark'>
            <div className='px-5 pt-5 pb-6 sm:pb-8'>
              <div className='flex items-center justify-between'>
                <div>
                  <Link href='/' passHref>
                    <a>
                      <img
                        className='h-8 w-auto'
                        src='https://s3.pub1.infomaniak.cloud/object/v1/AUTH_598753f3935548c6a1ca8f065e534ac1/supersuperdev-pub/img/logo-ss/logo-ss.svg'
                        alt='StevenSaunders.dev'
                      />
                    </a>
                  </Link>
                </div>
                <div>
                  <ThemeChanger />
                </div>
                <div className='-mr-2'>
                  <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:bg-dark'>
                    <span className='sr-only'>Close menu</span>
                    <XIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
              <div className='mt-6 sm:mt-8'>
                <nav>
                  <div className='grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4'>
                    <Link href='/' passHref>
                      <a className='rounded-md text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-primary-600'>
                        Home
                      </a>
                    </Link>
                  </div>
                  <div className='mt-8 text-base'>
                    <Link href='/blog' passHref>
                      <a className='font-medium text-primary-600 hover:text-primary-500'>
                        {' '}
                        Checkout my blog <span aria-hidden='true'>&rarr;</span>
                      </a>
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
            <div className='py-6 px-5'>
              <div className='grid grid-cols-2 gap-4'>
                {navItems.map(({ href, title }) => (
                  <a
                    key={href + title}
                    href={href}
                    className='rounded-md text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-primary-600'
                  >
                    {title}
                  </a>
                ))}
              </div>
              <div className='mt-6'>
                <a
                  href='#'
                  className='flex w-full items-center justify-center rounded-md border border-transparent bg-primary-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700'
                >
                  Sign up
                </a>
                <p className='mt-6 text-center text-base font-medium text-gray-500'>
                  Existing user?{' '}
                  <Link href='/login' passHref>
                    <a className='text-primary-600 hover:text-primary-500'>
                      Sign in
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
