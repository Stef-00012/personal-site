import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="justify-center items-center flex min-h-screen flex-col">
            <h1 className="text-4xl">404 ~ We couldn&apos;t find the page you were looking for.</h1>
            <Link href="/" className="mt-2 text-accent hover:text-accent-content hover:bg-accent px-2">Return to the main page?</Link>
        </div>
    )
}