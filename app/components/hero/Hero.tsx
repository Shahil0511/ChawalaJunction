"use client"
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
    const [isInView, setIsInView] = useState(false);
    const heroRef = useRef(null);

    // IntersectionObserver to trigger animation when 30% of the Hero section is in view
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
                threshold: 0.3, // 30% visibility
            }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current);
            }
        };
    }, []);

    return (
        <div
            id="dishslider"
            ref={heroRef}
            className="flex flex-col md:flex-row items-center justify-between px-6 py-12 md:px-12 md:py-20 overflow-hidden"
        >
            {/* Image Container */}
            <motion.div
                className="w-full md:w-1/2 mb-6 md:mb-0"
                initial={{ opacity: 0, x: -100 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
            >
                <Image
                    src="/3.png"
                    alt="Logo"
                    width={390}
                    height={390}
                    priority

                    className="w-auto mx-auto"
                />
            </motion.div>

            {/* Text Container */}
            <motion.div
                className="w-full md:w-1/2 text-center md:text-left"
                initial={{ opacity: 0, x: 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-gray-800">
                    The Chawla's Tandoori Junction
                </h1>
                <h2 className="text-xl md:text-3xl text-gray-400 mb-4">
                    Experience the finest dining
                </h2>

                <hr className="w-2/3  mx-end  mb-6 border-t-1 border-yellow-400 gradient-border2" />

                <p className="text-lg md:text-xl mb-6 opacity-90 text-gray-700">
                    Enjoy a variety of dishes, made from the freshest ingredients. Our chefs put love into every meal to ensure you have the best experience possible. Whether you’re here for a quick bite or a full dining experience, we’ve got you covered.
                </p>
                <motion.a
                    href="https://wa.me/9319313831"
                    className="bg-red-500 text-white py-3 px-8 rounded-lg hover:bg-red-600 transition duration-300 transform hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Order Now
                </motion.a>

            </motion.div>
        </div>
    );
};

export default Hero;
