import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { HashLink } from 'react-router-hash-link';


const ServiceCard = ({ img, title, description , to }) => {
  return (
    <HashLink
      smooth
      to={to}
      className="service-card group transition duration-150 ease-in-out  m-4 mx-8 w-[320px] lg:w-[250px] xl:w-[33%] relative  overflow-hidden bg-cover bg-[50%] bg-no-repeat"
    >
      <img src={img} alt="card-img" className="w-full h-full" />
      <div className="group-hover:hidden absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[#0D4E97]/30 bg-fixed transition duration-150 ease-in-out">
        <h2 className="font-bold text-xl w-[90%] absolute bottom-20 left-3  text-white">
          {title}
        </h2>
        <FontAwesomeIcon
          icon={faArrowRight}
          className="text-white text-xl absolute bottom-10 right-10"
        />
      </div>
      <div className="group-hover:block  hidden absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[#0D4E97]/70 bg-fixed transition duration-150 ease-in-out ">
        <div className="text absolute bottom-20 left-3">
          <h2 className="font-bold text-xl w-[90%]   text-white">{title}</h2>
          <p className="w-[90%] text-white">{description}</p>
        </div>
        <FontAwesomeIcon
          icon={faArrowRight}
          className="text-white text-xl absolute bottom-10 right-10"
        />
      </div>
    </HashLink>
  );
};

export default ServiceCard;
