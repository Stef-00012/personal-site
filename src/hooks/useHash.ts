import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function useHash() {
    const [hash, setHash] = useState<string | null>(null);

    useEffect(() => {
        setHash(window.location.hash.replace("#", ""));

        window.addEventListener("hashchange", () => {
            setHash(window.location.hash.replace("#", ""));
        })
    })

    return hash;
}