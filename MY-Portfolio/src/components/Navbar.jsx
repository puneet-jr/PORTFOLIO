import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4 flex flex-col items-center pt-6 pb-2">
                {/* Portfolio Title on Top */}
                <a
                    href="#home"
                    className="font-mono text-3xl font-extrabold text-white mb-4 tracking-wide"
                >
                    M.Puneet Janakiram <span className="text-blue-500">| PORTFOLIO</span>
                </a>
                {/* Navigation Links Below */}
              <div className="flex items-center justify-center w-full gap-20">
    <a href="#home" className="text-xl text-gray-300 hover:text-white font-semibold transition-colors px-4 py-2">
        Home
    </a>
    <a href="#about" className="text-xl text-gray-300 hover:text-white font-semibold transition-colors px-4 py-2">
        About
    </a>
    <a href="#projects" className="text-xl text-gray-300 hover:text-white font-semibold transition-colors px-4 py-2">
        Projects
    </a>
    <a href="#contact" className="text-xl text-gray-300 hover:text-white font-semibold transition-colors px-4 py-2">
        Contact
    </a>
</div>
            </div>
        </nav>
    );
}