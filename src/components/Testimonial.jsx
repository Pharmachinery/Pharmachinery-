import React from 'react'

const Testimonial = ({testimonial}) => {
  return (
          <div className="w-[100%]  text-black flex flex-col justify-center items-center text-center p-2 lg:p-0">
         
            <h2 className="text-xl font-semibold p-1">{testimonial.name}</h2>
            <h3 className="text-sm font-normal p-2">
            {testimonial.position}
            </h3>
            <p className="lg:w-[50%]">
            {testimonial.review}
            </p>
          </div>
          )
}

export default Testimonial