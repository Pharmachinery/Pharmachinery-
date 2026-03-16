// import React from 'react';
// const Partner = ({ reverse , img , title  , description , link }) => {
//   return (
//     <section className='partner container mx-auto px-8  lg:p-12 lg:flex'>
//         <div className={`${reverse ? 'lg:order-2' : '' } bg-[#f5f5f5] py-12 p-4 lg:w-[50%] flex flex-col text-center items-center justify-center`}>
//           <p className='text-black text-3xl font-bold p-2'>{title}</p>
//           <p className='text-[#021224]'>{description}</p>
//           <button
//             type="button"
//             className="inline-block  my-4 bg-red-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
//             >
//               <a href={link} target="_blank" rel="noopener noreferrer">Visit Website</a>
//             </button> 
//         </div>
//         <div className={`${reverse ? 'lg:order-1' : '' } lg:w-[50%] flex items-center justify-center`}>
//           <img className='w-full p-8 lg:p-0 lg:w-1/2 h-auto' src={img} alt="partner-img" />
//         </div>
//     </section>
//   )
// }

// export default Partner

import React from 'react';

const Partner = ({ reverse, img, title, description, link }) => {
  return (
    <section
      className="partner container mx-auto px-8 lg:p-12 flex flex-col lg:flex-row"
    >
      {/* TEXT BOX */}
      <div
        className={[
          // On mobile: text comes after the image
          'order-2',
          // On large screens: respect reverse prop
          reverse ? 'lg:order-2' : 'lg:order-1',
          'bg-[#f5f5f5] py-12 p-4 lg:w-[50%] flex flex-col text-center items-center justify-center',
        ].join(' ')}
      >
        <p className="text-black text-3xl font-bold p-2">{title}</p>
        <p className="text-[#021224]">{description}</p>
        <button
          type="button"
          className="inline-block my-4 bg-red-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white 
          shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out 
          hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),
          0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 
          focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),
          0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none 
          focus:ring-0 active:bg-primary-700 
          active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),
          0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] 
          dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),
          0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),
          0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),
          0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          <a href={link} target="_blank" rel="noopener noreferrer">
            Visit Website
          </a>
        </button>
      </div>

      {/* IMAGE (LOGO) */}
      <div
        className={[
          // On mobile: image comes first
          'order-1',
          // On large screens: respect reverse prop
          reverse ? 'lg:order-1' : 'lg:order-2',
          'lg:w-[50%] flex items-center justify-center',
        ].join(' ')}
      >
        <img
          className="w-full p-8 lg:p-0 lg:w-1/2 h-auto"
          src={img}
          alt={`${title} logo`}
        />
      </div>
    </section>
  );
};

export default Partner;
