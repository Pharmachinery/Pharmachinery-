import React from 'react';

import service1 from '../assets/service1.jpg';
import service2 from '../assets/service2.jpg';
import service3 from '../assets/service3.png';


const ServicesSection = () => {
  return (
    <section className='bg-[#f5f5f5] p-12 lg:flex lg:flex-col lg:flex-wrap lg:gap-8 lg:flex-grow lg:justify-center lg:items-center'>
         <div className="section-head-info container mx-auto flex flex-col items-center justify-center text-center p-8">
            <p className="text-red-600 font-bold py-1">Our Services</p>
            <h1 className="text-2xl	font-bold dark py-1">We provide your company the best service in the industry</h1>
        </div>
        <div className="services flex flex-col gap-4">
            <div className="single-service flex flex-col lg:flex-row gap-4">
                    <div className="sq-info py-4 p-8 lg:order-1 lg:w-[400px] lg:h-[350px] bg-white  flex flex-col  justify-center">
                        <h1 className='text-3xl	font-bold py-2' id='turnkey'>Turnkey</h1>
                        <p className='text-base'>Pharmachinery provides key services to align with effective GMP framework and pharmaceutical project management. We are turnkey solutions provider with an engineering consultancy at its core of services which provides sequenced & paced execution with market proven solutions that transform your facility. Client needs are understood and there is clear business strategy to achieve end result.</p>
                    </div>  
                    <div className="sq-img py-4 lg:py-0 lg:order-2 lg:w-[400px] lg:h-[350px] ">
                        <img src={service1} alt="aboutmission" className='w-full h-full' />
                    </div>
            </div>
           
            <div className="single-service flex flex-col lg:flex-row gap-4">
                    <div className="sq-info py-4 p-8 lg:order-2 lg:w-[400px] lg:h-[350px] bg-white  flex flex-col  justify-center">
                        <h1 className='text-3xl	font-bold py-2' id='turnkey'>Pharmaceutical and Engineering Consultations</h1>
                        <p className='text-base'>A.	Fesability study</p>
                        <p className='text-base'>B.	Cost estimation</p>
                        <p className='text-base'>C.	Schadualing</p>
                        <p className='text-base'>D.	Consepual design</p>
                        <p className='text-base'>E.	Detaled Design</p>
                        <p className='text-base'>F.	URS</p>
                        <p className='text-base'>G.	Project progress reviews</p>
                        <p className='text-base'>H.	Qualifications</p>
                    </div>  
                    <div className="sq-img py-4 lg:py-0 lg:order-1 lg:w-[400px] lg:h-[350px] ">
                        <img src={service2} alt="aboutmission" className='w-full h-full' />
                    </div>
            </div>
           
            <div className="single-service flex flex-col lg:flex-row gap-4">
                    <div className="sq-info py-4 p-8 lg:order-1 lg:w-[400px] lg:h-[350px] bg-white  flex flex-col  justify-center">
                        <h1 className='text-3xl	font-bold py-2' id='turnkey'>Pharmaceutical Machinery</h1>
                        <p className='text-base'>Pharmachinery provides key services to align with effective GMP framework and pharmaceutical project management. We are turnkey solutions provider with an engineering consultancy at its core of services which provides sequenced & paced execution with market proven solutions that transform your facility.</p>
                    </div>
                    <div className="sq-img py-4 lg:py-0 lg:order-2 lg:w-[400px] lg:h-[350px] ">
                        <img src={service3} alt="aboutmission" className='w-full h-full' />
                    </div>
            </div>
        </div>
        
    </section>  
  )
}

export default ServicesSection;