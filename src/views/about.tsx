import { toplanguagesExcludedRepos } from "@/data/constants";
import { getCodeBlock } from "@/functions/aboutMeCodeblock";
import TypeIt from "typeit-react";

export default function About() {
	const codeBlockData = getCodeBlock()
		.split("\n")
		.map((line, index) => `<pre data-prefix="${index + 1}">${line}</pre>`)
		.join("\n");

	console.log(codeBlockData);

	return (
		<div className="flex justify-center items-center min-h-screen px-4">
			<div className="bg-base-100 shadow-xl rounded-box p-6 max-w-6xl w-full">
				<h1 className="my-4 font-bold sm:mx-4 flex justify-between text-2xl items-center mb-10">
					<span>About</span>
					<a href="#home" className="btn btn-soft btn-accent">
						<span className="icon-[tabler--arrow-back] size-5" /> Back
					</a>
				</h1>
				<div className="text-base-content mockup-code bg-base-200 p-4 max-h-[300px] overflow-auto rounded-md">
					<TypeIt
						getBeforeInit={(instance) => {
							instance
								.options({
									speed: 1,
									afterComplete: () => instance.destroy(),
								})
								.type(codeBlockData)
								.go();

							return instance;
						}}
					/>
				</div>

				<div className="flex flex-wrap my-4 justify-center">
					<img
						src="https://github-readme-streak-stats-one-blue.vercel.app/?user=Stef-00012&theme=catppuccin-mocha&card_height=225"
						className="max-w-1/3 p-1"
						alt="GitHub Streaks"
					/>
					<img
						src={`https://github-readme-stats-silk-eight.vercel.app/api/top-langs/?username=Stef-00012&theme=catppuccin_mocha&layout=compact&langs_count=6&exclude_repo=${toplanguagesExcludedRepos.join(",")}`}
						className="max-w-1/3 p-1"
						alt="GitHub Top languages"
					/>
					<img
						src="https://github-readme-stats-silk-eight.vercel.app/api?username=Stef-00012&show_icons=true&theme=catppuccin_mocha&line_height=29"
						className="max-w-1/3 p-1"
						alt="General GitHub Stats"
					/>
				</div>
			</div>
		</div>
	);
}
