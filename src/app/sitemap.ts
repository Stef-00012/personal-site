import { projects } from "@/data/projects";
import { baseUrl } from "@/data/constants";
import { socials } from "@/data/socials";

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const sitemap: MetadataRoute.Sitemap = [
		{
			url: `${baseUrl}`,
			lastModified: new Date(),
			priority: 1,
		},
	];

    for (const social of socials) {
        sitemap.push({
            url: `${baseUrl}/socials/${social.id}`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        })
    }

    for (const project of projects) {
        sitemap.push({
            url: `${baseUrl}/projects/${project.slug}`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.4,
        })
    }

	return sitemap;
}
