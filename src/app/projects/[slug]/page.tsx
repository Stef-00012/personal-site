import { notFound } from "next/navigation";
import { redirect } from "next/navigation";
import { projects } from "@/data/projects";

import type { Metadata } from "next";
import { use } from "react";

interface Data {
	params: Promise<{
		slug: string;
	}>;
}

type Props = {
	params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const projectName = (await params).slug;

	const selectedProject = projects.find((project) => project.slug === projectName);

	if (!selectedProject) return {};

	return {
		openGraph: {
			title: selectedProject.name,
			description: selectedProject.description || undefined,
		},
		twitter: {
			title: selectedProject.name,
			description: selectedProject.description || undefined,
		},
		title: selectedProject.name,
		description: selectedProject.description || undefined,
	};
}

export default function Projects({ params }: Data) {
	const { slug: projectName } = use(params);

	const selectedProject = projects.find((project) => project.slug === projectName);

	if (!selectedProject || (!selectedProject.source && !selectedProject.url)) return notFound();

	redirect((selectedProject.url || selectedProject.source) as string);
}
