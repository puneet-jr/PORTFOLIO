import { RevealOnScroll } from "./RevealOnScroll";
export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center relative pt-0 pb-0">
            <div className="text-center z-10 px-7 w-full">
                <RevealOnScroll>
                    <h1 className="text-5xl md:text-6xl font-bold  mt-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
                        Hi, I'm Puneet
                    </h1>
                    <div className="max-w-4xl mx-auto mb-8 rounded-xl bg-black/40 px-8 py-8 shadow-lg border border-white/10">
                        <div className="flex flex-col space-y-8 text-gray-200 md:text-2xl text-xl leading-relaxed">
                            <span>
                                I am a passionate web developer who loves building beautiful and functional user experiences.
                            </span>
                            <span>
                                Skilled in <span className="text-cyan-400 font-semibold">React</span>, <span className="text-cyan-400 font-semibold">TypeScript</span>, and modern web technologies, I enjoy turning ideas into reality through code.
                            </span>
                            <span>
                                I am always eager to learn and take on new challenges, striving to create impactful digital solutions.
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="#projects"
                            className="bg-cyan-500 text-white py-3 px-6 rounded-full font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                        >
                            View Projects
                        </a>
                        <a
                            href="#about"
                            className="bg-cyan-500 text-white py-3 px-6 rounded-full font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                        >
                            About Me
                        </a>
                        <a
                            href="#contact"
                            className="bg-cyan-500 text-white py-3 px-6 rounded-full font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                        >
                            Contact
                        </a>
                        <a
                            href="https://github.com/puneet-jr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-cyan-500 text-white py-3 px-6 rounded-full font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                        >
                            GitHub
                        </a>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};