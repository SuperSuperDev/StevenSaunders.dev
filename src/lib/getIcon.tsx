import { GlobeAltIcon } from '@heroicons/react/outline';
import { FaGlobeAmericas } from 'react-icons/fa';
import { IoLogoYoutube, IoMdGlobe } from 'react-icons/io';
import { SiCodepen, SiGithub, SiReadthedocs } from 'react-icons/si';

export default function getIcon(iconName: string, iconFormat: string) {
  // convert iconName to lowercase and replace all spaces and dashes with empty string
  const iconNameLowercase = iconName
    .toLowerCase()
    .replaceAll(' ', '')
    .replaceAll('-', '');

  if (iconFormat === 'IconComponent') {
    switch (iconNameLowercase) {
      case 'github':
        return <SiGithub />;
      case 'codepen':
        return <SiCodepen />;
      case 'www':
        return <IoMdGlobe />;
      case 'demo':
        return <FaGlobeAmericas />;
      case 'site':
        return <IoMdGlobe />;
      case 'docs':
        return <SiReadthedocs />;
      case 'youtube':
        return <IoLogoYoutube />;
      default:
        return <GlobeAltIcon />;
    }
  }
  return <GlobeAltIcon />;
}
