import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

const sitemap = new SitemapStream({
  hostname: "https://dz-quotes.netlify.app",
});

const links = [{ url: "/", changefreq: "daily", priority: 1.0 }];

links.forEach((link) => sitemap.write(link));
sitemap.end();

streamToPromise(sitemap)
  .then((data) => createWriteStream("./dist/sitemap.xml").write(data))
  .catch((err) => console.error(err));
