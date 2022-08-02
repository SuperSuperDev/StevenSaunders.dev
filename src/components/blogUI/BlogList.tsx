/* eslint-disable @next/next/no-img-element */
import Button from '@SuperSuperUI/buttons/Button';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import slugify from 'slugify';

import { getDevTechIcon } from '@/lib/getDevTechIcon';
import { publishedOnDate } from '@/lib/helper';
import { DevTech, IVideoDetails } from '@/lib/types';

type props = {
  blogPosts: IVideoDetails[];
  tags: DevTech[];
};

export default function BlogList({ blogPosts, tags }: props) {
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [searchValue, setSearchValue] = useState('');

  const filteredBlogPosts = blogPosts
    //.sort((a, b) => Number(new Date(b.add_date)))
    .filter((post) => {
      return (
        post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        post.tags_info.some(
          (el) => el.title === searchValue.toLocaleLowerCase()
        )
      );
    });

  useEffect(() => {
    setSearchValue(selectedTag);
  }, [selectedTag]);

  return (
    <div className='container mx-auto my-8 max-w-7xl p-4'>
      <h1 className='my-8'>Blog Posts</h1>
      <div className='flex flex-row'>
        <div className='flex-none'>
          <input
            className='focus:shadow-outline block w-full appearance-none rounded-lg border border-gray-300 bg-white py-2 px-4 leading-normal focus:outline-none'
            type='text'
            placeholder='Search'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <div className='flex-none'>
          <select
            className='focus:shadow-outline block w-full appearance-none rounded-lg border border-gray-300 bg-white py-2 px-4 leading-normal text-black focus:outline-none'
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
          >
            <option value=''>All</option>
            {tags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>
      </div>
      <h4>Filter by language, library or framework:</h4>
      <div className='flex flex-row py-2'>
        {tags.map((tag) => (
          <div
            key={tag}
            className='mx-2 flex-none rounded-lg'
            onClick={() => setSelectedTag(tag)}
          >
            <img
              src={getDevTechIcon(tag, 'DevIconUrl').toString()}
              alt={tag}
              className='mx-2 h-12 w-12 rounded-sm hover:cursor-pointer'
              title={tag}
            />
          </div>
        ))}
      </div>

      <div className='mx-auto grid auto-cols-max grid-cols-1 gap-6 md:grid-cols-3'>
        {filteredBlogPosts.map(
          ({
            title,
            description,
            thumbnail_url,
            add_date,
            tags_info,
            friendly_token,
          }) => (
            <Fragment key={thumbnail_url}>
              <img
                src={`${thumbnail_url}`}
                alt={title}
                className='w-full rounded-lg object-cover shadow-lg'
              />
              <div className='mx-auto md:col-span-2 md:pl-4'>
                <Link
                  href={`/blog/${friendly_token}/${slugify(title, {
                    lower: true,
                    remove: /[$*+~.()'"!\-:@]/g,
                    replacement: '-',
                  })}`}
                >
                  <a className='text-2xl font-bold text-primary-500 hover:text-primary-700'>
                    <h2>{title}</h2>
                  </a>
                </Link>
                <small>
                  {publishedOnDate(new Date(add_date ? add_date : ''), 3)}
                </small>
                <div>
                  <p className='prose line-clamp-4 dark:prose-invert'>
                    {description}
                  </p>
                  <div className=''>
                    {tags_info && (
                      <ul className='inline-flex list-none py-2'>
                        {tags_info.map(({ title }) => (
                          <li key={title}>
                            <img
                              src={getDevTechIcon(
                                title,
                                'DevIconUrl'
                              ).toString()}
                              alt={title}
                              width={24}
                              height={24}
                              className='mx-1 hover:cursor-pointer'
                              title={title}
                              onClick={() => setSelectedTag(title)}
                            />
                          </li>
                        ))}
                      </ul>
                    )}

                    <Link href={`/blog/${friendly_token}`} passHref>
                      <a>
                        <Button variant='outline' className='float-right'>
                          Read More
                        </Button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </Fragment>
          )
        )}
      </div>
    </div>
  );
}
