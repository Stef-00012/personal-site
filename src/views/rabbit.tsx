import { rabbitImagesCount } from "@/data/constants";
import useProgressiveImages from "@/hooks/useProgressiveImage";

const imageData = [...Array(rabbitImagesCount)].map((_, i) => {
	const index = i + 1;
	return {
		lowQualitySrc: `/images/rabbit/pallino-${index}-low.webp`,
		highQualitySrc: `/images/rabbit/pallino-${index}.webp`,
	};
})

export default function Rabbit() {
	const progressiveImages = useProgressiveImages(imageData);

	return (
		<div className="p-10 max-w-7xl mx-auto">
			<h1 className="my-4 mt-10 font-bold sm:mx-4 flex justify-between text-4xl items-center mb-10">
				<span>My Rabbit, Pallino</span>
				<a href="#home" className="btn btn-soft btn-accent">
					<span className="icon-[tabler--arrow-back] size-5" /> Back
				</a>
			</h1>
			<div className="sm:mx-4 flex justify-center items-center ">
				<div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
					{progressiveImages.map(({ src, blur }, i) => (
						<div key={i} className="mb-4 w-full break-inside-avoid rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
							{/* biome-ignore lint/a11y/noRedundantAlt: <explanation> */}
							<img
								alt={`Pallino picture number ${i + 1}`}
								src={src}
								className={`h-full w-full object-cover transition-[filter] ease-out duration-300 ${blur ? "blur-md" : ""}`}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
