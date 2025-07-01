import { useState } from "react";
import { motion } from "framer-motion";
import { RevealOnScroll } from "./RevealOnScroll";
import emailjs from 'emailjs-com';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [errors, setErrors] = useState({});

    // Use environment variables for sensitive info
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required";
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({ ...errors, [name]: "" });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        setIsSubmitting(true);
        setSubmitStatus(null);
        
        try {
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY);
            setSubmitStatus("success");
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactMethods = [
        {
            icon: "📧",
            label: "Email",
            value: "puneetjanakiram@gmail.com",
            href: "mailto:puneetjanakiram@gmail.com",
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: "💼",
            label: "LinkedIn",
            value: "Connect on LinkedIn",
            href: "https://www.linkedin.com/in/m-puneet-janakiram-9814402a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            color: "from-blue-600 to-blue-700"
        },
        {
            icon: "💻",
            label: "GitHub",
            value: "View my repositories",
            href: "https://github.com/puneet-jr",
            color: "from-gray-600 to-gray-700"
        },
        {
            icon: "📱",
            label: "Phone",
            value: "+91 12345 67890",
            href: "tel:+911234567890",
            color: "from-green-500 to-green-600"
        }
    ];

    return (
        <section id="contact" className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
            {/* Enhanced Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900 opacity-50"></div>
            
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0.2, 0.8, 0.2],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <RevealOnScroll>
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                                Let's Connect
                            </span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <motion.div
                            className="bg-gray-800/30 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 shadow-2xl"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ borderColor: "rgba(59, 130, 246, 0.5)" }}
                        >
                            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                                <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                                    ✉️
                                </span>
                                Send a Message
                            </h3>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-300">Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 bg-gray-900/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                                                errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 focus:ring-blue-500'
                                            }`}
                                            placeholder="Your full name"
                                        />
                                        {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
                                    </motion.div>
                                    
                                    <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-300">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 bg-gray-900/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                                                errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 focus:ring-blue-500'
                                            }`}
                                            placeholder="your.email@example.com"
                                        />
                                        {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
                                    </motion.div>
                                </div>
                                
                                <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-300">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                        placeholder="What's this about?"
                                    />
                                </motion.div>
                                
                                <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-300">Message *</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className={`w-full px-4 py-3 bg-gray-900/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all resize-none ${
                                            errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 focus:ring-blue-500'
                                        }`}
                                        placeholder="Tell me about your project, ideas, or just say hello!"
                                    />
                                    {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}
                                </motion.div>
                                
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Sending...
                                        </span>
                                    ) : (
                                        "Send Message"
                                    )}
                                </motion.button>
                                
                                {submitStatus === "success" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-center"
                                    >
                                        🎉 Message sent successfully! I'll get back to you soon.
                                    </motion.div>
                                )}
                                
                                {submitStatus === "error" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-center"
                                    >
                                        ❌ Something went wrong. Please try again or contact me directly.
                                    </motion.div>
                                )}
                            </form>
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-gray-800/30 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
                                <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                                    <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                        🚀
                                    </span>
                                    Let's Build Something Great
                                </h3>
                                <p className="text-gray-300 mb-6 leading-relaxed">
                                    I'm always excited to work on new projects and collaborate with talented people. 
                                    Whether you have a specific project in mind or just want to connect, I'd love to hear from you!
                                </p>
                                
                                <div className="space-y-4">
                                    {contactMethods.map((method, index) => (
                                        <motion.a
                                            key={index}
                                            href={method.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center gap-4 p-4 bg-gradient-to-r ${method.color} rounded-lg text-white hover:shadow-lg transition-all group`}
                                            whileHover={{ scale: 1.02, y: -2 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <span className="text-2xl">{method.icon}</span>
                                            <div>
                                                <div className="font-medium">{method.label}</div>
                                                <div className="text-sm opacity-90 group-hover:opacity-100 transition-opacity">
                                                    {method.value}
                                                </div>
                                            </div>
                                            <svg className="w-5 h-5 ml-auto opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Stats for Recruiters */}
                            <motion.div
                                className="bg-gray-800/30 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 shadow-2xl"
                                whileHover={{ borderColor: "rgba(59, 130, 246, 0.5)" }}
                            >
                                <h3 className="text-xl font-bold mb-4 text-white">Quick Facts</h3>
                                <div className="space-y-3 text-gray-300">
                                    <div className="flex justify-between">
                                        <span>🎓 Education:</span>
                                        <span className="font-medium">B.Tech CS @ VIT</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>💼 Available for:</span>
                                        <span className="font-medium">Internships & Projects</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>⚡ Response Time:</span>
                                        <span className="font-medium">Within 24 hours</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>🌍 Location:</span>
                                        <span className="font-medium">India (Remote Available)</span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};