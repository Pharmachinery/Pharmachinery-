import React from "react";
import "swiper/css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import Swiper styles
import { Link } from "react-router-dom";
import home1 from "../assets/home1.png";
import home2 from "../assets/home2.png";
import home3 from "../assets/home3.png";
import { useInView } from "react-intersection-observer";



const HeroSlider = () => {
  SwiperCore.use([Pagination, Navigation, Autoplay]);
  const { ref: myRef, inView: myElementIsVisible } = useInView();

  return (
    <div ref={myRef} className="hero-container relative flex justify-center items-center">
      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination
      navigation
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      className="w-[100%] h-[90vh] "
    >
      <SwiperSlide className="w-full h-full">
      <img src={home1} alt="hero" className="w-full h-full text-white flex justify-center items-center" />
      </SwiperSlide>
      <SwiperSlide className="w-full h-full">
      <img src={home2} alt="hero" className="w-full h-full text-white flex justify-center items-center" />
      </SwiperSlide>
      <SwiperSlide className="w-full h-full">
      <img src={home3} alt="hero" className="w-full h-full text-white flex justify-center items-center" />
      </SwiperSlide>

    </Swiper>

    <div className={`hero-info ${myElementIsVisible ? `animate__animated animate__backInDown` : ``} text-center text-white absolute h-[100%] w-[50%] flex flex-col items-center justify-center z-20 top-0`}>
        <p className="text-xs text-[#f5f5f5] p-1">Pharmaceutical and Engineering Consultancy</p>
        <h1 className="text-4xl text-[#f5f5f5] font-extrabold p-1 ">INTRODUCING <br /> PHARMACHINERY</h1>
        <p className="font-medium text-white  p-1">We’re eager to map out the needs of your business, and provide the necessary tools to achieve a successful future</p>
        <Link className="p-2" to="/contact">
          <button
            type="button"
            className="inline-block  bg-red-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
                Get In Touch
          </button> 
        </Link>
    </div>
    </div>
  )
}

export default HeroSlider;