import { Menu, Transition } from '@headlessui/react';
import { CalendarIcon as CalendarIconOutline } from '@heroicons/react/outline';
import {
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  ClockIcon,
  LinkIcon,
  LockClosedIcon,
  PencilIcon,
} from '@heroicons/react/solid';
import Block from '@NonoviumUI/containers/Block';
import { Fragment } from 'react';

import { useVideoDetail } from '@/lib/api';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
type VideoHeadingProps = {
  videoID: string;
};

export default function VideoHeading({ videoID }: VideoHeadingProps) {
  const { video, videoLoading, postMeta } = useVideoDetail(
    `${videoID ? videoID : null}`
  );

  return (
    <div>
      {videoLoading ? (
        <p>Loading, please wait...</p>
      ) : (
        <>
          <Block>
            <div className='prose max-w-none dark:prose-invert'>
              <h2 className='text-primary-500'>{video?.title}</h2>
            </div>
          </Block>
          {/* Tailwind CSS */}
          <Block>
            <div className='lg:flex lg:items-center lg:justify-between'>
              <div className='min-w-0 flex-1'>
                <div className='mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6'>
                  <div className='mt-2 flex items-center text-sm text-gray-500'>
                    <ClockIcon
                      className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'
                      aria-hidden='true'
                    />
                    {postMeta?.formattedDuration}
                  </div>
                  <div className='mt-2 flex items-center text-sm text-gray-500'>
                    <LockClosedIcon
                      className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'
                      aria-hidden='true'
                    />
                    {video?.state}
                  </div>
                  <div className='mt-2 flex items-center text-sm text-gray-500'>
                    <CalendarIcon
                      className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'
                      aria-hidden='true'
                    />
                    Added: {postMeta?.datePublished}
                  </div>
                  <div className='mt-2 flex items-center text-sm text-gray-500'>
                    <CalendarIconOutline
                      className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'
                      aria-hidden='true'
                    />
                    Updated: {postMeta?.dateModified}
                  </div>
                </div>
              </div>
              {
                // TODO Add links for Edit, view, +publish?.
              }
              <div className='mt-5 flex lg:mt-0 lg:ml-4'>
                <span className='hidden sm:block'>
                  <button
                    type='button'
                    className='inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    disabled={true}
                  >
                    <PencilIcon
                      className='-ml-1 mr-2 h-5 w-5 text-gray-500'
                      aria-hidden='true'
                    />
                    Edit
                  </button>
                </span>

                <span className='ml-3 hidden sm:block'>
                  <button
                    type='button'
                    className='inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    disabled={true}
                  >
                    <LinkIcon
                      className='-ml-1 mr-2 h-5 w-5 text-gray-500'
                      aria-hidden='true'
                    />
                    View
                  </button>
                </span>

                <span className='sm:ml-3'>
                  <button
                    type='button'
                    className='inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    disabled={true}
                  >
                    <CheckIcon
                      className='-ml-1 mr-2 h-5 w-5'
                      aria-hidden='true'
                    />
                    Publish
                  </button>
                </span>

                {/* Dropdown */}
                <Menu as='span' className='relative ml-3 sm:hidden'>
                  <Menu.Button className='inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                    More
                    <ChevronDownIcon
                      className='-mr-1 ml-2 h-5 w-5 text-gray-500'
                      aria-hidden='true'
                    />
                  </Menu.Button>

                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='absolute right-0 mt-2 -mr-1 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#'
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Edit
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#'
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            View
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </Block>
        </>
      )}
    </div>
  );
}
