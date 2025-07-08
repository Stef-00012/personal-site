import type { OnekoVariant } from "@/types/oneko";
import Link from "next/link";

export const onekoVariants: OnekoVariant[] = [
	{
		name: "classic",
	},
	{
		name: "dog",
	},
	{
		name: "maia",
		credits: (
			<Link
				href="https://maia.crimew.gay"
				rel="noopener noreferrer"
				target="_blank"
				className="hover:underline"
			>
				maia.crimew.gay
			</Link>
		),
	},
	{
		name: "tora",
	},
	{
		name: "vaporwave",
		credits: (
			<Link
				href="https://nya.rest"
				rel="noopener noreferrer"
				target="_blank"
				className="hover:underline"
			>
				nya.rest
			</Link>
		),
	},
];
