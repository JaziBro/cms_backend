export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:3000', 'https://nextjs-pamphlet-site.vercel.app'], // for now, to debug
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      credentials: true,
    },
  }, 
  'strapi::security',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',

  // 🔥 Explicitly serve public folder (especially uploads)
  {
    name: 'strapi::public',
    config: {
      path: './public',
      maxAge: 60000,
    },
  },
];
