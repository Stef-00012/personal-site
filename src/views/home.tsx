"use client";

import type { LanyardData } from "react-use-lanyard";
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { socials } from "@/data/socials";
import { discordActivityTypes } from "@/data/constants";

const spotifyDefaultMessage = "Not listening to anything";
const vscodeDefaultMessage = "Not coding anything";
const playingDefaultMessage = "Not playing anything";

const formatter = new Intl.ListFormat();

interface Props {
	loading: boolean;
	status: LanyardData | undefined;
}

export default function Home({ loading, status }: Props) {
	const [customStatus, setCustomStatus] = useState<string | null>("");

	const [avatar, setAvatar] = useState<string | null>(null);
	const [avatarDecoration, setAvatarDecoration] = useState<string | null>(null);

	const [discordStatus, setDiscordStatus] = useState<
		"online" | "idle" | "dnd" | "offline"
	>("offline");

	const [spotifyStatus, setSpotifyStatus] = useState<string>(
		spotifyDefaultMessage,
	);
	const [spotifyTrackId, setSpotifyTrackId] = useState<string | null>(null);

	const [vscodeStatus, setVscodeStatus] =
		useState<string>(vscodeDefaultMessage);

	const [playingStatus, setPlayingStatus] = useState<string>(
		playingDefaultMessage,
	);

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
		const spotifyData = status?.spotify;

		setDiscordStatus(discordStatus);

		const avatar = `https://cdn.discordapp.com/avatars/${discordUser?.id}/${discordUser?.avatar}.${discordUser?.avatar.startsWith("a_") ? "gif" : "png"}`;
		const avatarDecoration = discordUser?.avatar_decoration_data
			? `https://cdn.discordapp.com/avatar-decoration-presets/${discordUser.avatar_decoration_data.asset}.png`
			: null;

		setAvatarDecoration(avatarDecoration);
		setAvatar(avatar);

		const artist = spotifyData?.artist;
		const album = spotifyData?.album;
		const song = spotifyData?.song;
		const trackId = spotifyData?.track_id;

		const spotifyMessage =
			artist && album && song
				? `Listening to ${song} by ${formatter.format(artist.split(";"))}`
				: spotifyDefaultMessage;

		setSpotifyStatus(spotifyMessage);
		setSpotifyTrackId(trackId || null);

		const customStatusData = discordActivites?.find(
			(activity) => activity.id === "custom",
		);

		setCustomStatus(customStatusData?.state || null);

		const vscodeData = discordActivites?.find(
			(activity) => activity.name === "Visual Studio Code",
		);

		const vscodeMessage =
			vscodeData?.details && vscodeData.state
				? `${vscodeData.details} in ${vscodeData.state
						.replace(/(Workspace: | \(Workspace\))/g, "")
						.replace("Glitch:", "🎏")
						.trim()}`
				: vscodeDefaultMessage;

		setVscodeStatus(vscodeMessage);

		const playingData =
			discordActivites?.filter(
				(activity) =>
					activity.type === discordActivityTypes.playing &&
					!["Visual Studio Code", "IntelliJ IDEA Ultimate"].includes(
						activity.name,
					),
			) ?? [];

		const playingMessage =
			playingData.length > 0
				? `Playing ${formatter.format(playingData.map((activity) => activity.name))}`
				: playingDefaultMessage;

		setPlayingStatus(playingMessage);
	}, [status, loading]);

	return (
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
						<Link
							href={
								social.type === "mail" ? social.url : `/socials/${social.id}`
							}
							key={social.id}
							target="_blank"
							rel="noopener noreferrer"
						>
							<span
								className={`${social.icon} size-8 transition-transform duration-300 ease-in-out hover:scale-125 ${social.color}`}
							/>
						</Link>
					))}
				</div>

				<div className="flex gap-2 font-mono text-accent mb-6">
					<Link
						className="btn btn-soft btn-accent"
						href="#about"
						onClick={(event) => {
							window.location.hash = event.currentTarget.hash;
						}}
					>
						&#47;about
					</Link>
					<Link
						className="btn btn-soft btn-accent"
						href="#projects"
						onClick={(event) => {
							window.location.hash = event.currentTarget.hash;
						}}
					>
						&#47;projects
					</Link>
					<Link
						className="btn btn-soft btn-accent"
						href="#rabbit"
						onClick={(event) => {
							window.location.hash = event.currentTarget.hash;
						}}
					>
						&#47;rabbit
					</Link>
				</div>

				<div className="mt-10 flex flex-col gap-2">
					{/* 
                        Variables:
                        discord status: customStatus
                        vscode: vscodeStatus
                        spotify: spotifyStatus
                        playing: playingStatus

                        Spotify Track URL: `https://open.spotify.com/track/${spotifyTrackId}`
                    */}
					{customStatus && (
						<p className="flex items-center gap-2">
							<span className="icon-[tabler--bubble-text-filled] size-5" />{" "}
							{customStatus}
						</p>
					)}

					{spotifyTrackId ? (
						<Link
							href={`https://open.spotify.com/track/${spotifyTrackId}`}
							className="flex items-center gap-2 link link-accent link-animated"
						>
							<span className="icon-[fa6-brands--spotify] size-5 -mb-1" />{" "}
							{spotifyStatus}
						</Link>
					) : (
						<p className="flex items-center gap-2">
							<span className="icon-[fa6-brands--spotify] size-5 -mb-1" />{" "}
							{spotifyStatus}
						</p>
					)}

					<p className="flex items-center gap-2">
						<span className="icon-[tabler--brand-vscode] size-5 -mb-1" />{" "}
						{vscodeStatus}
					</p>

					<p className="flex items-center gap-2">
						<span className="icon-[game-icons--gamepad] size-5 -mb-1" />{" "}
						{playingStatus}
					</p>
				</div>
			</div>
		</div>
	);
}
