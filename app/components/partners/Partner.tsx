"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Partner = () => {
    const [isInView, setIsInView] = useState(false);
    const partnerRef = useRef(null);

    const spring = {
        type: "spring",
        damping: 25,
        stiffness: 100,
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                } else {
                    setIsInView(false);
                }
            },
            {
                threshold: 0.3,
            }
        );

        if (partnerRef.current) {
            observer.observe(partnerRef.current);
        }

        return () => {
            if (partnerRef.current) {
                observer.unobserve(partnerRef.current);
            }
        };
    }, []);

    return (
        <div
            id="partner-section"
            ref={partnerRef}
            className="bg-white p-6 md:p-12 flex flex-col items-center"
        >
            {/* Animated Title */}
            <motion.div
                className="text-center text-4xl md:text-5xl font-bold text-red-600 mb-6"
                initial={{ opacity: 0, y: -30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                transition={spring}
            >
                THE CHAWALA'S TANDOORI JUNCTION
            </motion.div>

            {/* Animated Subtitle */}
            <motion.div
                className="text-center text-xl md:text-2xl text-yellow-500 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ ...spring, delay: 0.3 }}
            >
                ALSO ORDER ONLINE FROM ZOMATO AND SWIGGY
            </motion.div>

            {/* Animated Logos */}
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 w-full">
                <motion.div
                    className="flex justify-center items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                >
                    <img
                        src="/zom-002.png"
                        alt="Zomato"
                        className="object-contain w-40 md:w-72" // Responsive width
                    />
                </motion.div>

                <motion.div
                    className="flex justify-center items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                >
                    <img
                        src="/swg-002.png"
                        alt="Swiggy"
                        className="object-contain w-40 md:w-72" // Responsive width
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Partner;
