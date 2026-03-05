import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://alloyc.vercel.app/',
            lastModified: new Date(),
        },
        {
            url: 'https://alloyc.vercel.app/contacts',
            lastModified: new Date(),
        },
        {
            url: 'https://alloyc.vercel.app/blog',
            lastModified: new Date(),
        },
        {
            url: 'https://alloyc.vercel.app/just-buy',
            lastModified: new Date(),
        },
        {
            url: 'https://alloyc.vercel.app/fupps',
            lastModified: new Date(),
        },
        {
            url: 'https://alloyc.vercel.app/music-web-app',
            lastModified: new Date(),
        },
    ]
}