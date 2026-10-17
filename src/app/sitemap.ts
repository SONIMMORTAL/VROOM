import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/privacy/"].map((path) => ({
    url: new URL(path, SITE.url).toString(),
  }));
}
