import { motion } from "framer-motion";

export const About = () => {
    const skills = {
        frontend: ["React", "TypeScript", "TailwindCSS", "Next.js", "HTML5", "CSS3"],
        backend: ["Node.js", "MongoDB", "PostgreSQL", "MYSQL","Express.js", "Docker", "AWS"],
        languages: ["JavaScript", "TypeScript", "Python", "Java", "C++", "C"],
        tools: ["Git", "GitHub", "VS Code", "Postman","Thunder Client", "Linux"]
    };

    const competencies = [
        "Full Stack Development",
        "Data Structures & Algorithms", 
        "Database Design",
        "System Architecture",
        "Problem Solving",
        "Team Collaboration"
    ];

    const achievements = [
        { icon: "🚀", title: "Full Stack Projects", description: "5+ complete web applications" },
        { icon: "📚", title: "Continuous Learner", description: "Always exploring new technologies" },
        { icon: "🤝", title: "Team Player", description: "Collaborative development experience" }
    ];

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

    return (
        <section className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900 opacity-50"></div>
            
            <motion.div 
                className="container mx-auto px-6 relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            About Me
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        A passionate developer with a love for creating innovative solutions and learning new technologies.
                    </p>
                </motion.div>

                {/* Profile Section */}
                <motion.div variants={itemVariants} className="flex flex-col lg:flex-row items-center gap-12 mb-16">
                    <div className="lg:w-1/3">
                        <motion.div
                            className="relative w-64 h-64 mx-auto"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl rotate-6"></div>
                            <img 
                                src="/profile.jpg" 
                                alt="Puneet Janakiram"
                                className="relative w-full h-full object-cover rounded-2xl shadow-2xl"
                            />
                        </motion.div>
                    </div>
                    
                    <div className="lg:w-2/3 text-center lg:text-left">
                        <h3 className="text-3xl font-bold text-white mb-4">
                            Hi, I'm Puneet! 👋
                        </h3>
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            I'm a Computer Science student at VIT, passionate about full-stack development and problem-solving. 
                            I love turning complex problems into simple, beautiful, and intuitive solutions. When I'm not coding, 
                            you'll find me exploring new technologies, contributing to open-source projects, or learning about 
                            the latest trends in web development.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm">🎓 CS Student</span>
                            <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm">💻 Full Stack Dev</span>
                            <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm">🚀 Problem Solver</span>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <motion.div variants={itemVariants} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                            <span className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                                🎓
                            </span>
                            Education
                        </h3>
                        <div className="space-y-4">
                            <div className="border-l-4 border-blue-500 pl-6">
                                <h4 className="text-lg font-semibold text-white">B.Tech in Computer Science</h4>
                                <p className="text-blue-400 font-medium">Vellore Institute of Technology</p>
                                <p className="text-gray-400">2023 - 2027</p>
                                <p className="text-sm text-gray-500 mt-2">
                                    Focusing on software development, algorithms, and modern web technologies.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                            <span className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                                🎯
                            </span>
                            Core Competencies
                        </h3>
                        <div className="grid grid-cols-1 gap-3">
                            {competencies.map((competency, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                    <span className="text-gray-300">{competency}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div variants={itemVariants} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                    <h3 className="text-3xl font-bold text-center mb-10">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Technical Skills
                        </span>
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {Object.entries(skills).map(([category, skillList], categoryIndex) => (
                            <motion.div
                                key={category}
                                variants={itemVariants}
                                className="space-y-4"
                            >
                                <h4 className="text-lg font-semibold text-white capitalize flex items-center gap-2">
                                    <span className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md flex items-center justify-center text-xs">
                                        {categoryIndex + 1}
                                    </span>
                                    {category}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {skillList.map((skill, index) => (
                                        <motion.span
                                            key={index}
                                            className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gray-600 transition-colors"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Achievements Section with Fixed Spacing */}
                <motion.div variants={itemVariants} className="mb-16">
                    <h3 className="text-3xl font-bold text-center mb-8">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Achievements & Highlights
                        </span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-gray-600 transition-all"
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <div className="text-4xl mb-3">{achievement.icon}</div>
                                <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                                <p className="text-gray-400 text-sm">{achievement.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="text-center mt-16">
                    <motion.div 
                        className="inline-block p-10 bg-gray-800/60 backdrop-blur-xl border border-gray-600/50 rounded-3xl max-w-3xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
                        whileHover={{ scale: 1.02, y: -5, borderColor: "rgba(59, 130, 246, 0.6)" }}
                    >
                        <motion.h3 
                            className="text-3xl font-bold mb-6 text-white"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Ready to Collaborate?
                        </motion.h3>
                        <motion.p 
                            className="text-gray-300 mb-8 text-lg leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            I'm always excited to discuss new opportunities, collaborate on projects, 
                            or just chat about technology and innovation. Let's create something amazing together!
                        </motion.p>
                        <motion.button
                            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.location.href = '/contact'}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <span className="flex items-center gap-2">
                                Get In Touch
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </motion.button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};