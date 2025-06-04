import { useState } from "react";
import { RevealOnScroll } from "./RevealOnScroll";

export const Projects = () => {
    const projectList = [
         {
            name: "Waste Truck Tracking System",
            github: "https://github.com/puneet-jr/Waste_Trucks_Tracker",
            description: "A system to track waste trucks in real-time, improving efficiency and transparency for municipal waste management.",
        },
        {
            name: "Store-API",
            github: "https://github.com/puneet-jr/STORE-API",
            description: "A RESTful API for managing store inventory, orders, and users, built with Node.js and MongoDB.",
        },
        {
            name: "URL-Shortner",
            github: "https://github.com/puneet-jr/server-app",
            description: "A web application to shorten URLs, track clicks, and manage links with authentication.",
        },
        {
            name: "Portfolio Website",
            github: "https://github.com/puneet-jr/PORTFOLIO",
            description: "My personal portfolio website showcasing my projects, skills, and contact information.",
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

    return (
        <section id="projects" className="min-h-screen py-28 px-8 flex flex-col items-center bg-transparent">
            <RevealOnScroll>
                <br></br>
                <h2 className="w-full text-5xl font-extrabold mb-16 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center break-words leading-[1.15]">
                    My Projects
                </h2>
                <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-14">
                    {projectList.map((project, idx) => (
                        <div key={idx} className="rounded-2xl border border-white/10 p-10 bg-black/30 shadow-lg flex flex-col justify-between h-full">
                            <h3 className="text-2xl font-bold text-white mb-6 text-center">{project.name}</h3>
                            <div className="flex justify-between items-center mb-2">
                                <button
                                    onClick={() => handleDescToggle(idx)}
                                    className="text-sm bg-blue-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-600 transition"
                                >
                                    {openDesc[idx] ? "Hide Description" : "Show Description"}
                                </button>
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition"
                                    >
                                        GitHub
                                    </a>
                                )}
                            </div>
                            {openDesc[idx] && (
                                <p className="text-gray-400 text-base mt-4 text-left">
                                    {project.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </RevealOnScroll>
        </section>
    );
};