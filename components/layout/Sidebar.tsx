import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="w-56 min-h-screen bg-white border-r border-gray-200 px-4 py-6">
            <p className="text-lg font-bold text-[#0EA5A0] mb-6">Modern Dent jjCare</p>
            <nav className="flex flex-col gap-3 text-sm text-[#172033]">
                <Link href="/reception">Reception</Link>
                <Link href="/dentist">Dentist</Link>
                <Link href="/admin">Admin</Link>
            </nav>
        </aside>
    );
}