/* eslint-disable @next/next/no-img-element */

import { getDevTechIcon } from '../../lib/getDevTechIcon';
import { DevTech, DevTechIconFormat } from '../../lib/types';

type props = {
  devTech: DevTech[] | 'all';
  iconFormat: DevTechIconFormat;
};

export default function DevIconInline({ devTech, iconFormat }: props) {
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
      'Neo4j',
    ];
  }

  return (
    <ul className='inline-block px-1'>
      {devTech.map((dt) => (
        <li
          className={`group inline-block text-left align-middle text-4xl leading-tight 
          ${
            iconFormat === 'IconComponent'
              ? 'hover:align-top hover:text-6xl hover:text-primary-500'
              : ''
          } `}
          key={`${dt}-${iconFormat}`}
        >
          {iconFormat === 'IconComponent' && getDevTechIcon(dt, iconFormat)}

          {(iconFormat === 'DevIconUrl' || iconFormat == 'DevIconWordUrl') && (
            <img
              src={getDevTechIcon(dt, iconFormat).toString()}
              alt={dt}
              width='36'
              height='36'
            />
          )}

          <span className='invisible absolute text-left text-xl group-hover:visible'>
            {dt}
          </span>
        </li>
      ))}
    </ul>
  );
}
