"use client";

import GitHubRepoDisplay from "@/components/GitHubRepoDisplay";
import Collapsible from "@/components/Collapsible";

import { useEffect, useState } from "react";
import { getRankedRepos } from "@/scripts/githubRepos";

import type { ScoredFormattedRepo } from "@/types/github";

export default function TopReposCollapsible() {
	const [rankedRepos, setRankedRepos] = useState<Array<ScoredFormattedRepo>>(
		[],
	);

	useEffect(() => {
		(async () => {
			const repos = await getRankedRepos();

			setRankedRepos(repos);
		})();
	}, []);

	return (
		<Collapsible title="Top GitHub Repos">
			{rankedRepos.length <= 0 ? (
				<p>Loading...</p>
			) : (
				rankedRepos.map((repo) => (
					<GitHubRepoDisplay key={repo.id} repo={repo} />
				))
			)}
		</Collapsible>
	);
}
