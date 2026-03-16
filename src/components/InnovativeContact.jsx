import React from 'react';
import { HashLink } from 'react-router-hash-link';
const InnovativeContact = () => {
  return (
    <section className='bg-red-600 flex flex-col items-center justify-center text-center p-8'>
      <p className='font-semibold text-[#dddddd] text-lg '>Innovative Machines</p>
      <p className='text-white font-bold text-3xl p-2'>Innovative Machines With Robust <br />  Quality And Reasonable Price</p>
      <div className=''>
          <HashLink className="p-2" to="/contact#">
            <button className="inline-block p-2 m-2 bg-white w-[150px] font-bold text-xs uppercase leading-normal text-black">
              Contact Us Now
            </button>
          </HashLink>
        </div>
    </section>
  )
}

export default InnovativeContact;