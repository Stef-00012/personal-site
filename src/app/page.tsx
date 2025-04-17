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
		offline: " status-base-content/70",
	};

	return (
		<div className="min-h-screen flex flex-col justify-center items-center p-4">
			<div className="bgeffect" />
			<div className="flex flex-col items-center">
				{/* for the avatar decoration it'll be `https://cdn.discordapp.com/avatar-decoration-presets/${status?.discord_user.avatar_decoration_data?.asset}.png` */}
				<img
					src={`https://cdn.discordapp.com/avatars/${status?.discord_user.id}/${status?.discord_user.avatar}.${status?.discord_user.avatar.startsWith("a_") ? "gif" : "png"}`}
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
