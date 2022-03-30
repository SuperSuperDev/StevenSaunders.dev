/* This example requires Tailwind CSS v2.0+ */
import { Dialog, Transition } from '@headlessui/react';
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuIcon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';

import { useUser } from '@/lib/api';

import ThemeChanger from '@/components/layout/ThemeChanger';

import LogoutButton from '../buttons/LogoutButton';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: InboxIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, userMutate, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    userMutate();
    if (isAuthenticated === false && loading === false) {
      router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as='div'
            className='fixed inset-0 z-[150] flex'
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <div className='relative z-[200] flex w-full max-w-xs flex-1 flex-col bg-gray-800'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-in-out duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in-out duration-300'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <div className='absolute top-0 right-0 -mr-12 pt-2'>
                    <button
                      type='button'
                      className='ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className='sr-only'>Close sidebar</span>
                      <XIcon
                        className='h-6 w-6 text-white'
                        aria-hidden='true'
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className='h-0 flex-1 overflow-y-auto pt-5 pb-4'>
                  <div className='flex flex-shrink-0 items-center px-4'>
                    {/* <img
                      className='h-8 w-auto'
                      src='https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg'
                      alt='Workflow'
                    /> */}
                  </div>
                  <nav className='mt-5 space-y-1 px-2'>
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a
                          className={classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'group flex items-center rounded-md px-2 py-2 text-base font-medium'
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? 'text-gray-300'
                                : 'text-gray-400 group-hover:text-gray-300',
                              'mr-4 h-6 w-6 flex-shrink-0'
                            )}
                            aria-hidden='true'
                          />
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </nav>
                </div>
                <ThemeChanger />
                <div className='flex flex-shrink-0 bg-gray-700 p-4'>
                  <a href='#' className='group block flex-shrink-0'>
                    <div className='flex items-center'>
                      <div>
                        {/* <Button onClick={toggleDarkMode}>
                          <span className='sr-only'>Toggle dark mode</span>
                          <span className='ml-2 text-xs font-medium leading-5 text-gray-300 transition duration-150 ease-in-out group-hover:text-gray-300'>
                            Toggle dark mode
                          </span>
                        </Button> */}
                      </div>
                      <div className='ml-3'>
                        <p className='text-base font-medium text-white'>
                          Tom Cook
                        </p>
                        <p className='text-sm font-medium text-gray-400 group-hover:text-gray-300'>
                          View profile
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </Transition.Child>
            <div className='w-14 flex-shrink-0'>
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        {/* <div className='hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col'> */}
        <div className='flex flex-1 flex-col'>
          {/* //*Mobile Header */}
          <div className='sticky top-0 z-[140] bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3'>
            <button
              type='button'
              className='-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
              onClick={() => setSidebarOpen(true)}
            >
              <span className='sr-only'>Open sidebar</span>
              <MenuIcon className='h-6 w-6' aria-hidden='true' />
            </button>{' '}
            <div className='bg-dark'>
              <LogoutButton />
            </div>
          </div>

          {/* //*Main Content */}
          <main>
            <div className='py-6'>
              <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <h1 className='text-2xl font-semibold text-gray-900'>
                  Dashboard
                </h1>
              </div>
              <div className='mx-auto max-w-7xl px-4 sm:px-6 md:px-8'>
                {/* Replace with your content */}
                <div className='py-4'>{children}</div>
                {/* /End replace */}
              </div>
            </div>
          </main>
          {/* //*End Main Content */}
        </div>
      </div>
    </>
  );
}
