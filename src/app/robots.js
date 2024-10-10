export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/components/',
      },
      sitemap: 'https://shidostudio.be/sitemap.xml',
    }
  }