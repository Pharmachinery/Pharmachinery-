import React from "react";
import logo from "../assets/pharmachinery-solid.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin , faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
     <footer className="px-4 divide-y bg-[#021224] text-white dark:text-gray-100">
     <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
       <div className="lg:w-1/3">
         <a rel="noopener noreferrer" href="https://www.pharmachinerygroup.com" className="flex justify-center space-x-3 lg:justify-start">
         <img src={logo} alt="pharmachinery" />
         </a>
         <p className="text-sm max-w-[80%]">We’re eager to map out the needs of your business, and provide the necessary tools to achieve a successful future </p>
       </div>
       <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
         <div className="space-y-3">
           <h3 className="tracking-wide uppercase dark:text-gray-50">What We Do?</h3>
           <ul className="space-y-1">
             <li>
             <HashLink to="/#">Home</HashLink>
             </li>
             <li>
             <HashLink to="/services#">Services</HashLink>
             </li>
             <li>
             <HashLink to="/projects#">Projects</HashLink>
             </li>
             <li>
             <HashLink to="/innovative#">Innovative Machines</HashLink>
             </li>
           </ul>
         </div>
         <div className="space-y-3">
           <h3 className="tracking-wide uppercase dark:text-gray-50">Who We Are?</h3>
           <ul className="space-y-1">
             <li>
                <HashLink to="/about#">About US</HashLink>
             </li>
             <li>
                <HashLink to="/partners#">Our Partners</HashLink>
             </li>
             <li>
                <HashLink to="/events#">Events</HashLink>
             </li>
           </ul>
         </div>
         <div className="space-y-3">
           <h3 className="uppercase dark:text-gray-50">Contact US</h3>
           <ul className="space-y-1">
             <li>
                <p>1216 Sayed Zakaria Sheraton Elmatar, Cairo Government, Egypt</p>
             </li>
             <li>
                <a href="mailto:info@pharmachinerygroup.com">info@pharmachinerygroup.com</a>
             </li>
             <li>
                <a rel="noopener noreferrer" href="tel:+201002845554">+20 100 284 5554</a>
             </li>
            
           </ul>
         </div>
         <div className="space-y-3">
           <div className="uppercase dark:text-gray-50">Social media</div>
           <div className="flex justify-start space-x-3">
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/pharmachinery/?originalSubdomain=eg">
               <FontAwesomeIcon
              icon={faLinkedin}
              className="text-[#F5F5F5] pr-1"
              />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/@pharmachinerygroup4196">
             
            <FontAwesomeIcon icon={faYoutube} className="text-[#F5F5F5] pr-1" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=61555747436348">
               <FontAwesomeIcon
              icon={faFacebook}
              className="text-[#F5F5F5] pr-1"
              />
            </a>
           </div>
         </div>
       </div>
     </div>
     <div className="py-6 text-sm text-center dark:text-gray-400">© Pharmachinery Co. All rights reserved.</div>
   </footer>
  );
};

export default Footer;
