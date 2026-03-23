import React from 'react';
import jrpacking from '../assets/jrpacking.png';
import Aligned from '../assets/Aligned.png';
import linelink from '../assets/linsen-group.webp';




import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from "swiper/core";
import 'swiper/css';




// Import Swiper React components





// Import Swiper styles

const PartnersHome = () => {
  SwiperCore.use([ Navigation ]);


  return (
    <div className="partners-section p-8 bg-[#f5f5f5]">
      <div className="container mx-auto">
        <div className="section-head-info flex flex-col items-center justify-center text-center">
          <p className="text-red-600 font-bold py-1">Our Partners</p>
          <h1 className="text-2xl	font-bold dark py-1">
          Partners that growing success together with us </h1>
        </div>
        <div className='p-8 ml-12 lg:ml-24'>
              <Swiper
                  slidesPerView={3}
                  spaceBetween={50}
                  breakpoints={{
                    375: {
                      width: 375,
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 25,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 30,
                    },
                  }}
                  // infinite={true}
                  loop={true}

                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                  className='flex items-center justify-center'
                >
                
                <SwiperSlide><div className='lg:h-[200px] lg:flex lg:items-center lg:justify-center'><img  className='h-[100px] w-[210px]' src={jrpacking} alt="inotek" /></div></SwiperSlide>
                <SwiperSlide><div className='lg:h-[200px] lg:flex lg:items-center lg:justify-center'><img className='h-[100px] w-[210px]' src={Aligned} alt="inotek" /></div></SwiperSlide>
                <SwiperSlide><div className='lg:h-[200px] lg:flex lg:items-center lg:justify-center'><img  className='h-[100px] w-[210px]' src={linelink} alt="inotek" /></div></SwiperSlide>
                </Swiper>
         </div>
      </div>
   </div>
  )
}

export default PartnersHome