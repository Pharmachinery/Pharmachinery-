import React from 'react';
import aboutvision from '../assets/aboutvision.png';
import aboutmission from '../assets/aboutmission.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Aboutmv = () => {
  return (
    <section className='bg-[#f5f5f5] px-4 sm:px-48 p-12 lg:flex lg:flex-col lg:flex-wrap lg:gap-8 lg:flex-grow lg:justify-center lg:items-center'>
        
      <div className="about-mission lg:flex gap-4">
            <div className="sq-info py-4 p-8  lg:w-[400px] lg:h-[350px] bg-white lg:order-2">
                <p className='text-red-600 font-semibold text-sm py-2'>Mission</p>
                <h1 className='text-3xl	font-bold py-2'>our Mission is your success</h1>
                <p className='text-base'>Base on the concept of “Credit Based, Service Oriented”, Pharmachinery exerts our value of quality and services into all divisions, whatever in technical consulting, exploitation, design, solution proposal, production, commissioning & training, and after marketing services.</p>
            </div>
            <div className="sq-img py-4 lg:py-0 lg:w-[400px] lg:h-[350px] lg:order-1">
                <img src={aboutvision} alt="aboutvision" className='w-full h-full' />
            </div>
      </div>
      <div className="about-vision lg:flex  gap-4">
        <div className="sq-info py-4 p-8  lg:w-[400px] lg:h-[350px] bg-white lg:order-3">
                <p className='text-red-600 font-semibold text-sm py-2'>Vision</p>
                <h1 className='text-3xl	font-bold py-2'>Our Company Vision</h1>
                <p className='text-base pb-2'>Enterprise in the Pharmaceutical industry through customer satisfaction with:</p>
                <p className='py-2 text-[13px] font-bold'><FontAwesomeIcon className='text-red-600 pr-1' icon={faCheck} /> High-Quality Products and customer service</p>
                <p className='py-2 text-[13px] font-bold'><FontAwesomeIcon className='text-red-600 pr-1' icon={faCheck} /> Challenge, Innovation, Trust, Worldwide.</p>
                <p className='py-2 text-[13px] font-bold'><FontAwesomeIcon className='text-red-600 pr-1' icon={faCheck} /> Striving to offer best services to all esteem</p>
            </div>
            <div className="sq-img py-4 lg:py-0  lg:w-[400px] lg:h-[350px] lg:order-4">
                <img src={aboutmission} alt="aboutmission" className='w-full h-full' />
            </div>
      </div>
      
    </section>
  )
}

export default Aboutmv;