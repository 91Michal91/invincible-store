import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/pl/account",
        "/pl/cart",
        "/pl/checkout",
        "/api",
      ],
    },
    sitemap: "https://sklep.invinciblepolska.pl/sitemap.xml",
  }
}
