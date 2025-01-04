"use client";

import Image from "next/image";

import { useEffect, useState } from "react";
import { musics } from "@/data/music";
import {
	handlePrevious,
	handlePlayPause,
	handleNext,
	selectRandomSong,
} from "@/scripts/Music";

import type { Music } from "@/types/music";

export default function MusicPlayer() {
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [currentSong, setCurrentSong] = useState<Music>(musics[0]);
	const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);

	useEffect(() => {
		const randomSongIndex = selectRandomSong();

		setCurrentSongIndex(randomSongIndex);
	}, []);

	useEffect(() => {
		setCurrentSong(musics[currentSongIndex]);
	}, [currentSongIndex]);

	return (
		<div className="flex flex-col items-center justify-center mt-4">
			<div className="bg-transparent p-[10px] rounded-[5px] mx-auto my-0">
				<button
					type="button"
					className="bg-none border-none p-0 cursor-pointer outline-none w-[40] h-[40] opacity-[0.7] transition-[transform,opacity] ease-[ease] duration-[0.3s] hover:scale-[, opacity 0.3s ease;1.1] hover:opacity-[0.5] focus:outline-none"
					onClick={() => {
						handlePrevious(currentSongIndex, setCurrentSongIndex, setIsPlaying);
					}}
				>
					<Image
						src="/images/music/back.svg"
						alt="Previous Song"
						width={40}
						height={40}
						className="pointer-events-none invert-[70%]"
					/>
				</button>

				<button
					type="button"
					className="bg-none border-none p-0 cursor-pointer outline-none w-[40] h-[40] opacity-[0.7] transition-[transform,opacity] ease-[ease] duration-[0.3s] hover:scale-[, opacity 0.3s ease;1.1] hover:opacity-[0.5]"
					onClick={() => {
						handlePlayPause(currentSongIndex, setIsPlaying);
					}}
				>
					<Image
						src={`/images/music/${isPlaying ? "pause" : "play"}.svg`}
						alt={isPlaying ? "Pause" : "Play"}
						width={40}
						height={40}
						className="pointer-events-none invert-[70%]"
					/>
				</button>

				<button
					type="button"
					className="bg-none border-none p-0 cursor-pointer outline-none w-[40] h-[40] opacity-[0.7] transition-[transform,opacity] ease-[ease] duration-[0.3s] hover:scale-[, opacity 0.3s ease;1.1] hover:opacity-[0.5]"
					onClick={() => {
						handleNext(currentSongIndex, setCurrentSongIndex, setIsPlaying);
					}}
				>
					<Image
						src="/images/music/next.svg"
						alt="Next Song"
						width={40}
						height={40}
						className="pointer-events-none invert-[70%]"
					/>
				</button>
			</div>

			<p className="italic mt-[5px] text-base text-white [font-family:'Encode_Sans_Expanded',sans-serif]">
				Now Playing | {currentSong.name} - {currentSong.artist}
			</p>

			<audio
				id="audio"
				autoPlay
				onEnded={() => {
					handleNext(currentSongIndex, setCurrentSongIndex, setIsPlaying);
				}}
			/>
		</div>
	);
}
