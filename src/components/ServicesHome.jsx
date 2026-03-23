import React  from "react";
import odf5 from "../assets/odf5.png";
import service2 from "../assets/service2.jpg";
import project2026 from "../assets/project2026.png";
import ServiceCard from "./ServiceCard";
import { useInView } from "react-intersection-observer";

const ServicesHome = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  
  return (
    <div ref={myRef} className="services-section px-2 container mx-auto">
      <div className="section-head-info flex flex-col items-center justify-center text-center p-8">
        <p className="text-red-600 font-bold py-1">Our Services</p>
        <h1 className="text-2xl	font-bold dark py-1">What We Do?</h1>
        <p className="lg:w-[50%] py-1">
        We are a complete solution for establishing of pharmaceutical, nutraceutical and cosmetics factories

        </p>
      </div>
      <div className={`services-cards ${myElementIsVisible ? `animate__animated animate__fadeInDown` : ``} p-4 flex flex-col justify-around items-center lg:flex-row lg:flex lg:justify-around`}>
        <ServiceCard
          to='/odf'
          img={odf5}
          title="ODF Technology"
          
        />
        <ServiceCard
          to='/services'
          img={service2}
          title="Services"
         
        />
        <ServiceCard
          to='/projects'
          img={project2026}
          title="Projects"
          
        />
      </div>
    </div>
  );
};

export default ServicesHome;
