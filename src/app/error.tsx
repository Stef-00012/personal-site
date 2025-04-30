"use client";

import { useEffect } from "react";

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
		<div>
			<h2>Something went wrong! (error.tsx)</h2>
			<h2>This occurs when an error is thrown in any page, that's the main error boundary (aka handles any error thrown by components in the page.tsx of any other file)</h2>
			<button type="button" className="btn btn-success" onClick={() => reset()}>
				Try again
			</button>
		</div>
	);
}
