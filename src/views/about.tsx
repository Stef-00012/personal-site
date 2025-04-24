import { getCodeBlock } from "@/functions/aboutMeCodeblock";
import TypeIt from "typeit-react";

export default function About() {
	const codeBlockData = getCodeBlock()
		.split("\n")
		.map((line, index) => `<pre data-prefix="${index + 1}">${line}</pre>`)
		.join("\n");

    console.log(codeBlockData)

	return (
		<div className="flex justify-center items-center min-h-screen px-4">
			<div className="bg-base-100 shadow-xl rounded-box p-6 max-w-2xl w-full">
				<h1 className="my-4 font-bold sm:mx-4 flex justify-between text-2xl items-center mb-10">
					<span>About</span>
					<a href="#home" className="btn btn-soft btn-accent">
						<span className="icon-[tabler--arrow-back] size-5" /> Back
					</a>
				</h1>
				<div className="text-base-content mockup-code bg-base-200 p-4">
					<TypeIt
						getBeforeInit={(instance) => {
							instance
								.options({
									speed: 3.5,
									afterComplete: () => instance.destroy(),
								})
								.type(codeBlockData)
								.go()

							return instance;
						}}
					/>
				</div>
			</div>
		</div>
	);
}
