import type { Metadata, Viewport } from "next";
import { baseUrl } from "@/data/constants";
import "./globals.css";
import { Suspense } from "react";

export const metadata: Metadata = {
	metadataBase: new URL(baseUrl),
	authors: [
		{
			name: "Stefano Del Prete",
			url: "https://stefdp.com",
		},
		{
			name: "orangc",
			url: "https://orangc.net",
		},
	],
	title: "My own bio :) - Stefano Del Prete | Home Page",
	description: "Most if not all of my socials are listed here :)",
	openGraph: {
		title: "My own bio :) - Stefano Del Prete | Home Page",
		type: "website",
		url: "https://stefdp.com",
		description: "Most if not all of my socials are listed here :)",
		// images: "/images/pfp.webp",
	},
	verification: {
		me: "https://mastodon.social/@Stef_DP",
	},
	keywords: ["Stef", "Stef_DP", "Stefano Del Prete", "Del Prete", "Stefano"],
	twitter: {
		title: "My own bio :) - Stefano Del Prete | Home Page",
		description: "Most if not all of my socials are listed here :)",
	},
	icons: null,
};

export const viewport: Viewport = {
	colorScheme: "dark",
	themeColor: "#629D6D",
	width: "device-width",
	initialScale: 1,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-theme="catppuccin-macchiato" className="bg-base-300">
			<body className="antialiased">
				<Suspense>{children}</Suspense>
			</body>
		</html>
	);
}
