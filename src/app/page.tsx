"use client";

import PallinoCarousel from "../components/pallino";
import ProjectsList from "../components/projects";
import GitHubStats from "../components/github";

import { set, useLanyard } from "react-use-lanyard";
import { useEffect, useState } from "react";

import type TypeItInstance from "typeit";
import Loading from "@/components/loading";
import Image from "next/image";
import { socials } from "@/data/socials";

export default function Home() {
	const { loading, status } = useLanyard({
		userId: "694986201739952229",
		socket: true,
	});

	const [hideLoading, setHideLoading] = useState<boolean>(false);
	const [showHideLoadingButton, setShowHideLoadingButton] =
		useState<boolean>(false);

	const [customStatus, setCustomStatus] = useState<string | null>("");
	const [avatar, setAvatar] = useState<string | null>(null);
	const [avatarDecoration, setAvatarDecoration] = useState<string | null>(null);
	const [discordStatus, setDiscordStatus] = useState<
		"online" | "idle" | "dnd" | "offline"
	>("offline");

	const statuses = {
		online: "status-success",
		idle: "status-warning",
		dnd: "status-error",
		offline: "status-base-content/70",
	};

	useEffect(() => {
		if (loading) return;

		const discordActivites = status?.activities;
		const discordUser = status?.discord_user;
		const discordStatus = status?.discord_status || "offline";

		const customStatusData = discordActivites?.find(
			(activity) => activity.id === "custom",
		);

		const avatar = `https://cdn.discordapp.com/avatars/${discordUser?.id}/${discordUser?.avatar}.${discordUser?.avatar.startsWith("a_") ? "gif" : "png"}`;
		const avatarDecoration = discordUser?.avatar_decoration_data
			? `https://cdn.discordapp.com/avatar-decoration-presets/${discordUser.avatar_decoration_data.asset}.png`
			: null;

		setCustomStatus(customStatusData?.state || null);
		setAvatarDecoration(avatarDecoration);
		setDiscordStatus(discordStatus);
		setAvatar(avatar);
	}, [status, loading]);

	useEffect(() => {
		if (!loading && status) setShowHideLoadingButton(true);
	}, [loading, status]);

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

			<div className="min-h-screen flex flex-col justify-center items-center p-4">
				<div className="bgeffect" />
				<div className="flex flex-col items-center">
					<div className="relative">
						{avatar && (
							<Image
								priority
								src={avatar}
								alt="my profile picture"
								className="rounded-full mb-4 object-cover"
								width={96}
								height={96}
							/>
						)}
						{avatarDecoration && (
							<Image
								priority
								unoptimized
								src={avatarDecoration}
								alt="my profile picture decoration"
								className="absolute inset-0 scale-120 object-cover"
								width={96}
								height={96}
							/>
						)}
					</div>
					<div className="flex items-center">
						<h1 className="text-5xl text-primary mb-4 me-2">Stef</h1>
						<span className={`${statuses[discordStatus]} status size-4 mb-3`} />
					</div>

					<div className="flex flex-wrap my-4 gap-2 justify-center">
						{socials.map((social) => (
							<a
								href={
									social.type === "mail" ? social.url : `/socials/${social.id}`
								}
								key={social.id}
								target="_blank"
								rel="noopener noreferrer"
							>
								<span className={`${social.icon} size-8 transition-transform duration-300 ease-in-out hover:scale-125 ${social.color}`} />
							</a>
						))}
					</div>

					<div className="mt-10 font-mono">
						{/* insert discord status and activity */}
						{customStatus}
					</div>
				</div>
			</div>
		</>
	);
}
