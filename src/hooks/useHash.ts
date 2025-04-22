import { useEffect, useState } from "react";

export default function useHash() {
	const [hash, setHash] = useState<string | null>(null);

	useEffect(() => {
		setHash(window.location.hash.replace("#", ""));

		function handleHashChange() {
			setHash(window.location.hash.replace("#", ""));
		}

		window.addEventListener("hashchange", handleHashChange);

		return () => window.removeEventListener("hashchange", handleHashChange);
	}, []);

	return hash;
}
