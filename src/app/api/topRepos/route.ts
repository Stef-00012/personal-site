import { getRankedRepos } from "@/functions/githubRepos";
import { NextResponse } from "next/server";

import type { ScoredFormattedRepo } from "@/types/github";

export const dynamic = "force-dynamic";

let cachedData: Array<ScoredFormattedRepo> | null = null;
let lastFetched = 0;
const CACHE_DURATION = 3600 * 1000; // 1 hour in milliseconds

export async function GET() {
	const now = Date.now();

	if (cachedData && now - lastFetched < CACHE_DURATION) {
		return NextResponse.json(cachedData);
	}

	const topRepos = await getRankedRepos();

	cachedData = topRepos;
	lastFetched = now;

	return NextResponse.json(topRepos);
}
