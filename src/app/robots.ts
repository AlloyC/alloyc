export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://alloyc.vercel.app/sitemap.xml",
  };
}