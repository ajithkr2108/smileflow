export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
            <span className="text-xl font-bold text-blue-700">SmileFlow</span>
            <div className="flex gap-6 text-gray-700">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/services">Services</a>
                <a href="/doctors">Doctors</a>
                <a href="/contact">Contact</a>
            </div>
        </nav>
    );
} 