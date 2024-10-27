const EXTERNAL_DATA_URL = 'https://jsonplaceholder.typicode.com/posts';
import { Tools } from "@/utils/constants";
function generateSiteMap(posts, hostUrl) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>${hostUrl}</loc>
       <lastmod>2023-02-04</lastmod>
     </url>
     <url>
       <loc>${hostUrl}/blog</loc>
       <lastmod>2023-02-04</lastmod>
     </url>
       <url>
       <loc>${hostUrl}/contact</loc>
       <lastmod>2023-02-04</lastmod>
     </url>
      <url>
       <loc>${hostUrl}/about</loc>
       <lastmod>2023-02-04</lastmod>
      </url>
      <url>
      <loc>https://nerdyqai.com/tools</loc>
      <lastmod>2023-08-15</lastmod>
      </url>
      ${Tools.map((tool) => {
    return (
      `
          <url>
          <loc>${hostUrl}/tools/${tool.link}</loc>
          <lastmod>${new Date(Date.now()).toISOString()}</lastmod>
          </url>
          `
    )
  })}


     ${posts.map((post) => {
    return `
       <url>
           <loc>${`${hostUrl}/blog/category/${post.category}/${post.link}`}</loc>
            <lastmod>${post.updatedAt}</lastmod>
       </url>
     `;
  })
      .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps(context) {
  // We make an API call to gather the URLs for our site
  const isProd = process.env.NODE_ENV == "production" ? true : false

  const host = context.req.headers.host

  const hostUrl = `${isProd ? "https://" : "http://"}${host}`
  let data = await fetch(`${hostUrl}/api/blog/getposts`)
  let { posts } = await data.json()
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts, hostUrl);

  context.res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  context.res.write(sitemap);
  context.res.end();

  return {
    props: {},
  };
}

export default SiteMap;