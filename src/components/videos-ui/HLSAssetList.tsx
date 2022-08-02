/* eslint-disable @next/next/no-img-element */
import Box from '@SuperSuperUI/containers/Box';
import * as React from 'react';

import { baseUrl, useVideoDetail } from '@/lib/api';

type HLSAssetListItemProps = {
  videoID: string;
};

export default function HLSAssetList({ videoID }: HLSAssetListItemProps) {
  const { hlsAssets, videoLoading } = useVideoDetail(videoID);

  return (
    <>
      {videoLoading ? (
        <div>loading...</div>
      ) : (
        <>
          <Box>
            {
              // * Thumbnail
            }
            {
              // TODO: fix error with hls, prob caused by dev env, need to push to server and test
              /* {hlsAssets?.master_file && (
            <Box>
                <APIVideoHLSPlayer videoID={videoID} />
            </Box>
              )} */
            }

            <div className='px-4 sm:px-6 lg:px-8'>
              <div className='sm:flex sm:items-center'>
                <div className='sm:flex-auto'>
                  <h1 className='text-xl font-semibold text-gray-900'>
                    HLS Files
                  </h1>
                  <p className='mt-2 text-sm text-gray-700'>
                    A list of all the users in your account including their
                    name, title, email and role.
                  </p>
                </div>
                <div className='mt-4 sm:mt-0 sm:ml-16 sm:flex-none'>
                  <button
                    disabled
                    type='button'
                    className='inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto'
                  >
                    Download All
                  </button>
                </div>
              </div>
              <div className='mt-8 flex flex-col'>
                <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                  <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                    <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
                      <table className='min-w-full divide-y divide-gray-300'>
                        <thead className='bg-gray-50'>
                          <tr>
                            <th
                              scope='col'
                              className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
                            >
                              File
                            </th>
                            <th
                              scope='col'
                              className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                            >
                              Link
                            </th>
                            <th
                              scope='col'
                              className='relative py-3.5 pl-3 pr-4 sm:pr-6'
                            >
                              <span className='sr-only'>Download</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className='divide-y divide-gray-200 bg-white'>
                          {hlsAssets &&
                            Object.keys(hlsAssets).map((key) => {
                              return (
                                <tr key={`hls-${videoID}-${key}`}>
                                  <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                                    {key.replace('_', ' ')}
                                  </td>
                                  <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                    <a
                                      href={baseUrl + hlsAssets[key]}
                                      className='text-primary-600 hover:text-primary-900'
                                    >
                                      {baseUrl + hlsAssets[key]}
                                    </a>
                                  </td>
                                  <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
                                    <a
                                      href={baseUrl + hlsAssets[key]}
                                      className='text-primary-600 hover:text-primary-900'
                                    >
                                      Download
                                      <span className='sr-only'>
                                        , {key.replace('_', ' ')}
                                      </span>
                                    </a>
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </>
      )}
    </>
  );
}
