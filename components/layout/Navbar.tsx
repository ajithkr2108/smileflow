import Link from "next/link";
export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
            <span className="text-xl font-bold text-blue-700">SmileFlow</span>
            <div className="flex gap-6 text-gray-700">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/doctors">Doctors</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </nav>
    );
} 