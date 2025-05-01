import { rabbitImagesCount } from "@/data/constants";
import useProgressiveImages from "@/hooks/useProgressiveImage";
import { useMemo } from "react";

export default function Rabbit() {
	const imageData = useMemo(() => {
		return [...Array(rabbitImagesCount)].map((_, i) => {
			const index = i + 1;
			return {
				lowQualitySrc: `/images/rabbit/pallino-${index}-low.webp`,
				highQualitySrc: `/images/rabbit/pallino-${index}.webp`,
			};
		});
	}, []);

	const progressiveImages = useProgressiveImages(imageData);

	return (
		<div className="p-10">
			<h1 className="my-4 mt-10 font-bold sm:mx-4 flex justify-between text-4xl items-center mb-10">
				<span>My Rabbit, Pallino</span>
				<a href="#home" className="btn btn-soft btn-accent">
					<span className="icon-[tabler--arrow-back] size-5" /> Back
				</a>
			</h1>
			<div className="sm:mx-4 flex justify-center items-center ">
				<div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
					{progressiveImages.map(({ src, blur }, i) => (
						<img
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={i}
							// biome-ignore lint/a11y/noRedundantAlt: <explanation>
							alt={`Pallino picture number ${i + 1}`}
							src={src}
							className={`mb-4 w-full break-inside-avoid rounded-2xl shadow-lg transition-[filter] ease-out duration-300 ${blur ? "blur-md" : ""}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
