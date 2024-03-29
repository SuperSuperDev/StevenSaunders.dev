export interface Project {
  id: number;
  title: string;
  subTitle?: string;
  name: string;
  description: string;
  intro: string;
  domain: string;
  yearStart: number;
  yearEnd: number;
  slug: string;
  tags: string[];
  category: string;
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
  url?: string;
  width?: number;
  height?: number;
}

export interface Link {
  url: string;
  type: 'GitHub' | 'CodePen' | 'www' | 'demo' | 'Site' | 'docs' | 'YouTube';
}

export type Links = Link[];

export const projects: Projects = [
  {
    id: 1,
    title: 'A Real Estate Platform Built on Wordpress',
    subTitle: 'A property portal built on top of WordPress.',
    name: 'Chiang Mai Estate Agents',
    description:
      '## Chiang Mai Estate Agents\n\nA property portal built on top of WordPress.',
    intro:
      "An estate agents website is their 'bread and butter' and brand is everything. My role within this company included branding, design, and overseeing the entire front-end development process.",
    domain: 'chiangmaiestateagents.com',
    yearStart: 2011,
    yearEnd: 2018,
    slug: 'chiang-mai-estate-agents',
    tags: ['Real Estate', 'Property', 'WordPress', 'CMS'],
    category: 'Work',
    languages: [
      'JavaScript',
      'HTML5',
      'CSS3',
      'bootstrap',
      'WordPress',
      'NGINX',
      'PhotoShop',
      'Illustrator',
    ],
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
        type: 'Site',
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
    subTitle: 'News Website and YouTube Channel.',
    name: 'BIG EYE NEWS',
    description: '',
    intro:
      'Business and Finance News and Video Interviews. Responsible for branding, video effects and editing and website development',
    domain: 'bigeye.news',
    yearStart: 2020,
    yearEnd: 2022,
    slug: 'big-eye-news',
    tags: ['News', 'Video', 'WordPress', 'CMS'],
    category: 'Personal',
    languages: [
      'JavaScript',
      'HTML5',
      'CSS3',
      'FFMPEG',
      'WordPress',
      'NGINX',
      'AfterEffects',
      'PhotoShop',
    ],
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
        type: 'Site',
      },
      {
        url: 'YouTube.com/c/BigEyeMedia',
        type: 'YouTube',
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
    title: 'Custom Video Platform Development',
    subTitle: 'Video Platform Development and Encoding Pipelines',
    name: 'Nonovium',
    description: '',
    intro:
      'Custom video platforms for companies that want complete control of their data and full branding. Features offered include: Frontend development with React, Video CMS backend powered by Django, and scalable video encoding with FFmpeg, Redis and Celery.',
    domain: 'nonovium.com',
    yearStart: 2020,
    yearEnd: 2022,
    slug: 'nonovium',
    tags: ['Video', 'Encoding', 'FFMPEG', 'CMS'],
    category: 'Work',
    languages: [
      'FFmpeg',
      'Django',
      'Python',
      'Redis',
      'PostgreSQL',
      'JavaScript',
      'HTML5',
      'CSS3',
      'React',
      'Wordpress',
    ],
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
        type: 'Site',
      },
      {
        url: 'github.com/Nonovium',
        type: 'GitHub',
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
    subTitle: 'Childcare Booking System and Frontend Development',
    name: 'Chiang Mai Babysitters',
    description: '',
    yearStart: 2014,
    yearEnd: 2018,
    intro:
      'Childcare Booking System that managed the entire booking process including staff training, scheduling, and payment. The system was built with a WordPress frontend integrated with Zoho CRM and Zoho Books.',
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
    category: 'Work',
    languages: [
      'JavaScript',
      'HTML5',
      'CSS3',
      'WordPress',
      'PhotoShop',
      'Illustrator',
    ],
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
        type: 'Site',
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
    title: 'A Video Platform for Serious Investors',
    subTitle: 'COMING SOON: Custom Video Platform for investors',
    name: 'BIG EYE Video',
    description: '',
    intro:
      'A video platform for serious investors to share their videos with the world.',
    domain: 'bigeye.video',
    yearStart: 2021,
    yearEnd: 2022,
    slug: 'big-eye-video',
    tags: ['News', 'Video', 'WordPress', 'CMS'],
    category: 'Personal',
    languages: [
      'FFmpeg',
      'Django',
      'Docker',
      'OpenStack',
      'Python',
      'Redis',
      'PostgreSQL',
      'JavaScript',
      'HTML5',
      'CSS3',
      'React',
    ],
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
    links: [],
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
    title:
      'GA: A crypto data platform with up to the minute pricing and charting',
    subTitle:
      'General Assembly SEI: A crypto data platform built in just two days',
    name: 'Crystal Crypto',
    description: '',
    intro:
      "A crypto platform built as a pair-programming exercise during General Assembly's Software Engineering Immersive. The frontend was completed in just two days and includes a charting library and a pricing API.",
    domain: 'crypto.stevensaunders.dev',
    yearStart: 2021,
    yearEnd: 2021,
    slug: 'crystal-crypto',
    tags: [
      'General Assembly',
      'Bootcamp',
      'React',
      'Bulma',
      'Crypto',
      'API',
      'Pricing',
      'Charting',
    ],
    category: 'Education',
    languages: [
      'General Assembly',
      'React',
      'JavaScript',
      'Docker',
      'OpenStack',
      'HTML5',
      'CSS3',
      'Bulma',
    ],
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
        url: 'crypto.stevensaunders.dev',
        type: 'Site',
      },
      {
        url: 'github.com/SuperSuperDev/crystal-crypto-prices-sei-project-2',
        type: 'GitHub',
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
  {
    id: 7,
    title: 'GA: PacMan-JS - A Tribute to a Classic Arcade Game',
    subTitle: 'General Assembly SEI: A PacMan Game built with Vanilla JS',
    name: 'PacMan-JS',
    description: `Pac Man is a classic arcade game from the 80s. The player aims eat all the food in a maze whilst being hunted by ghosts.

If the player eats special flashing food the ghosts start to flash and can now be captured by the player, sending them back to their holding pen, from where they can once again start to hunt the player.

The aim is to achieve the highest score possible before being killed by the ghosts.`,
    intro:
      "A PacMan game built with vanilla JavaScript as a solo programming exercise during General Assembly's Software Engineering Immersive.",
    domain: 'codepen.io/supersuperdev/full/xxYLvPR',
    yearStart: 2021,
    yearEnd: 2021,
    slug: 'pacman-js',
    tags: ['General Assembly', 'Bootcamp', 'JS', 'Vanilla JS', 'Games'],
    category: 'Education',
    languages: ['General Assembly', 'JavaScript', 'HTML5', 'CSS3', 'Docker'],
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
          title: 'Requirement 1',
          description: 'The player should be able to clear at least one board',
        },
        {
          title: 'Requirement 2',
          description:
            "The player's score should be displayed at the end of the game",
        },
        {
          title: 'Enhancement 1',
          description: 'Smart Ghosts',
        },
        {
          title: 'Enhancement 2',
          description: 'Responsive design',
        },
        {
          title: 'Enhancement 3',
          description: 'Each board gets more difficult',
        },
        {
          title: 'Enhancement 4',
          description: 'Persistent leaderboard using `localStorage`',
        },
      ],
    },
    links: [
      {
        url: 'codepen.io/supersuperdev/full/xxYLvPR',
        type: 'CodePen',
      },
      {
        url: 'github.com/SuperSuperDev/PacMan-JS',
        type: 'GitHub',
      },
      {
        url: 'pacman.stevensaunders.dev',
        type: 'Site',
      },
    ],
    screenshots: {
      logo: {
        url: '/projects/logo/pacman-js-logo.png',
        width: 300,
        height: 300,
      },
      logoBanner: {
        url: '/projects/logo/crypto.stevensaunders.dev-logo.svg',
        width: 250,
        height: 106,
      },
      webScreenshot: {
        url: '/projects/screenshots/pacman.stevensaunders.dev-macbook-pro-16.png',
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
  {
    id: 8,
    title: 'GA: Cloudify - A MERN Stack Music Platform',
    subTitle: 'Online Music Player and Sharing Service',
    name: 'Cloudify',
    description: '',
    intro:
      'A MERN Stack music player and sharing service built with React, Express, MongoDB, and Node.js as a group programming exercise during General Assembly’s Software Engineering Immersive.',
    domain: 'cloudify.stevensaunders.dev',
    yearStart: 2021,
    yearEnd: 2021,
    slug: 'cloudinary',
    tags: [
      'General Assembly',
      'Bootcamp',
      'React',
      'Bulma',
      'Express',
      'MongoDB',
      'Node.js',
      'API',
      'Music',
      'Media',
    ],
    category: 'Education',
    languages: [
      'General Assembly',
      'MongoDB',
      'Express',
      'React',
      'Node.js',
      'JavaScript',
      'Docker',
      'OpenStack',
      'Bulma',
      'HTML5',
      'CSS3',
    ],
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
        url: 'cloudify.stevensaunders.dev',
        type: 'Site',
      },
      {
        url: 'github.com/SuperSuperDev/project-3-server',
        type: 'GitHub',
      },
      {
        url: 'github.com/SuperSuperDev/project-3-client',
        type: 'GitHub',
      },
    ],
    screenshots: {
      logo: {
        url: '/projects/logo/cloudify-logo.svg',
        width: 300,
        height: 300,
      },
    },
  },
  {
    id: 9,
    title: 'StevenSaunders.dev - A Portfolio Site',
    subTitle: 'Personal Portfolio Site built with Next.js and TypeScript',
    name: 'StevenSaunders.dev',
    description: '',
    intro:
      'A personal portfolio site built with Next.js and TypeScript. The site is fully responsive and is hosted on OpenStack with Docker.',
    domain: 'StevenSaunders.dev',
    yearStart: 2021,
    yearEnd: 2022,
    slug: 'stevensaunders-dev',
    tags: [
      'Personal',
      'Portfolio',
      'Next.js',
      'TypeScript',
      'OpenStack',
      'Docker',
      'OpenStack',
    ],
    category: 'Personal',
    languages: [
      'React',
      'Nextjs',
      'TypeScript',
      'JavaScript',
      'Django',
      'Redis',
      'Docker',
      'OpenStack',
      'PostgreSQL',
      'TailwindCSS',
      'HTML5',
      'CSS3',
    ],
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
        url: 'stevensaunders.dev',
        type: 'Site',
      },
      {
        url: 'github.com/SuperSuperDev/stevensaunders-dev',
        type: 'GitHub',
      },
    ],
    screenshots: {
      logo: {
        url: '/projects/logo/stevensaunders-dev.svg',
        width: 300,
        height: 300,
      },
    },
  },
];

module.exports = {
  projects,
};
