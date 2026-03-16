import React from 'react';
import evapharma from "../assets/evapharma.png";
import pharco from "../assets/pharco.png";
import macro from "../assets/macro.png";
import ubm from "../assets/ubm.png";
import nerhadou from "../assets/NERHADOW.png";
import rafada from '../assets/rafada.png';
import kpi from "../assets/KPI.png";
import alexco from "../assets/alexandria.png";
import mevac from "../assets/mevac.png";
import eipico from "../assets/EIPICO.png";
import egcpharma from "../assets/ECC.png";
import edpharma from "../assets/ED PHARMA.png";
import multipharma from "../assets/MULTICARE.png";
import spi from "../assets/SPI.png";
import egpi from "../assets/EGPI.png";
import alrazi from "../assets/AL RAZI.png"
import biovax from "../assets/BIOMED.png"
import organicpharma from "../assets/ORGANIC.png"
import dox from "../assets/DOX.png";
import lifesaver from "../assets/LIFE SAVER.png";
import globalnapi from "../assets/GLOBAL NAPI.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from "swiper/core";
import {v4 as uuidv4} from 'uuid';



import 'swiper/css';
const ourClients = [
  {
    id:uuidv4(),
    companyName:'evapharma',
    companyLogo:evapharma
  },
  {
    id:uuidv4(),
    companyName:'pharco',
    companyLogo:pharco
  },
  {
    id:uuidv4(),
    companyName:'macro',
    companyLogo:macro
  },
  {
    id:uuidv4(),
    companyName:'ubm',
    companyLogo:ubm
  },
  {
    id:uuidv4(),
    companyName:'nerhadou',
    companyLogo:nerhadou
  },
  {
    id:uuidv4(),
    companyName:'Rafada2rs',
    companyLogo:rafada
  },
  {
    id:uuidv4(),
    companyName:'karman',
    companyLogo:kpi
  },
  {
    id:uuidv4(),
    companyName:'alexco',
    companyLogo:alexco
  },
  {
    id:uuidv4(),
    companyName:'mevac',
    companyLogo:mevac
  },
  {
    id:uuidv4(),
    companyName:'egcpharma',
    companyLogo: egcpharma
  },
  {
    id:uuidv4(),
    companyName:'spi',
    companyLogo: spi
  },
  {
    id:uuidv4(),
    companyName:'edpharma',
    companyLogo: edpharma
  },
  {
    id:uuidv4(),
    companyName:'multipharma',
    companyLogo: multipharma
  },
  {
    id:uuidv4(),
    companyName:'egpi',
    companyLogo: egpi
  },
  {
    id:uuidv4(),
    companyName:'alrazi',
    companyLogo: alrazi
  },
  {
    id:uuidv4(),
    companyName:'biovax',
    companyLogo: biovax
  },
  {
    id:uuidv4(),
    companyName:'organicpharma',
    companyLogo: organicpharma
  },
  {
    id:uuidv4(),
    companyName:'dox',
    companyLogo: dox
  },
  {
    id:uuidv4(),
    companyName:'lifesaver',
    companyLogo: lifesaver
  },
  {
    id:uuidv4(),
    companyName:'globalnapi',
    companyLogo: globalnapi
  },
  {
    id:uuidv4(),
    companyName:'eipico',
    companyLogo: eipico
  },
]

const ClientsHome = () => {
  SwiperCore.use([ Navigation ]);

  return (
   <div className="clients-section  bg-[#f5f5f5] p-8">
      <div className="container mx-auto ">
          <div className="section-head-info flex flex-col items-center justify-center text-center">
            <p className="text-red-600 font-bold py-1">Our Clients</p>
            <h1 className="text-2xl	font-bold dark py-1">
                Join our our clients that trusted us</h1>
          </div>
          <div className='p-8 ml-12 lg:ml-24'>
              <Swiper
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
                  infinite="true"
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                >
                <div className='flex items-center justify-center'>
                  {ourClients.map((client) => (     

                                    <SwiperSlide key={client.id}><div className='lg:h-[200px] lg:flex lg:items-center lg:justify-center'><img loading='lazy'  src={client.companyLogo} alt={client.companyName} /></div></SwiperSlide>
                  ))}
                </div>
                </Swiper>
         </div>
      </div>
    
  
   </div>
  )
}

export default ClientsHome;