import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const LoadingScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const welcomeText = "Welcome to my Portfolio";

    useEffect(() => {
        // Faster typewriter effect
        let textIndex = 0;
        const textInterval = setInterval(() => {
            if (textIndex <= welcomeText.length) {
                setDisplayText(welcomeText.slice(0, textIndex));
                textIndex++;
            } else {
                clearInterval(textInterval);
            }
        }, 50); // Reduced from 80ms to 50ms

        // Faster progress animation
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    setTimeout(() => onComplete(), 300); // Reduced from 500ms
                    return 100;
                }
                return prev + 5; // Increased from 2 to 5 for faster progress
            });
        }, 30); // Reduced from 50ms to 30ms

        return () => {
            clearInterval(textInterval);
            clearInterval(progressInterval);
        };
    }, [onComplete]);

    return (
        <motion.div 
            className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center px-4"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="text-center space-y-6 max-w-md w-full">
                {/* Logo */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto"
                >
                    <span className="text-white font-bold text-xl">P</span>
                </motion.div>

                {/* Welcome Text */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="space-y-3"
                >
                    <h1 className="text-2xl md:text-3xl font-bold text-white">
                        {displayText}
                        <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="text-blue-400 ml-1"
                        >
                            |
                        </motion.span>
                    </h1>
                    <p className="text-gray-400 text-base md:text-lg">Loading amazing content...</p>
                </motion.div>

                {/* Progress Bar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="w-full mx-auto space-y-2"
                >
                    <div className="flex justify-between text-sm text-gray-400">
                        <span>Loading</span>
                        <span>{progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.2 }}
                        />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};