import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useInView } from "react-intersection-observer";
import egypt from '../assets/egypt.png';
import ksa from '../assets/ksa.png';
import uae from '../assets/uae.png';

const AnnouncementBar = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();

  return (
    <div ref={myRef} className="bg-[#021224] p-1 hidden lg:block">
      <div className=" container mx-auto text-[#F5F5F5] flex justify-between items-center">
        <div className={`info flex items-center ${ myElementIsVisible ? 'animate__animated animate__fadeInRight' : '' }`}>
          <div className="mail flex items-center pr-2">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-[#F5F5F5] pr-1"
            />
            <a
              href="mailto:info@pharmachinerygroup.com"
              className="text-xs hover:underline"
            >
              info@pharmachinerygroup.com
            </a>
          </div>
          <div className="phone egypt flex justify-start items-center px-2">
           <div className="w-[20px] h-[15px] overflow-hidden flex justify-center items-center">
            <img src={egypt} alt="egypt" />
           </div>
            <a
              href="tel:info@pharmachinerygroup.com"
              className="text-xs hover:underline p-1"
            >
              +20 100 284 5554
            </a>
          </div>
          <div className="phone egypt flex justify-start items-center px-2">
           <div className="w-[20px] h-[15px] overflow-hidden flex justify-center items-center">
            
           </div>
            <a
              href="tel:info@pharmachinerygroup.com"
              className="text-xs hover:underline p-1"
            >
             
            </a>
          </div>
          <div className="phone ksa flex justify-start items-center px-2">
          <div className="w-[20px] h-[15px] overflow-hidden flex justify-center items-center">
            <img src={ksa} alt="ksa" className="w-full h-full"/>
           </div>
            <a
              href="tel:info@pharmachinerygroup.com"
              className="text-xs hover:underline p-1"
            >
              +966 54 151 3905
            </a>
          </div>
        </div>
        <div className={`${myElementIsVisible ? 'animate__animated animate__fadeInLeft' : ''}`}>
         
          <a
            href="https://www.linkedin.com/company/pharmachinery/?originalSubdomain=eg"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="p-1 rounded-full w-[16px] h-[16px] hover:bg-white hover:text-[#021224]"
            />
          </a>
          <a
            href="https://www.youtube.com/@pharmachinerygroup4196"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              className="p-1 rounded-full w-[16px] h-[16px] hover:bg-white hover:text-[#021224]"
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61555747436348"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="p-1 rounded-full w-[16px] h-[16px] hover:bg-white hover:text-[#021224]"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
