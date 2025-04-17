import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Stefano del Prete",
	description: "Stef's personal homepage.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-theme="catppuccin-macchiato" className="bg-base-300">
			<body className="antialiased">{children}</body>
		</html>
	);
}
