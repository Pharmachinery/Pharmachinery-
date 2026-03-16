import React from 'react';
import aboutImage from '../assets/about-1.png';
import { useInView } from "react-intersection-observer";

const Aboutfirst = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView(); 

  return (
    <section ref={myRef} className='container mx-auto p-16 lg:flex lg:justify-between lg:text-left text-center'>
        <div className="about-info py-4 lg:py-0 project-info lg:w-[50%]">
            <h3 className='text-xl text-red-600 font-bold py-2'>About us</h3>
            <h1 className='font-bold text-3xl py-2'>About our company</h1>
            <p className='py-2'>We are an engineering and pharmaceutical consulting company. We guarantee to answer all your questions regarding the pharmaceutical industry, pharmaceutical and cosmetic products, construction and installation work, maintenance work, and post-installation services. The highest productivity, the best product. Pharmachinery was founded in 2018 with accumulated expertise experience cover 15 years.
Our experience ﬁelds are from our name: </p>
            <p className='py-2'>Pharma or pharmaceutical where our ﬁeld is Pharmaceutical industries in almost all dosage forms manufacturing and development besides its utilities. Machinery, Complete background about machine operation, technology updates, and maintenance</p>
        </div>
        <div className="image-wrapper px-8 relative">
            <img className={`w-[100%] lg:w-[500px] lg:h-[500px] ${myElementIsVisible ? 'animate__animated animate__backInRight' : ''}`} src={aboutImage} alt="aboutImage" />
            <div className='absolute right-0 top-8 border-8 border-red-600 w-[80%] lg:h-[500px] h-[100%] -z-10'></div>
        </div>
    </section>
  )
}

export default Aboutfirst