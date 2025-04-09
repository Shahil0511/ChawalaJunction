"use client"

import Navbar from "./components/navbar/Navbar";
import Carousel from "./components/carousel/Carousel";
import Hero from "./components/hero/Hero";
import Image from "next/image";
import DishSlider from "./components/owlCarousel/DishSlider";
import Partner from "./components/partners/Partner";
import BestSeller from "./components/bestseller/BestSeller";
import Gallery from "./components/gallary/Gallary";
import Footer from "./components/footer/Footer";
import ContactUs from "./components/contactus/ContactUs";
import TestimonialCarousel from "./components/Testimonial/Testimonial";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Carousel videoSrc="/vedio01.mov" />
      <Hero />

      {/* DishSlider with black background */}
      <div className="bg-black py-4">
        <DishSlider />
      </div>

      <BestSeller />
      <Partner />
      <TestimonialCarousel />
      <Gallery />
      <ContactUs />
      <Footer />

      {/* Floating Buttons */}
      <div className="fixed top-28 right-3 flex flex-col z-40">
        {/* Swiggy Button */}
        <a
          href="https://www.swiggy.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14"
        >
          <Image
            src="/Swiggy.png"
            alt="Swiggy"
            width={60}
            height={60}
            quality={100}
            style={{ objectFit: "contain" }}
          />
        </a>

        {/* Zomato Button */}
        <a
          href="https://www.zomato.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14"
        >
          <Image
            src="/Zomato.png"
            alt="Zomato"
            width={60}
            height={60}
            quality={100}
          />
        </a>
      </div>


    </div>
  );
}