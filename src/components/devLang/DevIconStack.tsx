/* eslint-disable @next/next/no-img-element */

import { getDevTechIcon } from '@/lib/getDevTechIcon';

import { DevTech, DevTechIconFormat } from '../../lib/types';

type props = {
  title?: string;
  iconWidth?: number;
  devTech: DevTech[] | 'all';
  iconFormat: DevTechIconFormat;
  showTitle?: 'onHover' | 'always' | 'never';
  className?: string;
};

export default function DevIconStack({
  devTech,
  iconFormat,
  title,
  iconWidth: width = 36,
  showTitle = 'onHover',
  className,
}: props) {
  if (devTech === 'all') {
    devTech = [
      'TypeScript',
      'JavaScript',
      'Python',
      'React',
      'Nextjs',
      'Nodejs',
      'Express',
      'MongoDB',
      'PostgreSQL',
      'Redis',
      'Neo4j',
      'GraphQL',
      'Django',
      'Docker',
      'CSS3',
      'Tailwind CSS',
      'Bulma',
      'HTML5',
      'Sass',
      'Less',
      'GitHub',
      'Git',
      'NPM',
      'Webpack',
      'Illustrator',
      'Photoshop',
      'After Effects',
      'Premiere Pro',
      'Visual Studio',
    ];
  }

  return (
    <div className={`flex w-full flex-col ${className}`}>
      {title && <h1>{title}</h1>}
      <ul className='list-none px-1'>
        {devTech.map((dt) => (
          <li
            className={`tw-glass group m-4 flex flex-row flex-wrap content-center items-center rounded-lg bg-white p-4 align-middle text-4xl leading-tight 
          ${
            iconFormat === 'IconComponent'
              ? 'hover:text-6xl hover:text-primary-500'
              : ''
          } `}
            key={`${dt}-${iconFormat}`}
          >
            {iconFormat === 'IconComponent' && (
              <div>{getDevTechIcon(dt, iconFormat)}</div>
            )}

            {(iconFormat === 'DevIconUrl' ||
              iconFormat == 'DevIconWordUrl') && (
              <div className='mx-auto'>
                <img
                  src={getDevTechIcon(dt, iconFormat).toString()}
                  alt={dt}
                  width={width}
                />
              </div>
            )}
            {showTitle != 'never' && (
              <div
                className={`${
                  showTitle == 'onHover' ? 'invisible group-hover:visible' : ''
                } mx-auto content-center py-2 text-center align-middle text-2xl xl:text-4xl`}
              >
                {dt}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
