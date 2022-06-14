import Button from '@NonoviumUI/buttons/Button';
import Box from '@NonoviumUI/containers/Box';
import Image from 'next/image';
import Link from 'next/link';
import slugify from 'slugify';

import { baseUrl } from '@/lib/api';
import { IVideoDetails } from '@/lib/types';

import { publishedOnDate } from '../../lib/helper';

type props = {
  featuredPost: IVideoDetails;
};

export default function FeaturedPost({ featuredPost }: props) {
  const {
    title,
    description,
    add_date,
    edit_date,
    hero_url,
    tags_info,
    friendly_token,
  } = featuredPost;

  const datePublished = publishedOnDate(new Date(add_date ? add_date : ''), 3);
  const dateEdited = publishedOnDate(new Date(edit_date ? edit_date : ''), 3);

  return (
    <div className='container mx-auto'>
      <Box
        bgVariant='gradient'
        className='mx-auto flex flex-row flex-wrap overflow-hidden rounded-xl border-0 p-0 sm:p-0 md:p-0 lg:p-0'
      >
        <div className='group mx-auto flex-grow basis-full md:basis-2/3'>
          {hero_url && (
            <div className='aspect-w-16 aspect-h-9'>
              <Image
                alt={title}
                src={`${baseUrl}${hero_url}`}
                layout='fill'
                objectFit='cover'
                className='group-hover:opacity-75'
              />
            </div>
          )}
        </div>
        <div className='mx-auto flex-grow basis-full bg-white p-4 dark:bg-transparent md:basis-1/3'>
          <Link
            href={`/blog/${friendly_token}/${slugify(title, {
              lower: true,
              remove: /[$*+~.()'"!\-:@]/g,
              replacement: '-',
            })}`}
            passHref
          >
            <a className='font-bold text-primary-500 no-underline hover:text-primary-700'>
              <h1 className='text-base sm:text-xl lg:text-2xl'>{title}</h1>
            </a>
          </Link>
          <p>{datePublished}</p>
          {edit_date && <p>{dateEdited}</p>}
          <p className='prose line-clamp-6 dark:prose-invert'>{description}</p>
          {tags_info && (
            <div className='inline-block'>
              {tags_info.map((tag) => (
                <Button key={tag.title} variant='ghost' className='float-right'>
                  {tag.title}
                </Button>
              ))}
            </div>
          )}
          <Link
            href={`/blog/${friendly_token}/${slugify(title, {
              lower: true,
              remove: /[$*+~.()'"!\-:@]/g,
              replacement: '-',
            })}`}
            passHref
          >
            <a>
              <Button variant='outline'>Read More</Button>
            </a>
          </Link>
        </div>
      </Box>
    </div>
  );
}
