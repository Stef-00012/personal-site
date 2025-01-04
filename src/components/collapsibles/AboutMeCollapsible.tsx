"use client";

import Collapsible from "@/components/Collapsible";
import TypeIt from "typeit-react";

import { useState } from "react";

import type TypeItInstance from "typeit";

interface Data {
	codeBlock: string;
}

export default function AboutMeCollapsible({ codeBlock }: Data) {
	const [aboutMeSpoilerOpen, setAboutMeSpoilerOpen] = useState<boolean>(false);
	const [aboutMeTypeItInstance, setAboutMeTypeItInstance] = useState<
		TypeItInstance | undefined
	>(undefined);

	return (
		<Collapsible
			title="About Me"
			onOpen={() => aboutMeTypeItInstance?.unfreeze()}
			onClose={() => aboutMeTypeItInstance?.freeze()}
		>
			<div className="flex flex-wrap">
				<pre className="w-full">
					<code className="rounded-[10px] max-h-[350px] overflow-scroll pb-0 mb-0 hljs text-sm">
						<TypeIt
							getBeforeInit={(instance) => {
								instance
									.options({
										speed: 3.5,
										afterComplete: () => instance.destroy(),
									})
									.type(codeBlock)
									.freeze();

								return instance;
							}}
							getAfterInit={(instance) => {
								setAboutMeTypeItInstance(instance);

								return instance;
							}}
						/>
					</code>
				</pre>

				<p
					tabIndex={0}
					onClick={() => {
						setAboutMeSpoilerOpen(true);
					}}
					onKeyDown={(event) => {
						if (event.key === "Enter") setAboutMeSpoilerOpen(true);
					}}
					className={`${aboutMeSpoilerOpen ? "text-white cursor-default" : "text-transparent cursor-pointer"} italic bg-[#362f2e] rounded-[5px] mt-[7px]`}
				>
					(My old Reddit account got banned)
				</p>
			</div>
		</Collapsible>
	);
}
