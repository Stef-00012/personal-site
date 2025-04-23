import { ImageResponse } from "next/og";

export const size = {
	width: 64,
	height: 64,
};

export const contentType = "image/png";

export const dynamic = "force-dynamic";

export default function Icon() {
	return new ImageResponse(
		<img
			src={"https://api.lanyard.rest/694986201739952229.png"}
			alt="icon"
			style={{
				borderRadius: "50%",
			}}
		/>,
		{
			...size,
		},
	);
}
