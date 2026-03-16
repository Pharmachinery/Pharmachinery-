import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ServicesHome from '../components/ServicesHome';
import ClientsHome from '../components/ClientsHome';
import TopMachinesHome from '../components/TopMachinesHome';
import PartnersHome from '../components/PartnersHome';
import Testimonials from '../components/Testimonials';
import ContactHome from '../components/ContactHome';
import CeoMessage from '../components/CeoMessage';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 15% 20%, rgba(179,0,0,0.15), transparent 30%), radial-gradient(circle at 85% 30%, rgba(0,70,180,0.12), transparent 30%), linear-gradient(135deg,#f8fafc 0%,#ffffff 50%,#f3f6fb 100%)"
      }}
    >
    <>

<Helmet>
  <title>Pharmachinery</title>
  <meta name="description" content="Pharmachinery group provides integrated pharmaceutical and engineering solutions in Egypt and MENA region. Pharmachinery is your premier pharmaceutical machinery and Cleanroom solutions provider." />
</Helmet>
      <HeroSlider />
      <ServicesHome />
      <ClientsHome />
      <TopMachinesHome />
      <PartnersHome />
      <Testimonials />
      <CeoMessage bg="#f5f5f5" />
      <ContactHome /> 
    </>
    </div>
  )
}

export default Home