import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    const location = useLocation();

    const navItems = [
        { path: "/", label: "Home", icon: "🏠" },
        { path: "/about", label: "About", icon: "👨‍💻" },
        { path: "/projects", label: "Projects", icon: "🚀" },
        { path: "/contact", label: "Contact", icon: "📧" }
    ];

    const menuVariants = {
        closed: {
            opacity: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        open: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        closed: {
            opacity: 0,
            y: 50,
            transition: {
                duration: 0.2
            }
        },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <AnimatePresence>
            {menuOpen && (
                <motion.div
                    className="fixed inset-0 z-40 md:hidden"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={menuVariants}
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/90 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* Menu Content */}
                    <motion.div 
                        className="relative flex flex-col items-center justify-center h-full space-y-8 px-8"
                        variants={menuVariants}
                    >
                        {navItems.map((item) => (
                            <motion.div key={item.path} variants={itemVariants}>
                                <Link
                                    to={item.path}
                                    onClick={() => setMenuOpen(false)}
                                    className={`flex items-center space-x-4 text-2xl font-semibold transition-colors duration-300 ${
                                        location.pathname === item.path 
                                            ? 'text-blue-400' 
                                            : 'text-white hover:text-blue-400'
                                    }`}
                                >
                                    <span className="text-3xl">{item.icon}</span>
                                    <span>{item.label}</span>
                                </Link>
                            </motion.div>
                        ))}

                        <motion.div variants={itemVariants} className="pt-8">
                            <a
                                href="https://github.com/puneet-jr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                                </svg>
                                <span>GitHub</span>
                            </a>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};