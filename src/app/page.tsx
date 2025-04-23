"use client";

import { useLanyard } from "react-use-lanyard";
import { ComponentType, useEffect, useState } from "react";

import Loading from "@/components/loading";
import useHash from "@/hooks/useHash";

import Home from "@/views/home";
import Projects from "@/views/projects";
import About from "@/views/about";
import Rabbit from "@/views/rabbit";
import { getRankedRepos } from "@/functions/githubRepos";
import type { Project } from "@/types/projects";
import Script from "next/script";
import Select from "react-select";
import SelectOption from "@/components/select/option";
import { onekoVariants } from "@/data/constants";
import { useSearchParams, useRouter } from "next/navigation";

type Page = "rabbit" | "home" | "projects" | "about";

const pages: Page[] = ["rabbit", "home", "projects", "about"];

const onekoOptions = onekoVariants.map((variant) => ({
	value: variant,
	label: variant.charAt(0).toUpperCase() + variant.slice(1),
	icon: `/images/oneko/heads/${variant}.png`,
}))

export default function Main() {
	const router = useRouter();
	const searchParams = useSearchParams();

	let currentVariant = searchParams.get("neko") || "maia";

	if (!onekoVariants.includes(currentVariant)) currentVariant = "maia";

	const { loading, status } = useLanyard({
		userId: "694986201739952229",
		socket: true,
	});

	const hash = useHash();

	const [page, setPage] = useState<Page>("home");

	const [topRepos, setTopRepos] = useState<Project[]>([]);

	useEffect(() => {
		setPage((prevPage) =>
			pages.includes(hash as Page)
				? (hash as Page) || prevPage
				: hash === ""
					? "home"
					: prevPage,
		);
	}, [hash]);

	const [hideLoading, setHideLoading] = useState<boolean>(false);
	const [showHideLoadingButton, setShowHideLoadingButton] =
		useState<boolean>(false);

	useEffect(() => {
		async function fetchTopRepos() {
			const repos = await getRankedRepos();

			const projectRepos: Project[] = repos.map((repo) => ({
				name: repo.fullName,
				source: `https://github.com/${repo.fullName}`,
				description: repo.description,
				url: repo.homepage,
				git: repo,
				slug: "repo",
			}));

			setTopRepos(projectRepos);
		}

		fetchTopRepos();
	}, []);

	useEffect(() => {
		if (!loading && status) return setShowHideLoadingButton(true);

		/* 
			not sure if to keep this kind of loading, since if the user gets ratelimited by github,
			(60 reqs per hour, per user) they can't access the projects page anymore for 1 hour
			(the site does around 6 requests per refresh)

			- 1 request every 100 repos
			- 5 requests (1 for each of the 5 top repos to get their licenses)
		*/

		// if (page === "home" && !loading && status) return setShowHideLoadingButton(true);
		// if (page === "projects" && topRepos.length > 0) return setShowHideLoadingButton(true);

		// setHideLoading(true)
	}, [loading, status /*, page, topRepos*/]);

	function handleHideLoading() {
		setHideLoading(true);
	}

	return (
		<>
			<Loading
				showSkipButton={showHideLoadingButton}
				hideLoading={handleHideLoading}
				hide={hideLoading}
			/>

			<Select
				isSearchable={false}
				options={onekoOptions}
				defaultValue={onekoOptions.find(option => option.value === "maia")}
				components={{
					Option: SelectOption
				}}
				isMulti={false}
				onChange={(newValue) => {
					router.replace(`?neko=${newValue?.value}#${hash || "home"}`)
				}}
				classNames={{
					option: () => "test" // this is passed to the option component in "src/components/select/option.tsx" too
				}}
			/>

			{page === "home" && <Home loading={loading} status={status} />}

			{page === "projects" && <Projects topRepos={topRepos} />}

			{page === "about" && <About />}

			{page === "rabbit" && <Rabbit />}

			<Script src="/js/oneko.js" />
		</>
	);
}
