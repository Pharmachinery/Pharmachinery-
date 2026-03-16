import React from "react";
import ContactBackground from "../assets/contact-bg.png";
import { useInView } from "react-intersection-observer";
import { HashLink } from "react-router-hash-link";

const ContactHome = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();

  return (
    <section ref={myRef} className="contact-home relative px-2 sm:px-24 bg-[#ea1e2f] w-[100%] h-[100%] p-12 z-10">
     <div className="container mx-auto">
     <img
            className={`${myElementIsVisible ? 'animate__animated animate__fadeInLeft' : ''} absolute top-0 right-0 max-h-full z-20 hidden lg:block`}
            src={ContactBackground}
            alt="ContactBackground"
        />
      <div className="contact-text lg:w-[60%] z-30">
        <p className="text-[#DDDDDD] text-xs lg:text-lg font-medium p-1 py-2 m-2">
          Contact Us
        </p>
        <p className="font-bold text-3xl text-white p-1 py-2 m-2">
          Let’s Work Together
        </p>
        <p className="text-lg font-normal text-white p-1 py-2 m-2">
          We’re eager to map out the needs of your business, and provide the
          necessary tools to achieve a successful future.
        </p>
        <div>
          <HashLink className="p-2" to="/contact#">
            <button className="inline-block p-2 m-2 bg-white w-[150px] font-bold text-xs uppercase leading-normal text-black">
              Contact Us Now!
            </button>
          </HashLink>
        </div>
      </div>
     </div>
     
    </section>
  );
};

export default ContactHome;
