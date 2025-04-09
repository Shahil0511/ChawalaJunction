import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Dish {
    name: string;
    imgUrl: string;
}

const DishSlider: React.FC = () => {
    const dishes: Dish[] = [
        { name: 'Chicekn Malai Tikka', imgUrl: '/Malai Chicken tikka.png' },
        { name: 'Mutton Seekh Kebab', imgUrl: '/mutton seekh kebab.png' },
        { name: 'Tandoori Chicken', imgUrl: '/3.png' },
        { name: 'Paneer Tikka', imgUrl: '/stuffedPaneertikka.png' },
        { name: 'Veg Kebab', imgUrl: '/Veg Kebab.png' },
        { name: 'Chicken Tikka', imgUrl: '/chicken tikka.png' },
    ];

    return (
        <motion.div
            className="container mx-auto bg-black py-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            {/* Your h1 with motion animation */}
            <motion.h1
                className="text-yellow-400 text-2xl text-center font-bold pb-5"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
            >
                The Chawala Tandoori Junction
            </motion.h1>

            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                speed={2000}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}

            >
                {dishes.map((dish, index) => (
                    <SwiperSlide key={index}>
                        <motion.div
                            className="text-center p-4 mx-auto"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                            <motion.div className="flex justify-center mb-6">
                                <motion.img
                                    src={dish.imgUrl}
                                    alt={dish.name}
                                    className="w-1/2 rounded-full border-4 border-transparent bg-gradient-to-r from-red-500 to-yellow-500"
                                    whileHover={{ rotate: [0, 5, -5, 0] }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                />
                            </motion.div>
                            <div className="mt-3">
                                <h3 className="text-xl font-semibold mb-2 text-white">{dish.name}</h3>
                                <motion.hr
                                    className="mb-4 border-2 border-yellow-500"
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                />
                                <motion.a
                                    href="https://wa.me/9319313831"
                                    className="px-6 py-2 mb-4 bg-red-500 text-white rounded-lg hover:bg-yellow-500 hover:text-red-500 transition-all"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.08 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    Order Now
                                </motion.a>


                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </motion.div>
    );
};

export default DishSlider;
