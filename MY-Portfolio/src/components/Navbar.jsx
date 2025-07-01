import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    const navItems = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/projects", label: "Projects" },
        { path: "/contact", label: "Contact" }
    ];

    return (
        <motion.nav 
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled 
                    ? 'bg-black/80 backdrop-blur-md border-b border-gray-800/50 py-4' 
                    : 'bg-transparent py-6'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center animate-pulse-glow">
                            <span className="text-white font-bold text-lg">P</span>
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Puneet
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`relative text-lg font-medium transition-colors duration-300 hover:text-blue-400 ${
                                    location.pathname === item.path ? 'text-blue-400' : 'text-gray-300'
                                }`}
                            >
                                {item.label}
                                {location.pathname === item.path && (
                                    <motion.div
                                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"
                                        layoutId="activeTab"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden w-8 h-8 flex flex-col justify-center items-center space-y-1 focus:outline-none"
                    >
                        <motion.span 
                            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                                menuOpen ? 'rotate-45 translate-y-2' : ''
                            }`}
                        />
                        <motion.span 
                            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                                menuOpen ? 'opacity-0' : ''
                            }`}
                        />
                        <motion.span 
                            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                                menuOpen ? '-rotate-45 -translate-y-2' : ''
                            }`}
                        />
                    </button>
                </div>
            </div>
        </motion.nav>
    );
};