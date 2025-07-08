/** biome-ignore-all lint/performance/noImgElement: img is required for this to work */
import { toplanguagesExcludedRepos } from "@/data/constants";
import { getCodeBlock } from "@/functions/aboutMeCodeblock";
import type TypeItInstance from "typeit";
import { useState } from "react";

import TypeIt from "typeit-react";

export default function About() {
	const codeBlockData = getCodeBlock()
		.split("\n")
		.map((line, index) => `<pre data-prefix="${index + 1}">${line}</pre>`)
		.join("\n");

	const [typeItInstance, setTypeItInstance] = useState<TypeItInstance | null>(
		null,
	);
	const [skippedAnimation, setSkippedAnimation] = useState(false);

	return (
		<div className="flex justify-center items-center min-h-screen px-4">
			<div className="bg-base-100 shadow-xl rounded-box p-6 max-w-6xl w-full mt-17 mb-6 sm:mt-0 md:mt-10 lg:mt-17 2xl:my-auto">
				<h1 className="my-4 font-bold sm:mx-4 flex justify-between text-2xl items-center mb-10">
					<span>About</span>

					<div>
						<button
							type="button"
							className="btn btn-soft btn-accent mr-3"
							onClick={() => {
								if (
									typeItInstance &&
									["destroyed", "completed", "frozen"].every(
										(state) => !typeItInstance.is(state),
									)
								) {
									typeItInstance.options({
										cursor: false
									}).freeze();
									setSkippedAnimation(true);
								}
							}}
						>
							Skip Animation
						</button>

						<a href="#home" className="btn btn-soft btn-accent">
							<span className="icon-[tabler--arrow-back] size-5" /> Back
						</a>
					</div>
				</h1>
				<div className="text-base-content mockup-code bg-base-200 p-4 max-h-[250px] 2xl:max-h-[300px] overflow-auto rounded-md">
					{skippedAnimation ? (
						// biome-ignore lint/security/noDangerouslySetInnerHtml: required as codeBlockData contains HTML elements rendered by highlightjs
						<span dangerouslySetInnerHTML={{ __html: codeBlockData }} />
					) : (
						<TypeIt
							getBeforeInit={(instance) => {
								setTypeItInstance(instance);

								instance
									.options({
										speed: 1,
										afterComplete: () => {
											instance.options({
												cursor: false
											}).freeze();
											setSkippedAnimation(true);
										},
									})
									.type(codeBlockData)
									.go();

								return instance;
							}}
						/>
					)}
				</div>

				<h2 className="my-6 ml-2 text-2xl">My GitHub Stats:</h2>

				<div className="flex flex-wrap my-4 justify-center">
					<img
						src="https://github-readme-streak-stats-one-blue.vercel.app/?user=Stef-00012&theme=catppuccin-mocha&card_height=275"
						className="w-full sm:w-1/3 p-1"
						alt="GitHub Streaks"
					/>
					<img
						src={`https://github-readme-stats-silk-eight.vercel.app/api/top-langs/?username=Stef-00012&theme=catppuccin_mocha&layout=compact&langs_count=6&exclude_repo=${toplanguagesExcludedRepos.join(",")}`}
						className="w-full sm:w-1/3 p-1"
						alt="GitHub Top languages"
					/>
					<img
						src="https://github-readme-stats-silk-eight.vercel.app/api?username=Stef-00012&show_icons=true&theme=catppuccin_mocha&line_height=36"
						className="w-full sm:w-1/3 p-1"
						alt="General GitHub Stats"
					/>
				</div>
			</div>
		</div>
	);
}
