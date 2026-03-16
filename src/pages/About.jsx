import React from 'react';
import PageHead from '../components/PageHead';
import about from '../assets/about.png';
import CeoMessage from '../components/CeoMessage';
import Aboutfirst from '../components/Aboutfirst';
import Aboutmv from '../components/Aboutmv';
import { Helmet } from 'react-helmet-async';


const About = () => {
  return (
    <>
      <Helmet>
        <title>About Pharmachinery</title>
        <meta name="description" content="Pharmachinery group provides integrated pharmaceutical and engineering solutions in Egypt and MENA region. Pharmachinery is your premier pharmaceutical machinery and Cleanroom solutions provider." />
      </Helmet>
      <PageHead img={about} />
      <Aboutfirst />
      <Aboutmv />
      <CeoMessage bg="#FFFFFF" />
    </>
  )
}

export default About;