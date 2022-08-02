/* eslint-disable @next/next/no-img-element */ // TODO: remove this or make compliant - next image
import StatBarCard from '@SuperSuperUI/statistics/StatBarCard';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import Button from '../buttons/Button';
import Block from '../containers/Block';
import Box from '../containers/Box';
import { refreshUser } from '../../lib/api';
import { publishedOnDate, secondsToHHMMSS } from '../../lib/helper';
import UploadService from '../../lib/upload-files.service';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface IVideoSummary {
  friendly_token?: string;
  url?: string;
  api_url?: string;
  user?: string;
  title?: string;
  description?: string;
  add_date?: string;
  views?: number;
  media_type?: string;
  state?: string;
  duration?: number;
  thumbnail_url?: string;
  is_reviewed?: boolean;
  preview_url?: string;
  author_name?: string;
  author_profile?: string;
  author_thumbnail?: string;
  encoding_status?: string;
  likes?: number;
  dislikes?: number;
  reported_times?: number;
  featured?: boolean;
  user_featured?: boolean;
  size?: string;
}
interface IFormData {
  selectedFiles: FileList | null | undefined;
  currentFile: File | null | undefined;
  progress: number;
  message: string;
  isLoading: boolean;
  isError: boolean;
  resData: IVideoSummary;
}
export default function UploadFiles() {
  const router = useRouter();
  const [formData, setFormData] = useState<IFormData>({
    selectedFiles: undefined,
    currentFile: undefined,
    progress: 0,
    message: '',
    isLoading: false,
    isError: false,
    resData: {},
  });

  function selectFile(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    setFormData({
      ...formData,
      selectedFiles: files,
      isLoading: false,
      isError: false,
      progress: 0,
      message: '',
      resData: {},
    });
  }
  // TODO change to useState
  const {
    friendly_token,
    url, // * video asset
    api_url, // * video asset
    user,
    title,
    description,
    add_date,
    media_type,
    state, // * video stats
    duration, // * video stats
    thumbnail_url,
    author_name,
    author_thumbnail,
    encoding_status,
    size, // *  video stats
  } = formData.resData;

  React.useEffect(() => {
    friendly_token && router.push(`/dashboard/videos/${friendly_token}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [friendly_token]);

  const datePublished = publishedOnDate(new Date(add_date ? add_date : ''), 3);
  const formattedDuration = duration ? secondsToHHMMSS(duration) : '';
  const statsArray = [
    {
      statTitle: 'duration',
      statValue: duration ? formattedDuration : '',
    },
    {
      statTitle: 'original size',
      statValue: size ? size.toString() : '0',
    },
    {
      statTitle: 'encoding status',
      statValue: encoding_status ? encoding_status : 'unknown',
    },
  ];

  async function upload() {
    if (
      formData.selectedFiles !== undefined &&
      formData.selectedFiles !== null
    ) {
      await refreshUser();
      const currentFile: File = formData.selectedFiles[0];
      formData.progress = 0;
      formData.currentFile = currentFile;

      UploadService.upload(currentFile, (event) => {
        formData.isLoading = true;
        formData.progress = Math.round((event.loaded * 100) / event.total);
        setFormData({ ...formData });
      })
        .then((response) => {
          formData.message = response.statusText;
          formData.isLoading = false;
          formData.resData = response.data;
          setFormData({ ...formData });
        })
        .catch((error) => {
          formData.message = error.message;
          formData.isLoading = false;
          formData.isError = true;
          setFormData({ ...formData });
        });
      formData.selectedFiles = undefined;
    }
  }

  return (
    <Block>
      <Box id='upload-file-form'>
        <div>
          {formData.currentFile && (
            <div className='mb-6 h-1 w-full bg-gray-400'>
              <div
                className={`h-1 
                
                ${formData.isLoading && `bg-blue-500`}
                ${formData.isError && `bg-red-500`}
                ${!formData.isLoading && !formData.isError && `bg-green-500`}
                `}
                style={{ width: formData.progress + '%' }}
              ></div>
              <div>{formData.progress}%</div>
            </div>
          )}
          <label className='btn-default btn'>
            <input type='file' onChange={selectFile} />
          </label>
          <Button
            variant='primary'
            isLoading={formData.isLoading}
            disabled={
              formData.selectedFiles === undefined ||
              formData.isError ||
              formData.isLoading
            }
            onClick={upload}
          >
            Upload
          </Button>
          <div
            className={`${
              formData.isError ? 'text-red-500' : 'text-green-500'
            }`}
            role='alert'
          >
            {formData.message}
          </div>
        </div>
      </Box>
      {friendly_token && (
        <>
          <Box id='video-summary'>
            video friendly_token: {friendly_token}
            <br />
            <div className='mt-6'>
              <h2 className='sr-only'>Uploaded Video Summary</h2>

              <div className='space-y-8'>
                <div
                  key={friendly_token}
                  className='border-t border-b border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border'
                >
                  <div className='py-6 px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8'>
                    <div className='sm:flex lg:col-span-7'>
                      <div className='aspect-w-1 aspect-h-1 w-full flex-shrink-0 overflow-hidden rounded-lg sm:aspect-none sm:h-40 sm:w-40'>
                        <img
                          src={thumbnail_url}
                          alt={title}
                          className='h-full w-full object-cover object-center sm:h-full sm:w-full'
                        />
                      </div>

                      <div className='mt-6 sm:mt-0 sm:ml-6'>
                        <h3 className='text-base font-medium text-gray-900'>
                          <Link href='/dashboard/videos/'>
                            <a>{title}</a>
                          </Link>
                        </h3>
                        <p className='mt-2 text-sm font-medium text-gray-700'>
                          {formattedDuration} | {media_type} | {state}
                        </p>
                        <p className='mt-3 text-sm text-gray-500'>
                          {description}
                        </p>
                      </div>
                    </div>

                    <div className='mt-6 lg:col-span-5 lg:mt-0'>
                      <dl className='grid grid-cols-2 gap-x-6 text-sm'>
                        <div>
                          <dt className='font-medium text-gray-900'>User</dt>
                          <dd className='mt-3 text-gray-500'>
                            <span className='block'>{author_name}</span>
                            <span className='block'>{user}</span>
                            <span className='block'>
                              <img src={author_thumbnail} alt={author_name} />
                            </span>
                          </dd>
                        </div>
                        <div>
                          <dt className='font-medium text-gray-900'>
                            File Info
                          </dt>
                          <dd className='mt-3 space-y-3 text-gray-500'>
                            <p>{url}</p>
                            <p>{api_url}</p>
                            {/* <button
                              type='button'
                              className='font-medium text-primary-600 hover:text-indigo-500'
                            >
                              Edit
                            </button> */}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                  {/*  duration, original size, encoding status */}
                  <StatBarCard statsArray={statsArray} />

                  <div className='border-t border-gray-200 py-6 px-4 sm:px-6 lg:p-8'>
                    <h4 className='sr-only'>Status</h4>
                    <p className='text-sm font-medium text-gray-900'>
                      Added on: <time dateTime={add_date}>{datePublished}</time>
                    </p>
                    <div className='mt-6' aria-hidden='true'>
                      <div className='overflow-hidden rounded-full bg-gray-200'>
                        <div
                          className={`h-2 rounded-full ${
                            encoding_status !== 'failed'
                              ? `bg-primary-600`
                              : `bg-red-600`
                          } `}
                          style={{
                            // width: `calc((${product.step} * 2 + 1) / 8 * 100%)`,
                            width: `${
                              (encoding_status === 'pending' && `40%`) ||
                              (encoding_status === 'running' && `60%`) ||
                              (encoding_status === 'success' && `100%`) ||
                              (encoding_status === 'failed' && `100%`)
                            }`,
                          }}
                        />
                      </div>
                      <div className='mt-6 hidden grid-cols-4 text-sm font-medium text-gray-600 sm:grid'>
                        <div className='text-primary-600'>Video Uploaded</div>
                        <div
                          className={classNames(
                            encoding_status === 'pending' ||
                              encoding_status === 'running' ||
                              encoding_status === 'success'
                              ? 'text-primary-600'
                              : '',
                            'text-center'
                          )}
                        >
                          Encode Pending
                        </div>
                        <div
                          className={classNames(
                            encoding_status === 'running' ||
                              encoding_status === 'success'
                              ? 'text-primary-600'
                              : '',
                            'text-center'
                          )}
                        >
                          Encode Running
                        </div>
                        <div
                          className={classNames(
                            encoding_status === 'success'
                              ? 'text-primary-600'
                              : '',
                            'text-right'
                          )}
                        >
                          Encode Complete
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </>
      )}
    </Block>
  );
}
