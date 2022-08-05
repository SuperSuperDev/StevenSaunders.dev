import { GlobeAltIcon } from '@heroicons/react/outline';
import { BiMailSend } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { FaGlobeAmericas } from 'react-icons/fa';
import { GiGraduateCap } from 'react-icons/gi';
import { GrContact } from 'react-icons/gr';
import { IoLogoYoutube, IoMdGlobe } from 'react-icons/io';
import { MdWorkOutline } from 'react-icons/md';
import { RiUserHeartLine } from 'react-icons/ri';
import { SiCodepen, SiGithub, SiLinkedin, SiReadthedocs } from 'react-icons/si';

function formattedIconName(iconName: string) {
  // convert iconName to lowercase and replace all spaces and dashes with empty string
  return iconName.toLowerCase().replaceAll(' ', '').replaceAll('-', '');
}
export default function getIcon(iconName: string, iconFormat: string) {
  // TODO: convert to map
  if (iconFormat === 'IconComponent') {
    switch (formattedIconName(iconName)) {
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
      case 'contact':
        return <GrContact />;
      case 'message':
        return <BiMailSend />;
      default:
        return <GlobeAltIcon />;
    }
  }
  return <GlobeAltIcon />;
}
