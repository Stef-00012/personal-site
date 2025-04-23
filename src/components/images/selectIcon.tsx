interface Data {
	isOpen: boolean;
	color: string;
	alt: string;
}

export default function SelectIcon({ isOpen, color, alt }: Data) {
	return (
		<svg
			viewBox="0 0 24 24"
			width="18"
			height="18"
			stroke={color}
			strokeWidth="1.5"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			className={
				isOpen
					? "[-webkit-transform:rotate(180deg)] [-ms-transform:rotate(180deg)] rotate-180"
					: ""
			}
		>
			<title>{alt}</title>
			<polyline points="6 9 12 15 18 9" />
		</svg>
	);
}
