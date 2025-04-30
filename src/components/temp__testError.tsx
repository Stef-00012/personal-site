"use client";

import { useState } from "react";

interface Props {
    children: React.ReactNode;
}
// ----- TEMPORARY TO TEST global-error.tsx FILE -----
export default function TestError({
    children
}: Props) {
    const [error, setError] = useState(false);

    if (error) throw Error("Simulated Global Error")

    return (
        <div>
            <button className="btn btn-error text-black" type="button" onClick={() => setError(true)}>Throw a Global Error (global-error.tsx)</button>
            {children}
        </div>
    )
}