import { useState } from "react";
import { RevealOnScroll } from "./RevealOnScroll";
import emailjs from 'emailjs-com';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    // Use environment variables for sensitive info
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then(() => {
                alert("Message sent!");
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            })
            .catch(() => alert("OOPS something went wrong please try again!"));
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-24 bg-transparent">
            <RevealOnScroll>
                <div className="max-w-xl w-full mx-auto px-8 py-12 rounded-2xl border border-white/10 bg-black/40 shadow-lg">
                    <h2 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Let’s Connect & Collaborate!
                    </h2>
                    <form
                        className="flex flex-col gap-6"
                        autoComplete="off"
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-gray-900/60 border border-white/10 rounded-lg px-4 py-3 text-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-gray-900/60 border border-white/10 rounded-lg px-4 py-3 text-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="bg-gray-900/60 border border-white/10 rounded-lg px-4 py-3 text-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            required
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            className="bg-gray-900/60 border border-white/10 rounded-lg px-4 py-3 text-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        />
                        <button
                            type="submit"
                            className="bg-cyan-500 text-white py-3 px-6 rounded-full font-semibold text-lg hover:bg-cyan-600 transition"
                        >
                            Send Message
                        </button>
                    </form>
                    <div className="mt-10 text-center">
                        <h3 className="text-xl font-bold mb-2 text-white">Or reach out directly:</h3>
                        <div className="flex flex-col gap-2 items-center">
                            <a
                                href="mailto:puneetjanakiram@gmail.com"
                                className="text-cyan-400 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                puneetjanakiram@gmail.com
                            </a>
                            <a
                                href="tel:+911234567890"
                                className="text-cyan-400 hover:underline"
                            >
                                +91 12345 67890
                            </a>
                            <a
                                href="https://www.linkedin.com/in/m-puneet-janakiram-9814402a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                className="text-cyan-400 hover:underline flex items-center gap-1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="inline w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/puneet-jr"
                                className="text-cyan-400 hover:underline flex items-center gap-1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="inline w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};