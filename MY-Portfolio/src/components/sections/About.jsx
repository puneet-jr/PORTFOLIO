import { RevealOnScroll } from "./RevealOnScroll";

export const About = () => {

    const frontendSkills = [
        "HTML", "CSS", "Javascript", "React", "TailwindCSS",
    ];

    const backendSkills = [
        "Node.js", "Typescript",
        "MongoDB", "PostgreSQL", "MySQL"
    ];

    const coreCompetencies = [
        "Data Structures & Algorithms (DSA)",
        "Full Stack Web Development",
        "Object-Oriented Programming (OOP)",
        "Database Management Systems"
    ];

    const otherSkills = [
        "C", "C++", "Python", "Java",
        "Reasoning", "Problem-Solving", "Teamwork", "Communication"
    ];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-32">
            <RevealOnScroll>
                <div className="max-w-4xl mx-auto px-8">
                    <br />
                    <h2 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>
                    <div className="rounded-2xl p-12 border border-white/10 hover:translate-y-1 transition-all mb-12">
                        <p className="text-gray-300 mb-10 text-lg">
                            Passionate developer with expertise in building scalable web
                            applications and creating innovative solutions.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {/* Frontend Card */}
                            <div className="rounded-2xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                    <span className="text-2xl">🖥️</span> Frontend
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-2 px-4 rounded-full text-base font-semibold hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition flex items-center gap-1"
                                        >
                                            <span className="text-lg">🌟</span>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {/* Backend Card */}
                            <div className="rounded-2xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                    <span className="text-2xl">🗄️</span> Backend
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-2 px-4 rounded-full text-base font-semibold hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition flex items-center gap-1"
                                        >
                                            <span className="text-lg">🚀</span>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Other Skills Card */}
                        <div className="rounded-2xl p-6 mt-8 hover:-translate-y-1 transition-all">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <span className="text-2xl">🛠️</span> Other Languages & Skills
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {otherSkills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-blue-500/10 text-blue-500 py-2 px-4 rounded-full text-base font-semibold hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition flex items-center gap-1"
                                    >
                                        <span className="text-lg">💡</span>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
                        {/* Education Card */}
                        <div className="p-6 rounded-2xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Education</h3>
                            <ul className="list-disc list-inside text-gray-300 text-lg">
                                <li>
                                    <span className="font-semibold text-white">
                                        B.Tech in Computer Science and Engineering
                                    </span>
                                    <span className="block text-base text-gray-400">
                                        Vellore Institute of Technology (VIT), Vellore.
                                        2023-2027.
                                    </span>
                                </li>
                            </ul>
                        </div>
                        {/* Core Competencies Card */}
                        <div className="p-6 rounded-2xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Core Competencies</h3>
                            <ul className="list-disc list-inside text-gray-300 text-lg">
                                {coreCompetencies.map((item, idx) => (
                                    <li key={idx}>
                                        <span className="font-semibold text-white">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};