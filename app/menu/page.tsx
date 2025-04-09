"use client";

import Navbar from "@/app/components/navbar/Navbar";
import Carousel from "../components/carousel/Carousel";
import React from "react";
import Footer from "../components/footer/Footer";

const Index = () => {
    return (
        <div className="relative flex flex-col min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Carousel Section */}
            <Carousel videoSrc="/chickenvedio.mp4" />

            {/* Images Grid - 3 images per row on desktop, 1 per row on mobile */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-5">
                {/* First Image */}
                <div className="w-full h-auto">
                    <img
                        src="/Menu1.jpg"
                        alt="Chawla's Menu"
                        className="w-full h-auto object-contain" // Ensures the image is not cut and retains aspect ratio
                    />
                </div>

                {/* Second Image */}
                <div className="w-full h-auto">
                    <img
                        src="/Menu2.jpg"
                        alt="Chawla's Menu"
                        className="w-full h-auto object-contain" // Ensures the image is not cut and retains aspect ratio
                    />
                </div>

                {/* Third Image */}
                <div className="w-full h-auto">
                    <img
                        src="/Menu3.jpg"
                        alt="Chawla's Menu"
                        className="w-full h-auto object-contain" // Ensures the image is not cut and retains aspect ratio
                    />
                </div>

                {/* Fourth Image */}
                <div className="w-full h-auto">
                    <img
                        src="/Menu4.jpg"
                        alt="Chawla's Menu"
                        className="w-full h-auto object-contain" // Ensures the image is not cut and retains aspect ratio
                    />
                </div>

                {/* Fifth Image */}
                <div className="w-full h-auto">
                    <img
                        src="/Menu5.jpg"
                        alt="Chawla's Menu"
                        className="w-full h-auto object-contain" // Ensures the image is not cut and retains aspect ratio
                    />
                </div>

                {/* Sixth Image */}
                <div className="w-full h-auto">
                    <img
                        src="/Menu6.jpg"
                        alt="Chawla's Menu"
                        className="w-full h-auto object-contain" // Ensures the image is not cut and retains aspect ratio
                    />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Index;
