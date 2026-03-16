import React, { useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, EffectCoverflow } from "swiper/core";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { bov1, licaps, odf6 } from "../assets";
import { HashLink } from 'react-router-hash-link';
import unidose from "../assets/innova.png";

// data
const images = [
  {
    title: "ODF Technology",
    img: odf6,
    route: "/innovative#odf",
  },
  {
    title: "Uni Dose Machine",
    img: unidose,
    route: "/innovative#unidose",
  },
  {
    title: "Liquid Capsules Machine",
    img: licaps,
    route: "/innovative#licaps",
  },
  {
    title: "BOV Technology",
    img: bov1,
    route: "/innovative#bov1",
  },
];


const TopMachinesHome = () => {
  SwiperCore.use([Navigation, Autoplay, EffectCoverflow]);
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <section className="top-machines p-8 bg-white container mx-auto">
      <div className="section-head-info flex flex-col items-center justify-center text-center">
        <p className="text-red-600 font-bold py-1">Innovative Machines</p>
        <h1 className="text-2xl	font-bold dark py-1">
          Our Top Pharmaceutical Machines That Made Specially For You
        </h1>
      </div>

      <Swiper
        className="w-full h-full flex items-center justify-center"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        infinite="true"
        effect="coverflow"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {images.map(({ title, img }, index) => 
           (
            <SwiperSlide key={index} className="w-3/4 lg:w-1/2  lg:h-1/2 ">
              <div className="w-full h-full flex justify-center items-center">
                <img loading="lazy" src={img} alt={title} className="w-1/2" />
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
{images.map(({ route, title }, index) => {
  if (activeIndex === index) {
    return (
      <div className="m-2 text-center" key={index}>
        <p className="text-black font-bold py-1 text-2xl">{title}</p>
        <HashLink smooth to={route}>
          <button className="inline-block p-2 m-2 bg-red-600 w-[150px] font-bold text-xs">
            {title}
          </button>
        </HashLink>
      </div>
    );
  }

  return null;
})}
    </section>
  );
};

export default TopMachinesHome;
