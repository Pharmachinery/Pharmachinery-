import React from 'react';
import PageHead from '../components/PageHead';
import services from '../assets/services.png';
import Testimonials from '../components/Testimonials';
import ServicesSection from '../components/ServicesSection';
import { Helmet } from 'react-helmet-async';

// import { useInView } from "react-intersection-observer";
const Services = () => {
  // const { ref: myRef, inView: myElementIsVisible } = useInView(); 

  return (
    <div>
        <Helmet>
        <title>Pharmachinery Services</title>
        <meta name="description" content="Pharmachinery group provides integrated pharmaceutical and engineering solutions in Egypt and MENA region. Pharmachinery is your premier pharmaceutical machinery and Cleanroom solutions provider." />
      </Helmet>
      <PageHead img={services} />
      <ServicesSection className="animate__animated animate__bounce" />
      <Testimonials />
    </div>
  )
}

export default Services