"use client";

import Collapsible from "@/components/Collapsible";
import { useEffect, useState } from "react";
import type { ScoredFormattedRepo } from "@/types/github";
import { getRankedRepos } from "@/scripts/githubRepos";
import GitHubRepoDisplay from "@/components/GitHubRepoDisplay";

export default function TopReposCollapsible() {
    const [rankedRepos, setRankedRepos] = useState<Array<ScoredFormattedRepo>>(
		[],
	);

    useEffect(() => {
        (async () => {
			const repos = await getRankedRepos();

			setRankedRepos(repos);
		})();
    })

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
    )
}