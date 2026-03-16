

import React from 'react';
import PageHead from '../components/PageHead';
import partnersImg from '../assets/partners.png';
import Partner from '../components/Partner';
import Aligned from '../assets/Aligned.png';
import LineLink from '../assets/linsen-group.webp';
import JrPacking from '../assets/jrpacking.png';
import { Helmet } from 'react-helmet-async';
import { v4 as uuidv4 } from 'uuid';

const Partners = () => {
  const partners = [
    {
      title: 'Aligned',
      img: Aligned,
      description:
        'Aligned Machinery was founded in 2004 in Shanghai and now operates with five subsidiaries and factories. It is a technology-driven company specializing in R&D, manufacturing, marketing, and services related to pharmaceutical and packaging machinery. The company focuses on complete production lines for solid dosage forms (such as tablets and capsules), Oral Dispersible Film (ODF) solutions, and comprehensive systems for oral dose processing. Innovation has always been the key to Aligned’s continuous growth. Since its establishment, the company has been committed to providing one-stop solutions for pharma equipment and engineering projects. By following the EPCM project model, Aligned has successfully delivered complete solid dose and oral liquid production lines in multiple global markets.',
      link: 'https://www.aligned.com.cn/',
      reverse: false,
    },
    {
      title: 'Line link',
      img: LineLink,
      description:
        'Line-Link is a global leader in cleanroom engineering, with over 20 years of experience and 12 manufacturing sites worldwide. We provide turnkey ISO Class 5–8 cleanroom solutions for the pharmaceutical, biotech, semiconductor, healthcare, cosmetics, and food industries. All key components—cleanroom panels, HEPA filters, laminar flow units, air showers, lab furniture, and purification equipment—are produced in-house, ensuring high quality, fast delivery, and cost efficiency.',
      link: 'https://www.linelink-linsen.com/',
      reverse: true,
    },
    {
      title: 'JR Packing',
      img: JrPacking,
      description:
        'JRPACKING founded in 1995, located in Wuhan, China. We specialize in design and manufacturing Aerosol Filling Machine. Aerosol filling machines are widely used in the pharmaceutical, chemical, foodstuff, agricultural chemical and cosmetic industries. We offer solutions that match exactly the customers’ needs during the various links of filling equipment. Relying on science and technology for development, and providing customers with high-tech product is our constant pursuit.',
      link: 'https://jrpacking.com/',
      reverse: false,
    },
    
  ];

  return (
    <div className="partners">
      <Helmet>
        <title>Pharmachinery Partners</title>
        <meta
          name="description"
          content="Pharmachinery group provides integrated pharmaceutical and engineering solutions in Egypt and MENA region. Pharmachinery is your premier pharmaceutical machinery and Cleanroom solutions provider."
        />
      </Helmet>

      <PageHead img={partnersImg} />

      <div className="section-head-info flex flex-col items-center justify-center text-center p-3 py-8">
        <p className="text-red-600 font-bold py-1">Our Partners</p>
        <h1 className="text-2xl font-bold py-1">
          Partners That Growing Success <br /> Together With Us
        </h1>
      </div>

      <div className="p-8">
        {partners.map((partner) => (
          <Partner
            key={uuidv4()}
            link={partner.link}
            description={partner.description}
            reverse={partner.reverse}
            title={partner.title}
            img={partner.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
