import { motion } from 'framer-motion';
import { ProfileImage } from '../ProfileImage';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleViewWork = () => {
        navigate('/projects');
    };

    const handleContact = () => {
        navigate('/contact');
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 py-4 min-h-screen">
                <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen gap-6 lg:gap-8">
                    
                    {/* Left side - Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-shrink-0 order-1 lg:order-1"
                    >
                        <ProfileImage
                            src="/myprofile.jpg"
                            alt="Puneet Janakiram"
                            size="large"
                            className="mx-auto"
                        />
                    </motion.div>

                    {/* Right side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex-1 text-center lg:text-left order-2 lg:order-2 max-w-2xl"
                    >
                        {/* Greeting */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="mb-3"
                        >
                            <span className="text-blue-400 text-lg md:text-xl font-medium">
                                👋 Hello, I'm
                            </span>
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                        >
                            Puneet Janakiram
                        </motion.h1>

                        {/* Role */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            className="mb-6"
                        >
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                    Full Stack Developer
                                </span>
                            </h2>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
                        >
                            Passionate about creating innovative solutions with code, I transform 
                            ideas into reality through clean, efficient, and scalable applications.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.4 }}
                            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6"
                        >
                            <button
                                onClick={handleViewWork}
                                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
                            >
                                View My Work
                            </button>
                            <button
                                onClick={handleContact}
                                className="px-8 py-4 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold rounded-lg transition-all duration-300 text-lg"
                            >
                                Get In Touch
                            </button>
                        </motion.div>

                        {/* Social Links - Removed */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.6 }}
                            className="flex justify-center lg:justify-start gap-4"
                        >
                            {/* Social icons removed as requested */}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Home;
