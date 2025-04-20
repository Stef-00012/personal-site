import type { Project } from "@/types/projects";

export const projects: Array<Project> = [
	{
		name: "Receiptify",
		url: "https://receiptify.stefdp.com",
		description:
			"Receiptify is a website that allows you to convert your top tracks (on last.fm or Spotify). It fetches your top tracks and renders them in a way to look like a receipt.",
		source: "https://github.com/stef-00012/receiptify",
		slug: "receiptify",
	},
	{
		name: "Zipline Webstore Extension",
		url: "https://chromewebstore.google.com/detail/zipline-upload/nckdinonilcnlmjipgggnejkpdldjmjn",
		description:
			"Zipline Uploads allow you to upload your right clicked files or shorten your right clicked URLs to your selfhosted instance of Zipline without having to download the file to your PC and upload it manually.",
		source: "https://github.com/Stef-00012/Zipline-Upload-Extension",
		slug: "zipline-webstore-extension",
	},
	{
		name: "Zipline Android App",
		url: "https://github.com/stef-00012/zipline-android-app/releases/latest",
		description:
			"An Android app to manage your self-hosted zipline V4 instance.",
		source: "https://github.com/Stef-00012/Zipline-Android-App",
		slug: "zipline-android-app",
	},
	{
		name: "My Discord Bot - UserApps",
		url: "https://discord.com/oauth2/authorize?client_id=1223221223685886032",
		description:
			"userApps is a multi-purpose Discord bot iinstalled on your user account so that it can be used everywhere.",
		source: "https://github.com/Stef-00012/userApps",
		slug: "userapps",
	},
	{
		name: "Homepage Dashboard",
		url: "https://dash.stefdp.com",
		description: "A dashboard with most of my self-hosted services.",
		slug: "homepage-dashboard",
	},
	{
		name: "My API",
		url: "https://docs.stefdp.com",
		description:
			"An API is used to communicate with my apps or to get data about them (Not really mainatined anymore).",
		slug: "api",
	},
	{
		name: "My Discord Bot - GattinhosBot",
		url: "https://gattinhosbot.is-a.dev",
		description: "A multi-purpose Discord bot (Not really maintained anymore).",
		slug: "gattinhosbot",
	},
];
