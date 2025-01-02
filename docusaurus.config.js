module.exports = {
  // ... other config
  plugins: [
    [
      '@docusaurus/plugin-sitemap',
      {
        changefreq: 'weekly',
        priority: 0.5,
        ignorePatterns: ['/tags/**'],
        filename: 'sitemap.xml',
      },
    ],
  ],
  // Make sure you have this URL set
  url: 'https://scriptflow.123x.dev',
  // Set your base URL if not serving from root
  baseUrl: '/',
}