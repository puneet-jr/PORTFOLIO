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
            href: "https://www.linkedin.com/in/m-puneet-janakiram-9814402a5/",
            color: "from-blue-600 to-blue-700"
        },
        {
            icon: "💻",
            label: "GitHub",
            value: "View my repositories",
            href: "https://github.com/puneet-jr",
            color: "from-gray-700 to-gray-800"
        }
    ];

    return (
        <section id="contact" className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
            {/* Enhanced Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900 opacity-50"></div>
            
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -150, 0],
                            opacity: [0.1, 1, 0.1],
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

            <div className="container mx-auto px-6 relative z-10">
                <RevealOnScroll>
                    <motion.div 
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-6xl md:text-7xl font-bold mb-8">
                            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                                Let's Connect
                            </span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Ready to bring your ideas to life? Let's discuss how we can work together to create something extraordinary.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
                        {/* Contact Form */}
                        <motion.div
                            className="bg-gray-800/40 backdrop-blur-xl border border-gray-600/50 rounded-3xl p-10 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ borderColor: "rgba(59, 130, 246, 0.6)", y: -5 }}
                        >
                            <h3 className="text-3xl font-bold mb-8 text-white flex items-center gap-4">
                                <motion.span 
                                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-xl"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    ✉️
                                </motion.span>
                                Send a Message
                            </h3>
                            
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <motion.div whileFocus={{ scale: 1.02 }} className="space-y-3">
                                        <label className="block text-sm font-semibold text-gray-200">Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`w-full px-5 py-4 bg-gray-900/60 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                                                errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 focus:ring-blue-500 focus:border-blue-500'
                                            }`}
                                            placeholder="Your full name"
                                        />
                                        {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
                                    </motion.div>
                                    
                                    <motion.div whileFocus={{ scale: 1.02 }} className="space-y-3">
                                        <label className="block text-sm font-semibold text-gray-200">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full px-5 py-4 bg-gray-900/60 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                                                errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 focus:ring-blue-500 focus:border-blue-500'
                                            }`}
                                            placeholder="your.email@example.com"
                                        />
                                        {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
                                    </motion.div>
                                </div>
                                
                                <motion.div whileFocus={{ scale: 1.02 }} className="space-y-3">
                                    <label className="block text-sm font-semibold text-gray-200">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 bg-gray-900/60 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                                        placeholder="What's this about?"
                                    />
                                </motion.div>
                                
                                <motion.div whileFocus={{ scale: 1.02 }} className="space-y-3">
                                    <label className="block text-sm font-semibold text-gray-200">Message *</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        className={`w-full px-5 py-4 bg-gray-900/60 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                                            errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 focus:ring-blue-500 focus:border-blue-500'
                                        }`}
                                        placeholder="Tell me about your project, ideas, or just say hello!"
                                    />
                                    {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}
                                </motion.div>
                                
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 px-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center gap-3">
                                            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Sending Message...
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-center gap-2">
                                            Send Message
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                            </svg>
                                        </span>
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
                            <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-600/50 rounded-3xl p-10 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">
                                <h3 className="text-3xl font-bold mb-8 text-white flex items-center gap-4">
                                    <motion.span 
                                        className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-xl"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        🚀
                                    </motion.span>
                                    Let's Build Something Great
                                </h3>
                                <p className="text-gray-200 mb-8 leading-relaxed text-lg">
                                    I'm always excited to work on new projects and collaborate with talented people. 
                                    Whether you have a specific project in mind or just want to connect, I'd love to hear from you!
                                </p>
                                
                                <div className="space-y-6">
                                    {contactMethods.map((method, index) => (
                                        <motion.a
                                            key={index}
                                            href={method.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center gap-5 p-6 bg-gradient-to-r ${method.color} rounded-xl text-white hover:shadow-xl transition-all duration-300 group`}
                                            whileHover={{ scale: 1.03, y: -3 }}
                                            whileTap={{ scale: 0.98 }}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <span className="text-3xl">{method.icon}</span>
                                            <div className="flex-1">
                                                <div className="font-semibold text-lg">{method.label}</div>
                                                <div className="text-sm opacity-90 group-hover:opacity-100 transition-opacity">
                                                    {method.value}
                                                </div>
                                            </div>
                                            <motion.svg 
                                                className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-all" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                                whileHover={{ x: 5 }}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </motion.svg>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            {/* Enhanced Quick Stats */}
                            <motion.div
                                className="bg-gray-800/40 backdrop-blur-xl border border-gray-600/50 rounded-3xl p-10 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500"
                                whileHover={{ borderColor: "rgba(34, 211, 238, 0.5)", y: -5 }}
                            >
                                <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                                    <span className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                                        💡
                                    </span>
                                    Quick Facts
                                </h3>
                                <div className="space-y-4 text-gray-200">
                                    <motion.div className="flex justify-between items-center p-3 rounded-lg bg-gray-700/30" whileHover={{ scale: 1.02 }}>
                                        <span className="flex items-center gap-2">🎓 Education:</span>
                                        <span className="font-semibold">B.Tech CS @ VIT</span>
                                    </motion.div>
                                    <motion.div className="flex justify-between items-center p-3 rounded-lg bg-gray-700/30" whileHover={{ scale: 1.02 }}>
                                        <span className="flex items-center gap-2">💼 Available for:</span>
                                        <span className="font-semibold">Internships & Projects</span>
                                    </motion.div>
                                    <motion.div className="flex justify-between items-center p-3 rounded-lg bg-gray-700/30" whileHover={{ scale: 1.02 }}>
                                        <span className="flex items-center gap-2">⚡ Response Time:</span>
                                        <span className="font-semibold">Within 24 hours</span>
                                    </motion.div>
                                    <motion.div className="flex justify-between items-center p-3 rounded-lg bg-gray-700/30" whileHover={{ scale: 1.02 }}>
                                        <span className="flex items-center gap-2">🌍 Location:</span>
                                        <span className="font-semibold">India (Remote Available)</span>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};