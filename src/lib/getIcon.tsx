import { GlobeAltIcon } from '@heroicons/react/outline';
import { CgProfile } from 'react-icons/cg';
import { FaGlobeAmericas } from 'react-icons/fa';
import { GiGraduateCap } from 'react-icons/gi';
import { IoLogoYoutube, IoMdGlobe } from 'react-icons/io';
import { MdWorkOutline } from 'react-icons/md';
import { RiUserHeartLine } from 'react-icons/ri';
import { SiCodepen, SiGithub, SiLinkedin, SiReadthedocs } from 'react-icons/si';
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
      case 'linkedin':
        return <SiLinkedin />;
      case 'profile':
        return <CgProfile />;
      case 'work':
        return <MdWorkOutline />;
      case 'education':
        return <GiGraduateCap />;
      case 'personal':
        return <RiUserHeartLine />;
      default:
        return <GlobeAltIcon />;
    }
  }
  return <GlobeAltIcon />;
}
