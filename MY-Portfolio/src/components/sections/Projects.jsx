import { useState } from "react";
import { motion } from "framer-motion";

// Mock RevealOnScroll component since we don't have the original
const RevealOnScroll = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            {children}
        </motion.div>
    );
};

export const Projects = () => {
    const projectList = [
        {
            name: "Waste Truck Tracking System",
            github: "https://github.com/puneet-jr/Waste-management-fullstack",
            liveDemo: "https://waste-tracker-demo.vercel.app",
            description: "A system to track waste trucks in real-time, improving efficiency and transparency for municipal waste management.",
            tech: ["React", "Node.js", "MongoDB", "Real-time tracking"],
            category: "Full Stack",
            features: ["Real-time GPS tracking", "Route optimization", "Driver dashboard", "Admin analytics"],
            status: "Completed"
        },
        {
            name: "Role-Based-Authorization",
            github: "https://github.com/puneet-jr/Role-Based-Authentication",
            description: "A secure authentication and authorization system implementing role-based access control (RBAC). Features user registration, login, JWT token management, and different permission levels for Admin, Moderator, and User roles with protected routes and middleware.",
            tech: ["Node.js", "JWT", "Express", "Security"],
            category: "Backend"
        },
        {
            name: "Store-API",
            github: "https://github.com/puneet-jr/STORE-API",
            description: "A RESTful API for managing store inventory, orders, and users, built with Node.js and MongoDB.",
            tech: ["Node.js", "MongoDB", "REST API", "Express"],
            category: "Backend"
        },
        {
            name: "URL-Shortner",
            github: "https://github.com/puneet-jr/URL-SHORTNER",
            description: "A web application to shorten URLs, track clicks, and manage links with authentication.",
            tech: ["JavaScript", "Database", "Analytics"],
            category: "Full Stack"
        },
        {
            name: "Portfolio Website",
            github: "https://github.com/puneet-jr/PORTFOLIO",
            description: "My personal portfolio website showcasing my projects, skills, and contact information.",
            tech: ["React", "CSS", "Responsive Design"],
            category: "Frontend"
        },
    ];

    const [openDesc, setOpenDesc] = useState(Array(projectList.length).fill(false));

    const handleDescToggle = (idx) => {
        setOpenDesc((prev) => {
            const updated = [...prev];
            updated[idx] = !updated[idx];
            return updated;
        });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6 }
        }
    };

    const getCategoryColor = (category) => {
        switch (category) {
            case "Full Stack": return "from-blue-500 to-purple-500";
            case "Backend": return "from-green-500 to-teal-500";
            case "Frontend": return "from-pink-500 to-orange-500";
            default: return "from-gray-500 to-gray-600";
        }
    };

    const getCategoryIcon = (category) => {
        switch (category) {
            case "Full Stack": return "🚀";
            case "Backend": return "⚙️";
            case "Frontend": return "🎨";
            default: return "💻";
        }
    };

    return (
        <section id="projects" className="min-h-screen py-20 relative overflow-hidden bg-gray-900">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900 opacity-50"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/50"></div>
            
            {/* Animated Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            
            <motion.div 
                className="container mx-auto px-6 relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <RevealOnScroll>
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                                My Projects
                            </span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            A collection of projects showcasing my skills in full-stack development, backend systems, and modern web technologies.
                        </p>
                    </motion.div>

                    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectList.map((project, idx) => (
                            <motion.div 
                                key={idx} 
                                variants={itemVariants}
                                className="group relative"
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="relative bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-6 h-full flex flex-col hover:border-gray-600 transition-all duration-300 hover:bg-gray-800/70">
                                    {/* Category Badge */}
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-2xl">{getCategoryIcon(project.category)}</span>
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColor(project.category)} text-white`}>
                                            {project.category}
                                        </span>
                                    </div>

                                    {/* Project Title */}
                                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                                        {project.name}
                                    </h3>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, techIdx) => (
                                            <span 
                                                key={techIdx}
                                                className="px-2 py-1 bg-gray-700 text-gray-300 rounded-md text-xs hover:bg-gray-600 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Description Toggle */}
                                    <div className="flex-grow">
                                        {openDesc[idx] && (
                                            <motion.p 
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="text-gray-400 text-sm mb-4 leading-relaxed"
                                            >
                                                {project.description}
                                            </motion.p>
                                        )}
                                    </div>

                                    {/* Enhanced Features Section */}
                                    {openDesc[idx] && project.features && (
                                        <motion.div 
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            className="mb-4"
                                        >
                                            <h5 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h5>
                                            <ul className="text-xs text-gray-400 space-y-1">
                                                {project.features.map((feature, featureIdx) => (
                                                    <li key={featureIdx} className="flex items-center gap-2">
                                                        <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}

                                    {/* Enhanced Action Buttons */}
                                    <div className="flex justify-between items-center gap-3 mt-auto">
                                        <motion.button
                                            onClick={() => handleDescToggle(idx)}
                                            className="flex-1 text-sm bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            {openDesc[idx] ? "Hide Details" : "Show Details"}
                                        </motion.button>
                                        
                                        <div className="flex gap-2">
                                            {project.liveDemo && (
                                                <motion.a
                                                    href={project.liveDemo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all"
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                    Demo
                                                </motion.a>
                                            )}
                                            
                                            {project.github && (
                                                <motion.a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-1 bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all"
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                    </svg>
                                                    Code
                                                </motion.a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Hover Glow Effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <motion.div variants={itemVariants} className="text-center mt-16">
                        <motion.div 
                            className="inline-block p-8 bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl max-w-2xl"
                            whileHover={{ scale: 1.02 }}
                        >
                            <h3 className="text-2xl font-bold mb-4 text-white">Interested in Collaborating?</h3>
                            <p className="text-gray-400 mb-6">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                            </p>
                            <motion.button
                                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-medium transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Let's Work Together
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </RevealOnScroll>
            </motion.div>
        </section>
    );
};