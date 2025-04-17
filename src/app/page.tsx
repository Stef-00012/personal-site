"use client";

import PallinoCarousel from "../components/pallino";
import ProjectsList from "../components/projects";
import SocialsList from "../components/socials";
import GitHubStats from "../components/github";

import { useLanyard } from "react-use-lanyard";

export default function Home() {
	const { loading, status } = useLanyard({
		userId: "694986201739952229",
		socket: true,
	});

	const statuses = {
		online: "status-success",
		idle: "status-warning",
		dnd: "status-error",
		offline: "status-error",
	};

	console.log(loading, status);

	return (
		<div className="min-h-screen flex flex-col justify-center items-center p-4">
			<div className="bgeffect" />
			<div className="flex flex-col items-center">
				<img
					src="https://unavatar.io/stef-00012"
					// biome-ignore lint/a11y/noRedundantAlt: <explanation>
					alt="my profile picture"
					className="rounded-full size-24 mb-4"
				/>
				<div className="flex items-center">
					<h1 className="text-5xl text-primary mb-4 me-2">Stef</h1>
					<span
						className={`${statuses[status?.discord_status || "online"]} status size-4 mb-3`}
					/>
				</div>

				<SocialsList />

				<div className="mt-10 font-mono">
					{/* insert discord status and activity */}
					{status?.activities[0]?.state}
				</div>
			</div>
		</div>
	);
}
