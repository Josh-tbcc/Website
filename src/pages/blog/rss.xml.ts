import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { site } from '../../config/site';
import { publishedPosts } from '../../utils/posts';

// Feed used by the email newsletter service to send each new post automatically
export async function GET(context: APIContext) {
  const posts = await publishedPosts();
  return rss({
    title: `${site.name} Blog`,
    description: 'Practical health tips from your Yandina chiropractors.',
    site: context.site ?? site.url,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: `/blog/${p.id}/`,
      enclosure: { url: `${site.url}${p.data.image}`, type: 'image/jpeg', length: 0 },
    })),
    customData: '<language>en-au</language>',
  });
}
