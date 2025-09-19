// app/sitemap.js
export default async function sitemap() {
  const baseUrl = "https://histovoid.org";

  // All your navItems flattened into a list of URLs
  const urls = [
    { url: "/", lastModified: new Date() },
    { url: "/epithelium", lastModified: new Date() },
    { url: "/connective", lastModified: new Date() },
    { url: "/cartilage", lastModified: new Date() },
    { url: "/bone", lastModified: new Date() },
    { url: "/nervous", lastModified: new Date() },
    { url: "/propulsion", lastModified: new Date() },
    { url: "/skin", lastModified: new Date() },
    { url: "/nervoussystem", lastModified: new Date() },
    { url: "/receptors", lastModified: new Date() },
    { url: "/ear", lastModified: new Date() },
    { url: "/eye", lastModified: new Date() },
    { url: "/endocrine", lastModified: new Date() },
    { url: "/git", lastModified: new Date() },
    { url: "/gitglands", lastModified: new Date() },
    { url: "/respiratory", lastModified: new Date() },
    { url: "/cardio", lastModified: new Date() },
    { url: "/immune", lastModified: new Date() },
    { url: "/urinary", lastModified: new Date() },
    { url: "/reproductive", lastModified: new Date() },
  ];

  return urls.map((item) => ({
    url: `${baseUrl}${item.url}`,
    lastModified: item.lastModified,
  }));
}
