"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0); // Store last scroll position persistently

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollThreshold = 30; // Adjusted for small scrolls

            if (Math.abs(currentScrollY - lastScrollY.current) < scrollThreshold) {
                return; // Ignore small scroll variations
            }

            if (currentScrollY > lastScrollY.current) {
                // Hide navbar when scrolling down
                setIsVisible(false);
            } else {
                // Show navbar when scrolling up
                setIsVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`text-white py-3 px-4 md:px-16 bg-transparent shadow-xl fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <div className="flex justify-between items-center">
                <Image src="/logo.png" alt="Logo" width={150} height={150} priority />

                {/* Navigation Links for Medium and Larger Screens */}
                <div className="hidden md:flex space-x-8">
                    <Link href="/" className="px-2 py-2 font-bold text-white gradient-border-bottom">
                        HOME
                    </Link>
                    <Link href="/#dishslider" className="px-2 py-2 font-bold text-white gradient-border-bottom">
                        ABOUT
                    </Link>
                    <Link href="/menu" className="px-2 py-2 font-bold text-white gradient-border-bottom">
                        MENU
                    </Link>
                    <Link href="/#gallery" className="px-2 py-2 font-bold text-white gradient-border-bottom">
                        GALLERY
                    </Link>
                    <Link href="/#contact" className="px-2 py-2 font-bold text-white gradient-border-bottom">
                        CONTACT
                    </Link>
                </div>

                {/* Order Now Button */}
                <Link
                    href="https://wa.me/9319313831?text=Hello,%20I%20would%20like%20to%20place%20an%20order"
                    className="bg-textColRed hover:bg-red-700 font-bold text-white px-10 py-3 rounded-lg hidden md:block"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Order Now
                </Link>

                {/* Hamburger / Close Button (Single Button) */}
                <motion.button
                    onClick={toggleMenu}
                    className="md:hidden text-textColRed text-3xl relative z-50"
                    animate={{
                        rotate: isMenuOpen ? 180 : 0,
                        scale: isMenuOpen ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                >
                    {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu className="scale-y-75" />}
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ y: "-100%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        exit={{ y: "-100%", opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed top-0 left-0 w-full h-screen bg-yellow-300/90 flex flex-col shadow-lg z-40"
                    >
                        {/* Mobile Links */}
                        <div className="flex flex-col items-center space-y-4 mt-28">
                            <Link
                                href="/"
                                className="px-20 py-3 font-bold text-textColRed text-lg gradient-border"
                                onClick={toggleMenu}
                            >
                                HOME
                            </Link>
                            <Link
                                href="/#dishslider"
                                className="px-20 py-3 font-bold text-textColRed text-lg gradient-border"
                                onClick={toggleMenu}
                            >
                                ABOUT
                            </Link>
                            <Link
                                href="/menu"
                                className="px-20 py-3 font-bold text-textColRed text-lg gradient-border"
                                onClick={toggleMenu}
                            >
                                MENU
                            </Link>
                            <Link
                                href="/#gallery"
                                className="px-20 py-3 font-bold text-textColRed text-lg gradient-border"
                                onClick={toggleMenu}
                            >
                                GALLERY
                            </Link>
                            <Link
                                href="/#contact"
                                className="px-20 py-3 font-bold text-textColRed text-lg gradient-border"
                                onClick={toggleMenu}
                            >
                                CONTACT
                            </Link>

                            <Link
                                href="https://wa.me/9319313831?text=Hello,%20I%20would%20like%20to%20place%20an%20order"
                                className="mt-3 bg-textColRed font-bold text-white px-10 py-3 rounded-lg"
                                onClick={toggleMenu}
                            >
                                Order Now
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
