import fs from "fs";
import routes from "./app/routes"; 

const BASE_URL = "https://nurdjedidi.com";

const urls = routes.map(r => {
  if ("path" in r) return `${BASE_URL}/${r.path}`;
  return BASE_URL;
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${u}</loc></url>`).join("\n")}
</urlset>`;

fs.writeFileSync("public/sitemap.xml", xml);

