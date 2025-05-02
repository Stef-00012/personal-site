"use client";

import { useLanyard } from "react-use-lanyard";
import { useEffect, useState } from "react";
import useHash from "@/hooks/useHash";
import axios from "axios";

import { useSearchParams, useRouter } from "next/navigation";
import { onekoVariants } from "@/data/constants";

import Projects from "@/views/projects";
import Rabbit from "@/views/rabbit";
import About from "@/views/about";
import Home from "@/views/home";

import Select, { type SelectOption } from "@/components/select";
import Loading from "@/components/loading";
import Script from "next/script";

import type { ScoredFormattedRepo } from "@/types/github";
import type { Project } from "@/types/projects";

type Page = "rabbit" | "home" | "projects" | "about";

const pages: Page[] = ["rabbit", "home", "projects", "about"];

export default function Main() {
	const router = useRouter();
	const searchParams = useSearchParams();

	let currentVariant = searchParams.get("neko") || "maia";

	if (!onekoVariants.includes(currentVariant)) currentVariant = "maia";

	const onekoOptions: SelectOption[] = onekoVariants.map((variant) => ({
		value: variant,
		label: variant.charAt(0).toUpperCase() + variant.slice(1),
		icon: `/images/oneko/heads/${variant}.png`,
		default: variant === (currentVariant || "maia"),
		lazy: true,
	}));

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
			const res = await axios.get("/api/topRepos");
			const data = res.data as Array<ScoredFormattedRepo>;

			const projectRepos: Project[] = data.map((repo) => ({
				name: repo.fullName,
				source: `https://github.com/${repo.fullName}`,
				description: repo.description,
				url: repo.homepage,
				git: repo,
				slug: "repo",
				license: repo.license,
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

	// ----- TEMPORARY TO TEST error.tsx FILE -----

	const [error, setError] = useState(false);

	if (error) throw Error("Simulated Common Error");

	// ----- TEMPORARY TO TEST error.tsx FILE -----

	return (
		<>
			{/* ------------------------------------------ TEMPORARY TO TEST error.tsx FILE ------------------------------------------ */}
			<button className="btn btn-error text-black" type="button" onClick={() => setError(true)}>Throw a Common Error (error.tsx)</button>
			{/* ------------------------------------------ TEMPORARY TO TEST error.tsx FILE ------------------------------------------ */}

			{page === "home" && <div className="bgeffect" />}

			<Select
				options={onekoOptions}
				query="neko"
				className="inline-block absolute"
				placeholder="Cat Variant"
				onChange={(selectedOption) => {
					router.replace(`?neko=${selectedOption.value}#${hash || "home"}`);
				}}
			/>

			<Loading
				showSkipButton={showHideLoadingButton}
				hideLoading={handleHideLoading}
				hide={hideLoading}
			/>

			{page === "home" && <Home loading={loading} status={status} />}

			{page === "projects" && <Projects topRepos={topRepos} />}

			{page === "about" && <About />}

			{page === "rabbit" && <Rabbit />}

			<Script src="/js/oneko.js" />
		</>
	);
}
