export interface ProfileLink {
  url: string;
  type: 'GitHub' | 'LinkedIn' | 'CodePen' | 'www';
  label?: string;
}

export type ProfileLinks = ProfileLink[];

export const profileLinks: ProfileLinks = [
  {
    url: 'github.com/SuperSuperDev',
    type: 'GitHub',
    label: 'Github',
  },
  {
    url: 'www.linkedin.com/in/stevensaundersdev/',
    type: 'LinkedIn',
    label: 'LinkedIn',
  },
  {
    url: 'codepen.io/SuperSuperDev/',
    type: 'CodePen',
    label: 'CodePen',
  },
  {
    url: 'StevenSaunders.dev',
    type: 'www',
    label: 'StevenSaunders.dev',
  },
];
