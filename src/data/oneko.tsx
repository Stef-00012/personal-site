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
            <p>
                By{" "}
                <Link
                    href="https://maia.crimew.gay"
                    rel="noopener noreferrer"
                    target="_blank"
                >maia.crimew.gay</Link>
            </p>
        )
	},
    {
		name: "tora",
	},
    {
		name: "vaporwave",
		credits: (
            <p>
                By{" "}
                <Link
                    href="https://nya.rest"
                    rel="noopener noreferrer"
                    target="_blank"
                >nya.rest</Link>
            </p>
        )
	},
]