seo:

static metadata
title template
favicon
opengraph-image
next/font
next/image


take note file favicon.ico
https://realfavicongenerator.net/


https://docs.srv.us/
---

https://socialsharepreview.com/

http://localhost:3000/sitemap.xml


import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/privacy"],
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  };
}


robot file, robot ko dung den /admin , /privacy

http://localhost:3000/robots.txt


