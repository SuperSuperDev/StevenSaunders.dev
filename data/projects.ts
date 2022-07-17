export interface Project {
  id: number;
  title: string;
  subTitle?: string;
  name: string;
  description: string;
  intro: string;
  domain: string;
  slug: string;
  tags: string[];
  languages: string[];
  scope: ProjectScope;
  links: Link[];
  screenshots: { [key: string]: ProjectScreenshot };
}
export type Projects = Project[];

export interface Objective {
  title: string;
  description: string;
}
export interface ProjectScope {
  title: string;
  description: string;
  tags: string[];
  objectives: Objective[];
}

export interface ProjectScreenshot {
  url: string;
  width: number;
  height: number;
}

export interface Link {
  url: string;
  type: 'github' | 'codepen' | 'www' | 'demo' | 'site' | 'docs';
}

export type Links = Link[];

export const projects: Projects = [
  {
    id: 1,
    title: 'A Real Estate Platform Built on Wordpress',
    subTitle: 'A property portal built on top of WordPress.',
    name: 'Chiang Mai Estate Agents',
    description:
      '## This is mu description heading \n \n This should have an empty line above it \n ## This should be a subheading   \n And this should be some cool normal text below. \n\n And this should be some cool normal text below. \n And this should be some cool normal text below. \n And this should be some cool normal text below. \n And this should be some cool normal text below. \n And this should be some cool normal text below. \n\n ## This is mu description heading \n \n This should have an empty line above it \n ## This should be a subheading   \n And this should be some cool normal text below. \n\n And this should be some cool normal text below. \n And this should be some cool normal text below. \n And this should be some cool normal text below. \n And this should be some cool normal text below. \n And this should be some cool normal text below.',
    intro:
      '\n And this should be some cool normal text below. \n\n And this should be some cool normal text below. \n And this should be some cool normal text below. \n And this should be some cool normal text below. \n And this should be some cool normal text below. \n\n And this should be some cool normal text below. \n And this should be some cool normal text below. \n And this should be some cool normal text below. ddd\n And this should be some cool normal text below.And this should be some cool normal text below.And this should be some cool normal text below. \n\n And this should be some cool normal text below. \n And this should be some cool normal text below. \n And this should be some cool normal text below. \n And this should be some cool normal text below. \n\n And this should be some cool normal text below. \n And this should be some cool normal text below. \n And this should be some cool normal text below. ddd',
    domain: 'chiangmaiestateagents.com',
    slug: 'chiang-mai-estate-agents',
    tags: ['Real Estate', 'Property', 'WordPress', 'CMS'],
    languages: ['JavaScript', 'HTML5', 'CSS3', 'PHP'],
    scope: {
      title: 'Project Scope',
      description:
        'The real estate agency had been working with an open source real-estate management system (Open Realty) but they were troubled by the lack of customizations that were available to them, especially as the system was targeted towards US agencies and did not meet the specifications that the required as they are based in Thailand. Together with the client, we engineered a solution on top of Wordpress that would meet their needs and also offer easy maintainability for the future',
      tags: [
        'Website Design',
        'Website Development',
        'Systems Integration',
        'Logo Design',
        'Brochure Design',
        'Business Consulting',
        'Business Management',
        'Marketing',
        'Social Marketing',
        'Email Marketing',
      ],
      objectives: [
        {
          title: 'Website Design',
          description:
            'Their website was singled out as being their number 1 priority. To differentiate themselves from their competitors, they wanted a site that was aesthetically pleasing and also functional.',
        },
        {
          title: 'Features',
          description:
            'The site should be full of features that gave their clients the information they wanted and quickly. The information needed to be relevant for their locale.',
        },
        {
          title: 'Mapping',
          description:
            'They need to be able to show properties along with relevant information on a map with other locale information such as nearest schools and shopping facilities',
        },
        {
          title: 'Agents',
          description:
            'The agency employed a number of agents. They should be able to log in, post properties, be contactable as the agent of that property and manage their clients',
        },
        {
          title: 'Clients',
          description:
            'Clients on both sides of the market should be able to contact the agency and fulfil their property goals',
        },
        {
          title: 'Branding and Marketing',
          description:
            'Strengthen brand awareness and confidence through branded digital and printed materials and contents',
        },
      ],
    },
    links: [
      {
        url: 'chiangmaiestateagents.com',
        type: 'site',
      },
      {
        url: '#',
        type: 'demo',
      },
      {
        url: '#',
        type: 'docs',
      },
      {
        url: '#',
        type: 'github',
      },
      {
        url: '#',
        type: 'codepen',
      },
    ],
    screenshots: {
      logo: {
        url: '/projects/logo/cmea-logo.jpg',
        width: 300,
        height: 300,
      },
      logoBanner: {
        url: '/projects/logo/cmea-banner-logo.png',
        width: 250,
        height: 106,
      },
      webScreenshot: {
        url: '/projects/screenshots/chiangmaiestateagents.com-macbook-pro-16.png',
        width: 3072,
        height: 1920,
      },
      webPageshot: {
        url: '/projects/screenshots/chiangmaiestateagents.com-macbook-pro-16-full.png',
        width: 3102,
        height: 10416,
      },
      tabletScreenshot: {
        url: '/projects/screenshots/chiangmaiestateagents.com-ipad.png',
        width: 1536,
        height: 2048,
      },
      tabletLandscapeScreenshot: {
        url: '/projects/screenshots/chiangmaiestateagents.com-ipad-landscape.png',
        width: 2048,
        height: 1536,
      },
      tabletPageshot: {
        url: '/projects/screenshots/chiangmaiestateagents.com-ipad-full.png',
        width: 1566,
        height: 15574,
      },
      tabletLandscapePageShot: {
        url: '/projects/screenshots/chiangmaiestateagents.com-ipad-landscape-full.png',
        width: 2112,
        height: 11684,
      },
      mobileScreenshot: {
        url: '/projects/screenshots/chiangmaiestateagents.com-iphone-xr.png',
        width: 1242,
        height: 2688,
      },
      mobileLandscapeScreenshot: {
        url: '/projects/screenshots/chiangmaiestateagents.com-iphone-xr-landscape.png',
        width: 2688,
        height: 1242,
      },
      mobilePageshot: {
        url: '/projects/screenshots/chiangmaiestateagents.com-iphone-xr-full.png',
        width: 1287,
        height: 40371,
      },
      mobileLandscapePageshot: {
        url: '/projects/screenshots/chiangmaiestateagents.com-iphone-xr-landscape-full.png',
        width: 2826,
        height: 19464,
      },
    },
  },
  {
    id: 2,
    title: 'Business and Finance News and Interviews',
    name: 'BIG EYE NEWS',
    description: '',
    intro: 'Business and Finance News and Interviews',
    domain: 'bigeye.news',
    slug: 'big-eye-news',
    tags: ['News', 'Video', 'WordPress', 'CMS'],
    languages: ['JavaScript', 'HTML5', 'CSS3', 'PHP'],
    scope: {
      title: 'Project Scope',
      description: 'The project had the following scopes',
      tags: [
        'Website Design',
        'Website Development',
        'Logo Design',
        'Business Consulting',
      ],
      objectives: [
        {
          title: 'objective title',
          description:
            'A longer description about the objectives and scope of the product',
        },
        {
          title: 'objective title',
          description:
            'A longer description about the objectives and scope of the product',
        },
      ],
    },
    links: [
      {
        url: 'bigeye.news',
        type: 'site',
      },
    ],
    screenshots: {
      logo: {
        url: '/projects/logo/big-eye-news-logo.svg',
        width: 300,
        height: 300,
      },
      logoBanner: {
        url: '/projects/logo/big-eye-news-logo.svg',
        width: 250,
        height: 106,
      },
      webScreenshot: {
        url: '/projects/screenshots/bigeye.news-macbook-pro-16.png',
        width: 3072,
        height: 1920,
      },
      webPageshot: {
        url: '/projects/screenshots/bigeye.news-macbook-pro-16-full.png',
        width: 3102,
        height: 10416,
      },
      tabletScreenshot: {
        url: '/projects/screenshots/bigeye.news-ipad.png',
        width: 1536,
        height: 2048,
      },
      tabletLandscapeScreenshot: {
        url: '/projects/screenshots/bigeye.news-ipad-landscape.png',
        width: 2048,
        height: 1536,
      },
      tabletPageshot: {
        url: '/projects/screenshots/bigeye.news-ipad-full.png',
        width: 1566,
        height: 15574,
      },
      tabletLandscapePageShot: {
        url: '/projects/screenshots/bigeye.news-ipad-landscape-full.png',
        width: 2112,
        height: 11684,
      },
      mobileScreenshot: {
        url: '/projects/screenshots/bigeye.news-iphone-xr.png',
        width: 1242,
        height: 2688,
      },
      mobileLandscapeScreenshot: {
        url: '/projects/screenshots/bigeye.news-iphone-xr-landscape.png',
        width: 2688,
        height: 1242,
      },
      mobilePageshot: {
        url: '/projects/screenshots/bigeye.news-iphone-xr-full.png',
        width: 1287,
        height: 40371,
      },
      mobileLandscapePageshot: {
        url: '/projects/screenshots/bigeye.news-iphone-xr-landscape-full.png',
        width: 2826,
        height: 19464,
      },
    },
  },
  {
    id: 3,
    title: 'Video Platform Development',
    name: 'Nonovium',
    description: '',
    intro: 'Video Platform and Encoding Pipelines',
    domain: 'nonovium.com',
    slug: 'nonovium',
    tags: ['Video', 'Encoding', 'FFMPEG', 'CMS'],
    languages: ['JavaScript', 'HTML5', 'CSS3', 'Python'],
    scope: {
      title: 'Project Scope',
      description: 'The project had the following scopes',
      tags: [
        'Website Design',
        'Website Development',
        'Systems Integration',
        'Logo Design',
        'Business Management',
        'Marketing',
      ],
      objectives: [
        {
          title: 'objective title',
          description:
            'A longer description about the objectives and scope of the product',
        },
        {
          title: 'objective title',
          description:
            'A longer description about the objectives and scope of the product',
        },
      ],
    },
    links: [
      {
        url: 'nonovium.com',
        type: 'site',
      },
    ],
    screenshots: {
      logo: {
        url: '/projects/logo/nonovium-logo.svg',
        width: 300,
        height: 300,
      },
      logoBanner: {
        url: '/projects/logo/cmea-banner-logo.png',
        width: 250,
        height: 106,
      },
      webScreenshot: {
        url: '/projects/screenshots/nonovium.com-macbook-pro-16.png',
        width: 3072,
        height: 1920,
      },
      webPageshot: {
        url: '/projects/screenshots/nonovium.com-macbook-pro-16-full.png',
        width: 3102,
        height: 10416,
      },
      tabletScreenshot: {
        url: '/projects/screenshots/nonovium.com-ipad.png',
        width: 1536,
        height: 2048,
      },
      tabletLandscapeScreenshot: {
        url: '/projects/screenshots/nonovium.com-ipad-landscape.png',
        width: 2048,
        height: 1536,
      },
      tabletPageshot: {
        url: '/projects/screenshots/nonovium.com-ipad-full.png',
        width: 1566,
        height: 15574,
      },
      tabletLandscapePageShot: {
        url: '/projects/screenshots/nonovium.com-ipad-landscape-full.png',
        width: 2112,
        height: 11684,
      },
      mobileScreenshot: {
        url: '/projects/screenshots/chiangmaiestateagents.com-iphone-xr.png',
        width: 1242,
        height: 2688,
      },
      mobileLandscapeScreenshot: {
        url: '/projects/screenshots/nonovium.com-iphone-xr-landscape.png',
        width: 2688,
        height: 1242,
      },
      mobilePageshot: {
        url: '/projects/screenshots/nonovium.com-iphone-xr-full.png',
        width: 1287,
        height: 40371,
      },
      mobileLandscapePageshot: {
        url: '/projects/screenshots/nonovium.com-iphone-xr-landscape-full.png',
        width: 2826,
        height: 19464,
      },
    },
  },
  {
    id: 4,
    title:
      'Childcare Booking System with integrated CRM and Accounting Software',
    name: 'Chiang Mai Babysitters',
    description: '',
    intro:
      'Childcare Booking System with integrated CRM and Accounting Software',
    domain: 'chiangmaibabysitters.com',
    slug: 'chiang-mai-babysitters',
    tags: [
      'CRM',
      'Systems Integration',
      'Training',
      'Wordpress',
      'CMS',
      'Zoho',
    ],
    languages: ['JavaScript', 'HTML5', 'CSS3'],
    scope: {
      title: 'Project Scope',
      description: 'The project had the following scopes',
      tags: [
        'Website Design',
        'Website Development',
        'Systems Integration',
        'Logo Design',
        'Business Management',
        'Marketing',
        'Social Media',
        'Brochure Design',
        'Training',
      ],
      objectives: [
        {
          title: 'objective title',
          description:
            'A longer description about the objectives and scope of the product',
        },
        {
          title: 'objective title',
          description:
            'A longer description about the objectives and scope of the product',
        },
      ],
    },
    links: [
      {
        url: 'chiangmaibabysitters.com',
        type: 'site',
      },
    ],
    screenshots: {
      logo: {
        url: '/projects/logo/chiang-mai-babysitters-logo.svg',
        width: 300,
        height: 300,
      },
      logoBanner: {
        url: '/projects/logo/cmea-banner-logo.png',
        width: 250,
        height: 106,
      },
      webScreenshot: {
        url: '/projects/screenshots/nonovium.com-macbook-pro-16.png',
        width: 3072,
        height: 1920,
      },
      webPageshot: {
        url: '/projects/screenshots/nonovium.com-macbook-pro-16-full.png',
        width: 3102,
        height: 10416,
      },
      tabletScreenshot: {
        url: '/projects/screenshots/nonovium.com-ipad.png',
        width: 1536,
        height: 2048,
      },
      tabletLandscapeScreenshot: {
        url: '/projects/screenshots/nonovium.com-ipad-landscape.png',
        width: 2048,
        height: 1536,
      },
      tabletPageshot: {
        url: '/projects/screenshots/nonovium.com-ipad-full.png',
        width: 1566,
        height: 15574,
      },
      tabletLandscapePageShot: {
        url: '/projects/screenshots/nonovium.com-ipad-landscape-full.png',
        width: 2112,
        height: 11684,
      },
      mobileScreenshot: {
        url: '/projects/screenshots/chiangmaiestateagents.com-iphone-xr.png',
        width: 1242,
        height: 2688,
      },
      mobileLandscapeScreenshot: {
        url: '/projects/screenshots/nonovium.com-iphone-xr-landscape.png',
        width: 2688,
        height: 1242,
      },
      mobilePageshot: {
        url: '/projects/screenshots/nonovium.com-iphone-xr-full.png',
        width: 1287,
        height: 40371,
      },
      mobileLandscapePageshot: {
        url: '/projects/screenshots/nonovium.com-iphone-xr-landscape-full.png',
        width: 2826,
        height: 19464,
      },
    },
  },
  {
    id: 5,
    title: 'A video platform for serious investors',
    name: 'BIG EYE Video',
    description: '',
    intro: 'A video platform for serious investors',
    domain: 'bigeye.video',
    slug: 'big-eye-video',
    tags: ['News', 'Video', 'WordPress', 'CMS'],
    languages: ['JavaScript', 'HTML5', 'CSS3', 'PHP'],
    scope: {
      title: 'Project Scope',
      description: 'The project had the following scopes',
      tags: [
        'Website Design',
        'Website Development',
        'Logo Design',
        'Business Consulting',
      ],
      objectives: [
        {
          title: 'objective title',
          description:
            'A longer description about the objectives and scope of the product',
        },
        {
          title: 'objective title',
          description:
            'A longer description about the objectives and scope of the product',
        },
      ],
    },
    links: [
      {
        url: 'bigeye.video',
        type: 'site',
      },
    ],
    screenshots: {
      logo: {
        url: '/projects/logo/big-eye-video-logo.png',
        width: 300,
        height: 300,
      },
      logoBanner: {
        url: '/projects/logo/big-eye-news-logo.svg',
        width: 250,
        height: 106,
      },
      webScreenshot: {
        url: '/projects/screenshots/bigeye.news-macbook-pro-16.png',
        width: 3072,
        height: 1920,
      },
      webPageshot: {
        url: '/projects/screenshots/bigeye.news-macbook-pro-16-full.png',
        width: 3102,
        height: 10416,
      },
      tabletScreenshot: {
        url: '/projects/screenshots/bigeye.news-ipad.png',
        width: 1536,
        height: 2048,
      },
      tabletLandscapeScreenshot: {
        url: '/projects/screenshots/bigeye.news-ipad-landscape.png',
        width: 2048,
        height: 1536,
      },
      tabletPageshot: {
        url: '/projects/screenshots/bigeye.news-ipad-full.png',
        width: 1566,
        height: 15574,
      },
      tabletLandscapePageShot: {
        url: '/projects/screenshots/bigeye.news-ipad-landscape-full.png',
        width: 2112,
        height: 11684,
      },
      mobileScreenshot: {
        url: '/projects/screenshots/bigeye.news-iphone-xr.png',
        width: 1242,
        height: 2688,
      },
      mobileLandscapeScreenshot: {
        url: '/projects/screenshots/bigeye.news-iphone-xr-landscape.png',
        width: 2688,
        height: 1242,
      },
      mobilePageshot: {
        url: '/projects/screenshots/bigeye.news-iphone-xr-full.png',
        width: 1287,
        height: 40371,
      },
      mobileLandscapePageshot: {
        url: '/projects/screenshots/bigeye.news-iphone-xr-landscape-full.png',
        width: 2826,
        height: 19464,
      },
    },
  },
  {
    id: 6,
    title: 'A crypto data platform with up to the minute pricing and charting',
    name: 'Crystal Crypto',
    description: '',
    intro: 'A crypto data platform with up to the minute pricing and charting',
    domain: 'crypto.stevensaunders.dev',
    slug: 'crystal-crypto',
    tags: ['News', 'Video', 'WordPress', 'CMS'],
    languages: ['JavaScript', 'HTML5', 'CSS3', 'PHP'],
    scope: {
      title: 'Project Scope',
      description: 'The project had the following scopes',
      tags: [
        'Website Design',
        'Website Development',
        'Logo Design',
        'Business Consulting',
      ],
      objectives: [
        {
          title: 'objective title',
          description:
            'A longer description about the objectives and scope of the product',
        },
        {
          title: 'objective title',
          description:
            'A longer description about the objectives and scope of the product',
        },
      ],
    },
    links: [
      {
        url: 'cryptostevensaunders.dev',
        type: 'site',
      },
    ],
    screenshots: {
      logo: {
        url: '/projects/logo/crystal-crypto-logo.svg',
        width: 300,
        height: 300,
      },
      logoBanner: {
        url: '/projects/logo/crypto.stevensaunders.dev-logo.svg',
        width: 250,
        height: 106,
      },
      webScreenshot: {
        url: '/projects/screenshots/crypto.stevensaunders.dev-macbook-pro-16.png',
        width: 3072,
        height: 1920,
      },
      webPageshot: {
        url: '/projects/screenshots/crypto.stevensaunders.dev-macbook-pro-16-full.png',
        width: 3102,
        height: 10416,
      },
      tabletScreenshot: {
        url: '/projects/screenshots/crypto.stevensaunders.dev-ipad.png',
        width: 1536,
        height: 2048,
      },
      tabletLandscapeScreenshot: {
        url: '/projects/screenshots/crypto.stevensaunders.dev-ipad-landscape.png',
        width: 2048,
        height: 1536,
      },
      tabletPageshot: {
        url: '/projects/screenshots/crypto.stevensaunders.dev-ipad-full.png',
        width: 1566,
        height: 15574,
      },
      tabletLandscapePageShot: {
        url: '/projects/screenshots/crypto.stevensaunders.dev-ipad-landscape-full.png',
        width: 2112,
        height: 11684,
      },
      mobileScreenshot: {
        url: '/projects/screenshots/crypto.stevensaunders.dev-iphone-xr.png',
        width: 1242,
        height: 2688,
      },
      mobileLandscapeScreenshot: {
        url: '/projects/screenshots/crypto.stevensaunders.dev-iphone-xr-landscape.png',
        width: 2688,
        height: 1242,
      },
      mobilePageshot: {
        url: '/projects/screenshots/crypto.stevensaunders.dev-iphone-xr-full.png',
        width: 1287,
        height: 40371,
      },
      mobileLandscapePageshot: {
        url: '/projects/screenshots/crypto.stevensaunders.dev-iphone-xr-landscape-full.png',
        width: 2826,
        height: 19464,
      },
    },
  },
];

module.exports = {
  projects,
};
