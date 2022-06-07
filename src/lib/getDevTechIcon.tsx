import { devIconList } from 'data/devIconList';
import { FaCode, FaReact, FaSass } from 'react-icons/fa';
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiBulma,
  SiCss3,
  SiDjango,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiLess,
  SiMongodb,
  SiNeo4J,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPostgresql,
  SiPython,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudio,
  SiWebpack,
} from 'react-icons/si';

import { DevTech, DevTechIconFormat } from './types';

export function getDevTechIcon(
  devTech: DevTech,
  iconFormat: DevTechIconFormat
) {
  const devTechnology = devTech
    .toLowerCase()
    .replaceAll(' ', '')
    .replaceAll('-', '');

  if (iconFormat === 'IconComponent') {
    switch (devTechnology) {
      case 'typescript':
        return <SiTypescript />;
      case 'javascript':
        return <SiJavascript />;
      case 'react':
        return <FaReact />;
      case 'python':
        return <SiPython />;
      case 'next':
        return <SiNextdotjs />;
      case 'nextjs':
        return <SiNextdotjs />;
      case 'node':
        return <SiNodedotjs />;
      case 'nodejs':
        return <SiNodedotjs />;
      case 'express':
        return <SiExpress />;
      case 'mongodb':
        return <SiMongodb />;
      case 'postgresql':
        return <SiPostgresql />;
      case 'graphql':
        return <SiGraphql />;
      case 'django':
        return <SiDjango />;
      case 'docker':
        return <SiDocker />;
      case 'css3':
        return <SiCss3 />;
      case 'tailwindcss':
        return <SiTailwindcss />;
      case 'bulma':
        return <SiBulma />;
      case 'html5':
        return <SiHtml5 />;
      case 'sass':
        return <FaSass />;
      case 'less':
        return <SiLess />;
      case 'github':
        return <SiGithub />;
      case 'git':
        return <SiGit />;
      case 'npm':
        return <SiNpm />;
      case 'webpack':
        return <SiWebpack />;
      case 'illustrator':
        return <SiAdobeillustrator />;
      case 'photoshop':
        return <SiAdobephotoshop />;
      case 'aftereffects':
        return <SiAdobeaftereffects />;
      case 'adobeaftereffects':
        return <SiAdobeaftereffects />;
      case 'adobepremiere':
        return <SiAdobepremierepro />;
      case 'premierepro':
        return <SiAdobepremierepro />;
      case 'visualstudio':
        return <SiVisualstudio />;
      case 'neo4j':
        return <SiNeo4J />;
      default:
        return <FaCode />;
    }
  } else if (iconFormat == 'DevIconUrl') {
    if (devIconList.includes(`${devTechnology}-original.svg`)) {
      return `/dev-icons/${devTechnology}-original.svg`;
    } else if (devIconList.includes(`${devTechnology}-plain.svg`)) {
      return `/dev-icons/${devTechnology}-plain.svg`;
    } else if (devIconList.includes(`${devTechnology}-original-wordmark.svg`)) {
      return `/dev-icons/${devTechnology}-original-wordmark.svg`;
    } else if (devIconList.includes(`${devTechnology}-plain-wordmark.svg`)) {
      return `/dev-icons/${devTechnology}-plain-wordmark.svg`;
    } else {
      return `https://s3.pub1.infomaniak.cloud/object/v1/AUTH_598753f3935548c6a1ca8f065e534ac1/supersuperdev-pub/img/logo-ss/logo-ss.svg`;
    }
  } else if (iconFormat == 'DevIconWordUrl') {
    if (devIconList.includes(`${devTechnology}-original-wordmark.svg`)) {
      return `/dev-icons/${devTechnology}-original-wordmark.svg`;
    } else if (devIconList.includes(`${devTechnology}-plain-wordmark.svg`)) {
      return `/dev-icons/${devTechnology}-plain-wordmark.svg`;
    } else if (devIconList.includes(`${devTechnology}-original.svg`)) {
      return `/dev-icons/${devTechnology}-original.svg`;
    } else if (devIconList.includes(`${devTechnology}-plain.svg`)) {
      return `/dev-icons/${devTechnology}-plain.svg`;
    } else {
      return `https://s3.pub1.infomaniak.cloud/object/v1/AUTH_598753f3935548c6a1ca8f065e534ac1/supersuperdev-pub/img/logo-ss/logo-ss.svg`;
    }
  } else {
    return '';
  }
}
