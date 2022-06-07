import Button from '@NonoviumUI/buttons/Button';
import Image from 'next/image';

import { baseUrl } from '@/lib/api';
import { IVideoDetails } from '@/lib/types';

import { publishedOnDate } from '../../lib/helper';

type props = {
  featuredPost: IVideoDetails;
};

export default function FeaturedPost({ featuredPost }: props) {
  const { title, description, add_date, edit_date, hero_url, tags_info } =
    featuredPost;
  const datePublished = publishedOnDate(new Date(add_date ? add_date : ''), 3);
  const dateEdited = publishedOnDate(new Date(edit_date ? edit_date : ''), 3);

  return (
    <div className='container mx-auto'>
      <div className='mx-auto flex flex-row flex-wrap'>
        <div className='group mx-auto flex-grow basis-full md:basis-2/3'>
          {hero_url && (
            <div className='aspect-w-16 aspect-h-9 rounded-b-none lg:rounded-b-lg'>
              <Image
                alt={title}
                src={`${baseUrl}${hero_url}`}
                layout='fill'
                objectFit='cover'
                className='rounded-lg group-hover:opacity-75'
              />
            </div>
          )}
        </div>
        <div className='mx-auto flex-grow basis-full bg-white p-4 dark:bg-dark md:basis-1/3'>
          <h1>{title}</h1>
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
          <Button variant='outline'>Read More</Button>
        </div>
      </div>
    </div>
  );
}
