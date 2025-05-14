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
		<div className="min-h-screen flex items-center justify-center bg-base-300 p-6">
			<div className="max-w-xl text-center bg-base-100 p-8 rounded-2xl shadow-2xl">
				<h1 className="text-4xl font-bold text-error mb-4">Something went wrong!</h1>
				<p className="mb-2 text-lg text-base-content/80">
				This occurs when an error is thrown in the root layout and so can&apos;t be handled by any error boundary (any error thrown by components directly in layout.tsx).
				</p> <br /> <br />
				<p className="my-4 font-mono rounded-2xl text-error bg-base-200 p-2">
					{error.name}: {error.message}
				</p> <br />
				<button className="btn btn-success mt-4" onClick={() => reset()}>
					Try again
				</button>
			</div>
		</div>
	);
}