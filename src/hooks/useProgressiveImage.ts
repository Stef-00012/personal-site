import { useState, useEffect } from "react";

export default function useProgressiveImages(
	imagePairs: Array<{ lowQualitySrc: string; highQualitySrc: string }>,
) {
	const [images, setImages] = useState(
		imagePairs.map(({ lowQualitySrc }) => ({ src: lowQualitySrc, blur: true })),
	);

	useEffect(() => {
		imagePairs.forEach((pair, index) => {
			const highResImage = new Image();
			highResImage.src = pair.highQualitySrc;
			highResImage.onload = () => {
				setImages((prevImages) => {
					const newImages = [...prevImages];
					newImages[index] = { src: pair.highQualitySrc, blur: false };
					return newImages;
				});
			};
		});
	}, [imagePairs]);

	return images;
}
