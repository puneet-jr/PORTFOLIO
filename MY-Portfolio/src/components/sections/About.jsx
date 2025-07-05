import { motion } from "framer-motion";
import { ProfileImage } from "../ProfileImage";

export const About = () => {
    const skills = {
        frontend: ["React", "TypeScript", "TailwindCSS", "HTML5", "CSS3"],
        backend: ["Node.js", "MongoDB", "PostgreSQL", "MYSQL","Express.js", "Docker"],
        languages: ["JavaScript", "TypeScript", "Python", "Java", "C++", "C"],
        tools: ["Git", "GitHub", "VS Code", "Postman","Thunder Client", "Linux"]
    };

    const experiences = [
        {
            year: "2023-Present",
            title: "Computer Science Student",
            company: "Vellore Institute of Technology",
            description: "Pursuing B.Tech in Computer Science with focus on software development, algorithms, and modern web technologies."
        },
        {
            year: "2024",
            title: "Full Stack Projects",
            company: "Personal Development",
            description: "Built 5+ complete web applications using modern tech stack including React, Node.js, and databases."
        }
    ];

    const philosophies = [
        {
            title: "Clean Code Advocate",
            description: "I believe in writing code that's not just functional, but also readable, maintainable, and elegant.",
            icon: "✨"
        },
        {
            title: "Continuous Learner",
            description: "Technology evolves rapidly, and I'm committed to staying current with the latest trends and best practices.",
            icon: "📚"
        },
        {
            title: "Problem Solver",
            description: "Every challenge is an opportunity to learn and grow. I approach problems with curiosity and determination.",
            icon: "🧩"
        }
    ];

    return (
        <section className="min-h-screen py-20 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)]"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-6xl md:text-7xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                            About
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Me
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        A passionate developer with a love for creating innovative solutions and learning new technologies.
                    </p>
                </motion.div>

                {/* Biography Section */}
                <motion.div
                    className="max-w-7xl mx-auto mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Profile Image */}
                        <div className="flex justify-center lg:justify-start">
                            <ProfileImage
                                src="/myprofile.jpg"
                                alt="Puneet Janakiram"
                                size="large"
                                className="border-4 border-white/10"
                            />
                        </div>

                        {/* Biography Content */}
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <h3 className="text-3xl font-bold text-white">
                                    Hi, I'm Puneet! 👋
                                </h3>
                                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                            </div>
                            
                            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                                <p>
                                    I'm a Computer Science student at VIT with a passion for <strong className="text-white">full-stack development</strong> and 
                                    <strong className="text-white"> problem-solving</strong>. My journey in tech started with curiosity about how things work, 
                                    and has evolved into a deep love for creating digital solutions that make a difference.
                                </p>
                                
                                <p>
                                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                                    or learning about the latest trends in web development. I believe in the power of clean code, 
                                    thoughtful design, and continuous learning.
                                </p>
                                
                                <p>
                                    My goal is to build applications that not only solve problems but also provide exceptional user experiences. 
                                    I'm always excited to take on new challenges and collaborate with like-minded individuals.
                                </p>
                            </div>

                            {/* Quick facts */}
                            <div className="grid grid-cols-2 gap-4 pt-6">
                                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                                    <div className="text-2xl font-bold text-blue-400">2+</div>
                                    <div className="text-sm text-gray-400">Years Coding</div>
                                </div>
                                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                                    <div className="text-2xl font-bold text-purple-400">5+</div>
                                    <div className="text-sm text-gray-400">Projects Built</div>
                                </div>
                                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                                    <div className="text-2xl font-bold text-green-400">VIT</div>
                                    <div className="text-sm text-gray-400">Current College</div>
                                </div>
                                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                                    <div className="text-2xl font-bold text-pink-400">∞</div>
                                    <div className="text-sm text-gray-400">Learning Mode</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Philosophy Section */}
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl font-bold text-center mb-12 text-white">
                        My Philosophy
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {philosophies.map((philosophy, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8 text-center hover:border-gray-600/50 transition-all duration-300"
                                whileHover={{ y: -5, scale: 1.02 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                                viewport={{ once: true }}
                            >
                                <div className="text-5xl mb-4">{philosophy.icon}</div>
                                <h4 className="text-xl font-bold text-white mb-3">{philosophy.title}</h4>
                                <p className="text-gray-400 leading-relaxed">{philosophy.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Experience Timeline */}
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl font-bold text-center mb-12 text-white">
                        My Journey
                    </h3>
                    <div className="max-w-4xl mx-auto">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                className="relative pl-8 pb-8 last:pb-0"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * index }}
                                viewport={{ once: true }}
                            >
                                {/* Timeline line */}
                                <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
                                
                                {/* Timeline dot */}
                                <div className="absolute left-0 top-2 w-3 h-3 bg-blue-500 rounded-full transform -translate-x-1/2"></div>
                                
                                {/* Content */}
                                <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 ml-6">
                                    <div className="text-sm text-blue-400 font-semibold mb-2">{exp.year}</div>
                                    <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                                    <div className="text-purple-400 font-medium mb-3">{exp.company}</div>
                                    <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Skills Section */}
                <motion.div
                    className="bg-gray-800/30 border border-gray-700/50 rounded-3xl p-8 mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl font-bold text-center mb-12 text-white">
                        Technical Skills
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {Object.entries(skills).map(([category, skillList], categoryIndex) => (
                            <div key={category} className="space-y-4">
                                <h4 className="text-lg font-semibold text-white capitalize flex items-center gap-2">
                                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                                    {category}
                                </h4>
                                <div className="space-y-2">
                                    {skillList.map((skill, index) => (
                                        <motion.div
                                            key={index}
                                            className="px-3 py-2 bg-gray-700/50 text-gray-300 rounded-lg text-sm hover:bg-gray-700 transition-colors"
                                            whileHover={{ scale: 1.05, x: 5 }}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.05 * index }}
                                            viewport={{ once: true }}
                                        >
                                            {skill}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-3xl p-12 max-w-3xl mx-auto">
                        <h3 className="text-3xl font-bold text-white mb-6">
                            Ready to Collaborate?
                        </h3>
                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                            I'm always excited to discuss new opportunities, collaborate on projects, 
                            or just chat about technology and innovation. Let's create something amazing together!
                        </p>
                        <motion.button
                            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.location.href = '/contact'}
                        >
                            Get In Touch
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};