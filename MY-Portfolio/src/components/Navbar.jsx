import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4 flex flex-col items-center pt-6 pb-2">
                {/* Portfolio Title on Top */}
                <Link
                    to="/"
                    className="font-mono text-3xl font-extrabold text-white mb-4 tracking-wide"
                >
                    M.Puneet Janakiram <span className="text-blue-500">| PORTFOLIO</span>
                </Link>
                {/* Navigation Links Below */}
                <div className="flex items-center justify-center w-full gap-20">
                    <Link to="/" className="text-xl text-gray-300 hover:text-white font-semibold transition-colors px-4 py-2">
                        Home
                    </Link>
                    <Link to="/about" className="text-xl text-gray-300 hover:text-white font-semibold transition-colors px-4 py-2">
                        About
                    </Link>
                    <Link to="/projects" className="text-xl text-gray-300 hover:text-white font-semibold transition-colors px-4 py-2">
                        Projects
                    </Link>
                    <Link to="/contact" className="text-xl text-gray-300 hover:text-white font-semibold transition-colors px-4 py-2">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}