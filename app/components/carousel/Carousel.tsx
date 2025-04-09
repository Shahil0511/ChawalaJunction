"use client";

import { FC, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface VideoSectionProps {
    videoSrc: string; // Accept video source as a prop
}

const VideoSection: FC<VideoSectionProps> = ({ videoSrc }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null); // Type for the video reference
    const [currentTextIndex, setCurrentTextIndex] = useState(0); // To track the current text index

    const texts = [
        ["Fresh & Tasty", "Delicious Food"],
        ["Experience Luxury", "In Every Bite"],
        ["Authentic Flavors", "Made With Love"],
        ["Exquisite Dining", "Savor Every Moment"],
        ["The Perfect Meal", "For Every Occasion"],
    ];

    // Update the text every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 5000); // Change text every 5 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play(); // Start video when the component is mounted
        }
    }, []);

    // 🎭 Text Animation Variants
    const textVariants = (index: number) => ({
        initial: {
            x: index % 2 === 0 ? -50 : 50,
            y: index % 2 === 0 ? -50 : 50,
            opacity: 0,
        },
        animate: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeInOut",
            },
        },
        exit: {
            x: index % 2 === 0 ? 50 : -50,
            y: index % 2 === 0 ? 50 : -50,
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            },
        },
    });

    return (
        <div id="home" className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
            {/* 🎥 Video Layer */}
            <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                loop
                muted
                autoPlay
                playsInline
                draggable="false"
            >
                <source src={videoSrc} type="video/mp4" />
            </video>

            {/* 🔲 Overlay Layer */}
            <div className="absolute inset-0 z-20 bg-black/60" />

            {/* 📝 Content Layer */}
            <div className="absolute inset-0 z-30 flex flex-col justify-center items-center text-white px-4">
                <div className="max-w-4xl mx-auto space-y-6 text-center">
                    {/* Title Text */}
                    <motion.h2
                        key={`title-${currentTextIndex}`} // Ensure animation runs on text change
                        variants={textVariants(0)}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                    >
                        {texts[currentTextIndex][0]}
                    </motion.h2>
                    {/* Subtitle Text */}
                    <motion.p
                        key={`subtitle-${currentTextIndex}`} // Ensure animation runs on text change
                        variants={textVariants(1)}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="text-2xl md:text-3xl lg:text-4xl font-medium"
                    >
                        {texts[currentTextIndex][1]}
                    </motion.p>
                </div>
            </div>
        </div>
    );
};

export default VideoSection;
