import { baseUrl } from "@/data/constants";

import type { Metadata, Viewport } from "next";

import { Suspense } from "react";
import { GoogleTagManager } from "@next/third-parties/google";

import "./globals.css";

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
		url: baseUrl,
		description: "Most if not all of my socials are listed here :)",
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

export const dynamic = "force-static";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-theme="catppuccin-macchiato" className="bg-base-300">
			<head>
				<link
					rel="stylesheet"
					href="https://unpkg.com/highlightjs@9.16.2/styles/atom-one-dark.css"
				/>

				<link rel="preconnect" href="https://api.github.com" />

				<script
					defer
					src="https://umami.stefdp.com/data.js"
					data-website-id="b6b98e07-7281-4a22-b639-926024968a05"
				/>

				<GoogleTagManager gtmId="G-002L9WP8JT" />
			</head>
			<body className="antialiased">
				<Suspense>
					{children}
				</Suspense>
			</body>
		</html>
	);
}
