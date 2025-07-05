import { useState } from 'react';

export const ProfileImage = ({ src, alt, className = "", size = "large" }) => {
    const [imageError, setImageError] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const sizeClasses = {
        small: "w-32 h-32",
        medium: "w-48 h-48", 
        large: "w-64 h-64 md:w-80 md:h-80",
        xlarge: "w-80 h-80 md:w-96 md:h-96"
    };

    const handleImageError = () => {
        setImageError(true);
    };

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const ProfileFallback = () => (
        <div className={`${sizeClasses[size]} ${className} bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-4xl md:text-6xl shadow-xl`}>
            PJ
        </div>
    );

    if (imageError) {
        return <ProfileFallback />;
    }

    return (
        <div className="relative">
            <div className={`relative ${sizeClasses[size]} ${className} rounded-full overflow-hidden border-4 border-white/20 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 bg-gradient-to-br from-blue-500/10 to-purple-500/10`}>
                {/* Loading placeholder */}
                {!imageLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
                    </div>
                )}

                {/* Actual image */}
                <img
                    src={src}
                    alt={alt}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                        imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                    onError={handleImageError}
                    onLoad={handleImageLoad}
                    style={{ objectPosition: 'center center' }}
                    loading="eager"
                />

                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-full"></div>
                
                {/* Optional glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
        </div>
    );
};