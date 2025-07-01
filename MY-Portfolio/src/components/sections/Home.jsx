import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Home = () => {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const roles = ["Full Stack Developer", "Problem Solver", "Tech Enthusiast", "Code Artist"];

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX - window.innerWidth / 2) / 50,
                y: (e.clientY - window.innerHeight / 2) / 50,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const currentRole = roles[currentIndex];
        let charIndex = 0;
        let isDeleting = false;

        const typeInterval = setInterval(() => {
            if (!isDeleting && charIndex <= currentRole.length) {
                setDisplayText(currentRole.slice(0, charIndex));
                charIndex++;
            } else if (isDeleting && charIndex >= 0) {
                setDisplayText(currentRole.slice(0, charIndex));
                charIndex--;
            }

            if (charIndex === currentRole.length + 1 && !isDeleting) {
                setTimeout(() => { isDeleting = true; }, 2000);
            }

            if (charIndex === 0 && isDeleting) {
                isDeleting = false;
                setCurrentIndex((prev) => (prev + 1) % roles.length);
                clearInterval(typeInterval);
            }
        }, isDeleting ? 50 : 100);

        return () => clearInterval(typeInterval);
    }, [currentIndex]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
            {/* Enhanced animated background with parallax */}
            <motion.div 
                className="absolute inset-0 bg-gradient-radial"
                style={{
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                }}
            />
            <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>
            
            {/* Professional floating particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-300/40 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -200, 0],
                            opacity: [0.2, 0.8, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 3,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>
            
            {/* Enhanced floating geometric shapes */}
            <motion.div 
                className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl rotate-45"
                animate={{ 
                    rotate: [45, 90, 45],
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
                }}
            />
            <motion.div 
                className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full"
                animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
                }}
            />

            <motion.div 
                className="container mx-auto px-6 text-center z-10 max-w-6xl"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Enhanced Profile Image Section */}
                    <motion.div 
                        variants={itemVariants}
                        className="lg:w-1/2 flex justify-center"
                    >
                        <div className="relative">
                            {/* Professional animated rings */}
                            <motion.div
                                className="absolute inset-0 rounded-full border border-blue-400/20"
                                style={{ padding: '30px' }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.div
                                className="absolute inset-0 rounded-full border border-purple-400/15"
                                style={{ padding: '50px' }}
                                animate={{ rotate: -360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            />
                            
                            {/* Enhanced Profile Image */}
                            <motion.div
                                className="relative w-80 h-80 rounded-full overflow-hidden border-2 border-blue-400/30 shadow-2xl backdrop-blur-sm"
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)",
                                }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <img 
                                    src="/profile.jpg" 
                                    alt="Puneet Janakiram"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                
                                {/* Professional overlay */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0"
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                            
                            {/* Professional tech icons */}
                            <motion.div
                                className="absolute -top-6 -right-6 w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                ⚛️
                            </motion.div>
                            <motion.div
                                className="absolute -bottom-6 -left-6 w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white shadow-lg"
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity }}
                            >
                                🟢
                            </motion.div>
                            <motion.div
                                className="absolute top-1/2 -right-10 w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg"
                                whileHover={{ scale: 1.1 }}
                                animate={{ x: [0, 8, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            >
                                💻
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Enhanced Text Content */}
                    <motion.div variants={itemVariants} className="lg:w-1/2 text-left lg:text-left">
                        <motion.div className="mb-8">
                            <motion.h1 
                                className="text-5xl md:text-7xl font-bold mb-6"
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.2, ease: "backOut" }}
                            >
                                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                                    Puneet
                                </span>
                            </motion.h1>
                            
                            <motion.div 
                                className="text-xl md:text-2xl font-light text-gray-300 mb-6"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            >
                                I'm a{" "}
                                <span className="text-blue-400 font-semibold min-h-[1.2em] inline-block">
                                    {displayText}
                                    <motion.span 
                                        className="text-blue-400 ml-1"
                                        animate={{ opacity: [1, 0, 1] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                    >
                                        |
                                    </motion.span>
                                </span>
                            </motion.div>
                        </motion.div>

                        <motion.div 
                            variants={itemVariants} 
                            className="mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                        >
                            <p className="text-lg text-gray-400 leading-relaxed">
                                Passionate about creating exceptional digital experiences through clean code, 
                                innovative solutions, and cutting-edge technologies. Let's build something amazing together.
                            </p>
                        </motion.div>

                        <motion.div 
                            variants={itemVariants}
                            className="flex flex-wrap gap-4 mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.8 }}
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link to="/projects" className="btn-primary">
                                    View My Work
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link to="/about" className="btn-secondary">
                                    About Me
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <a 
                                    href="https://github.com/puneet-jr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary flex items-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                    GitHub
                                </a>
                            </motion.div>
                        </motion.div>

                        {/* Professional Stats/Highlights */}
                        <motion.div 
                            className="grid grid-cols-3 gap-4 mt-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1, duration: 0.8 }}
                        >
                            <motion.div 
                                className="text-center p-4 bg-gradient-to-b from-blue-500/10 to-transparent rounded-lg backdrop-blur-sm border border-blue-500/20"
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                            >
                                <div className="text-2xl font-bold text-blue-400">5+</div>
                                <div className="text-sm text-gray-400">Projects</div>
                            </motion.div>
                            <motion.div 
                                className="text-center p-4 bg-gradient-to-b from-purple-500/10 to-transparent rounded-lg backdrop-blur-sm border border-purple-500/20"
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(147, 51, 234, 0.1)" }}
                            >
                                <div className="text-2xl font-bold text-purple-400">2+</div>
                                <div className="text-sm text-gray-400">Years Coding</div>
                            </motion.div>
                            <motion.div 
                                className="text-center p-4 bg-gradient-to-b from-green-500/10 to-transparent rounded-lg backdrop-blur-sm border border-green-500/20"
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 197, 94, 0.1)" }}
                            >
                                <div className="text-2xl font-bold text-green-400">VIT</div>
                                <div className="text-sm text-gray-400">Student</div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};