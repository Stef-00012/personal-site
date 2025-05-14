"use client";

import { useEffect } from "react";

import "./globals.css";

export default function NextError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<html lang="en" data-theme="catppuccin-macchiato" className="bg-base-300">
			<body>
				<div
					className="min-h-screen flex items-center justify-center p-6"
				>
					<div className="max-w-xl text-center bg-base-100 p-8 rounded-2xl shadow-2xl">
						<h1 className="text-4xl font-bold text-error mb-4">
							Something went wrong!
						</h1>
						<p className="my-4 font-mono rounded-2xl text-error bg-base-200 p-2">
							{error.name}: {error.message}
						</p>{" "}
						<br />
						<button
							type="button"
							className="btn btn-success mt-4"
							onClick={() => reset()}
						>
							Try again
						</button>
					</div>
				</div>
			</body>
		</html>
	);
}
