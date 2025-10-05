import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://iphoneshik.kg';

  const staticPages = [
    '',
    '/iphone',
    '/mac',
    '/ipad',
    '/watch',
    '/airpods',
    '/accessories',
    '/audio',
    '/gadgets',
    '/brands',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return staticPages;
}
