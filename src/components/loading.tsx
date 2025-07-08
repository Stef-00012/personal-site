import handleTyping from "@/functions/loading";
import { useEffect } from "react";

import TypeIt from "typeit-react";

interface Props {
	showSkipButton: boolean;
	hideLoading: () => void;
	hide: boolean;
}

export default function Loading({ showSkipButton, hideLoading, hide }: Props) {
	function handleKeyPress(event: KeyboardEvent) {
		if (event.key === "Shift") handleHideLoading();
	}

	function handleHideLoading() {
		document.removeEventListener("keydown", handleKeyPress);

		hideLoading();
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: functions shouldn't go in the dependencies
	useEffect(() => {
		if (showSkipButton) document.addEventListener("keydown", handleKeyPress);

		return () => {
			document.removeEventListener("keydown", handleKeyPress);
		};
	}, [showSkipButton]); //eslint-disable-line react-hooks/exhaustive-deps
	// passing handleKeyPress as a dependency would cause the effect to re-run on every update

	return (
		<>
			<div
				className={`${hide ? "hidden overflow-hidden" : "overflow-y-scroll"} flex bg-base-300 w-screen h-screen fixed break-all left-0 top-0 z-10`}
			>
				<TypeIt
					className="font-mono text-base-content text-base whitespace-pre-wrap mt-[5px] pl-[5px]"
					getBeforeInit={(instance) => {
						handleTyping(instance, handleHideLoading);

						return instance;
					}}
				/>

				{showSkipButton && (
					<button
						type="button"
						onClick={handleHideLoading}
						className="text-[large] absolute bottom-[10%] left-[50%] translate-x-[-50%] bg-transparent text-success border-none cursor-pointer font-mono"
					>
						Skip Loading
					</button>
				)}
			</div>

			<div
				className={`${hide ? "hidden" : ""} z-[-9998] bg-base-200 w-full h-full fixed overflow-scroll break-all backdrop-blur-[3px] m-0 p-0 left-0 top-0`}
			>
				&nbsp;
			</div>
		</>
	);
}
