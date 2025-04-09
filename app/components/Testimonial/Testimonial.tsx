"use client"; // If using Next.js, else remove this

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";

const testimonials = [
    {
        name: "Rajesh Nagar",
        review:
            "Chawala Tandoori offers an unforgettable dining experience with amazing flavors and exceptional customer service",
        image: "/T-1.png",
    },
    {
        name: "Neha Kashyap",
        review:
            "The best tandoori dishes I've ever had—authentic flavors and top-notch quality at every bite!",
        image: "/T-2.png",
    },
    {
        name: "Mohan Pratap",
        review:
            "A must-visit! Their food is flavorful, and the ambiance is perfect for a great meal.",
        image: "/T-3.png",
    },
    {
        name: "Gurpreet Singh",
        review:
            "Every meal at Chawala Tandoori is a delight—rich flavors and friendly service every time!",
        image: "/T-4.png",
    },
];

const TestimonialCarousel: React.FC = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4">
                <motion.h2
                    className="text-center text-3xl sm:text-4xl font-bold text-gray-800 mb-8"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    What Our Customers Say
                </motion.h2>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 2 },
                    }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    className="pb-8"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-20 h-20 rounded-full mb-4 object-cover shadow-md"
                                />
                                <p className="text-gray-600 text-sm sm:text-base">{testimonial.review}</p>
                                <h4 className="mt-4 text-lg font-semibold text-gray-800">
                                    {testimonial.name}
                                </h4>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TestimonialCarousel;
