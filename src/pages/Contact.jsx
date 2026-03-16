import React from 'react';
import PageHead from '../components/PageHead';
import contact from '../assets/contact.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ContactForm';
import GoogleMap from '../components/GoogleMap';


const Contact = () => {
  return (
    <>
    <Helmet>
      <title>Contact Pharmachinery</title>
      <meta name="description" content="Contact Us" />
    </Helmet>
    <PageHead img={contact} />
    <section className="contact container mx-auto  p-8">
      <div className='form-map lg:flex lg:justify-around lg:items-center pb-8'>
          <ContactForm  />
          <GoogleMap />
      </div>
      <div className="contact-info flex lg:justify-around flex-col lg:flex-row justify-between px-2 sm:px-36">
            <a href='tel:+201002845554' rel='noreferrer' className="contact-unit flex flex-col items-center justify-between pb-6 lg:pb-0">
              <FontAwesomeIcon icon={faPhone} className='text-red-600' />
              <p className='font-bold'>PHONE</p>
              <p>+201002845554</p>
            </a>
            <a href='mailto:info@pharmachinerygroup.com' rel='noreferrer' className="contact-unit flex flex-col items-center justify-between">
              <FontAwesomeIcon icon={faEnvelope} className='text-red-600' />
              <p className='font-bold'>E-mail</p>
              <p>info@pharmachinerygroup.com</p>
            </a>
            
          </div>
    </section>  
    
    </>
  )
}

export default Contact;


