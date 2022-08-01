/** @type {import('next').NextConfig} */
module.exports = {
  async headers() {
    const frontendURL =
      process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000';
    return [
      {
        source: '/api/(.*)',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: frontendURL },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
  crossOrigin: 'anonymous',
  eslint: {
    dirs: ['src'],
  },
  images: {
    domains: [
      'localhost',
      'videocms.jcloud.ik-server.com/',
      's3.pub1.infomaniak.cloud',
      'vcms-ssl.capt.nonovium.com',
    ],
  },
  reactStrictMode: true,

  // Uncoment to add domain whitelist
  // images: {
  //   domains: [
  //     'res.cloudinary.com',
  //   ],
  // },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
  output: 'standalone',
};
