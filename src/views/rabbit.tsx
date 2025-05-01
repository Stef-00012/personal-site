import { rabbitImagesCount } from "@/data/constants";
import useProgressiveImage from "@/hooks/useProgressiveImage";

export default function Rabbit() {
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
					{[...new Array(rabbitImagesCount).keys()].map((i) => {
						// low quality = 20% aspect ratio + 20% quality
						const { src, blur } = useProgressiveImage(`/images/rabbit/pallino-${i + 1}-low.webp`, `/images/rabbit/pallino-${i + 1}.webp`);

						return (
							<img
								key={i}
								// biome-ignore lint/a11y/noRedundantAlt: <explanation>
								alt={`Pallino picture number ${i + 1}`}
								src={src}
								className={`mb-4 w-full break-inside-avoid rounded-2xl shadow-lg ${blur ? "blur-md" : ""}`}
							/>
						)
					})}
				</div>
			</div>
		</div>
	);
}
