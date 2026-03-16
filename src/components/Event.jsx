import React from 'react';
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination,  Autoplay } from "swiper/core";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import { v4 as uuidv4 } from 'uuid';

const Event = ({event}) => {
    SwiperCore.use([Pagination, Autoplay]);

  return (
    <section className='lg:px-24 lg:p-12 text-center lg:text-left container mx-auto overflow-hidden pb-24'>
        <div className='lg:flex lg:items-center lg:justify-center p-4 border -2 border-red-600 rounded-xl p-6'>
        <div className='machine-info '>
            <h1 className='font-bold text-3xl py-2 text-red-600 '>{event.title}</h1>
            <p className='py-2'>{event.description}</p>
            <p className='p-2 '><FontAwesomeIcon className='text-red-600 text-2xl pr-2' icon={faLocationDot} /> {event.location}</p>
            <p className='p-2'><FontAwesomeIcon className='text-red-600 text-2xl pr-2' icon={faCalendarDays} /> {event.date} </p>
        </div>
        <div className="slider w-full lg:w-[540px]">
            <Swiper
            effect={"cards"}
            modules={[EffectCards]}

                spaceBetween={50}
                slidesPerView={1}
                pagination
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                className={event.title === "Pharmaconex 2021"  ? 'w-[80%]' : 'w-[50%]' && event.title === "CPHI China"  ? 'w-[80%]' : 'w-[50%]' }
            >
                
                {event.images.map((image) => (
                    
                    <SwiperSlide key={uuidv4()}>
                        <img src={image} alt="Achema" className='w-full' loading='lazy' />
                    </SwiperSlide>
                   
                ))}
                  
            </Swiper>
        </div>

     

        </div>
    </section>
  )
}

export default Event