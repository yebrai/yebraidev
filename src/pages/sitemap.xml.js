export default function Sitemap() {
    return (
      <div>
        <h1>Sitemap</h1>
      </div>
    );
  }
  
  export async function getServerSideProps({ res }) {
    res.setHeader('Content-Type', 'text/xml');
    res.write(`<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap-image/1.1">
        <url>
          <loc>https://www.yebraidev.es/</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>1.0</priority>
        </url>
      </urlset>`);
    res.end();
  
    return {
      props: {}, // no necesitas pasar props
    };
  }
  