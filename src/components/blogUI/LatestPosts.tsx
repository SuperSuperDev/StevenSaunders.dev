import Image from 'next/image';
import Link from 'next/link';
import slugify from 'slugify';

import { IVideoDetails } from '@/lib/types';

type props = {
  posts: IVideoDetails[];
  showNumPosts?: number;
};

export default function LatestPosts({ posts, showNumPosts = 4 }: props) {
  const latestPostsList = posts.slice(0, showNumPosts);
  return (
    <div className='prose-none container mx-auto'>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
        {latestPostsList.map((post) => (
          <Link
            passHref
            key={post.title}
            href={`/blog/${post.friendly_token}/${slugify(post.title, {
              lower: true,
              remove: /[$*+~.()'"!\-:@]/g,
              replacement: '-',
            })}`}
          >
            <a className='no-underline'>
              <div className='flex w-full flex-col rounded-xl border-0 p-0 text-6xl'>
                <div className='aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg object-cover'>
                  <Image
                    src={post.thumbnail_url}
                    alt={post.title}
                    layout='fill'
                  />
                </div>
                <div className='bg-transparent pt-1'>
                  <h3 className='text-sm'>{post.title}</h3>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
