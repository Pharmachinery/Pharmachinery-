import React from 'react';

const ProjectSection = ({ img , title , description , reverse }) => {
  return (
    <div className={`project-section lg:py-2  lg:flex lg:items-center lg:justify-around  text-center lg:text-left ${reverse ? '' : 'bg-[#f5f5f5]'}`}>
        <div className="container mx-auto lg:py-20 py-4 lg:flex lg:items-center lg:justify-around  text-center lg:text-left">
          <div className={`flex items-center justify-center flex-col text-center py-4 p-8 lg:py-0 project-info lg:w-[50%] ${reverse ? 'lg:order-2' : ''}`}>
              <h1 className='text-xl text-red-600 font-bold py-2'>{title}</h1>
              <p>{description}</p>
          </div>
          <div className="img-wrapper flex items-center justify-center lg:w-[50%] ">
              <img loading='lazy' src={img} alt={title} className='lg:w-[60%]' />
          </div>
        </div>
    </div>
  )
}

export default ProjectSection;