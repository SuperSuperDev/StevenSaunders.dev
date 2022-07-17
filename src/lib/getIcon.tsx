import { GlobeAltIcon, GlobeIcon } from '@heroicons/react/outline';
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
        return <GlobeAltIcon />;
      case 'demo':
        return <GlobeIcon />;
      case 'site':
        return <GlobeIcon />;
      case 'docs':
        return <SiReadthedocs />;
      default:
        return <GlobeAltIcon />;
    }
  }
  return <GlobeAltIcon />;
}
