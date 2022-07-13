export interface ProjectType {
  id: number;
  title: string;
  name: string;
  intro: string;
  domain: string;
  slug: string;
  tags: string[];
  languages: string[];
  scope: ProjectScope;
  screenshots: { [key: string]: ProjectScreenshot };
}

export interface ProjectScope {
  tags: string[];
}

export interface ProjectScreenshot {
  url: string;
  width: number;
  height: number;
}

export type ProjectsType = ProjectType[];

export const projects: ProjectsType = [
  {
    id: 1,
    title: 'A Real Estate Platform Built on Wordpress',
    name: 'Chiang Mai Estate Agents',
    intro: 'A property portal built on top of WordPress.',
    domain: 'chiangmaiestateagents.com',
    slug: 'chiang-mai-estate-agents',
    tags: ['Real Estate', 'Property', 'WordPress', 'CMS'],
    languages: ['JavaScript', 'HTML', 'CSS', 'PHP'],
    scope: {
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
    },
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
    intro: 'Business and Finance News and Interviews',
    domain: 'bigeye.news',
    slug: 'big-eye-news',
    tags: ['News', 'Video', 'WordPress', 'CMS'],
    languages: ['JavaScript', 'HTML', 'CSS', 'PHP'],
    scope: {
      tags: [
        'Website Design',
        'Website Development',
        'Logo Design',
        'Business Consulting',
      ],
    },
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
    intro: 'Video Platform and Encoding Pipelines',
    domain: 'nonovium.com',
    slug: 'nonovium',
    tags: ['Video', 'Encoding', 'FFMPEG', 'CMS'],
    languages: ['JavaScript', 'HTML', 'CSS', 'Python'],
    scope: {
      tags: [
        'Website Design',
        'Website Development',
        'Systems Integration',
        'Logo Design',
        'Business Management',
        'Marketing',
      ],
    },
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
    languages: ['JavaScript', 'HTML', 'CSS'],
    scope: {
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
    },
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
    intro: 'A video platform for serious investors',
    domain: 'bigeye.video',
    slug: 'big-eye-video',
    tags: ['News', 'Video', 'WordPress', 'CMS'],
    languages: ['JavaScript', 'HTML', 'CSS', 'PHP'],
    scope: {
      tags: [
        'Website Design',
        'Website Development',
        'Logo Design',
        'Business Consulting',
      ],
    },
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
    intro: 'A crypto data platform with up to the minute pricing and charting',
    domain: 'crypto.stevensaunders.dev',
    slug: 'crystal-crypto',
    tags: ['News', 'Video', 'WordPress', 'CMS'],
    languages: ['JavaScript', 'HTML', 'CSS', 'PHP'],
    scope: {
      tags: [
        'Website Design',
        'Website Development',
        'Logo Design',
        'Business Consulting',
      ],
    },
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
