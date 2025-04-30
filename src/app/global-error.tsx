"use client";

import { useEffect } from "react";

import "./globals.css";

export default function GlobalError({
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
				<h2>Something went wrong! (global-error.tsx)</h2>
				<h2>This occurs when an error is thrown in the root layout and so can't be handled by any error boundary (aka any error thrown by components directly in layout.tsx)</h2>
				<button
					className="btn btn-success"
					type="button"
					onClick={() => reset()}
				>
					Try again
				</button>
			</body>
		</html>
	);
}
