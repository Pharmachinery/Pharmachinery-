import React from 'react';
// import CEO from "../assets/ceo.png"

const CeoMessage = ({bg}) => {
  return (
//     <section className={`ceo-section bg-[${bg}] px-2 sm:px-24`}>
//       <div className="container mx-auto">
//       <div className="section-head-info flex flex-col items-center justify-center text-center p-8">
//             <p className="text-red-600 font-bold py-1">CEO message</p>
//             <h1 className="text-2xl	font-bold dark py-1">Welcome to Pharmachinery!</h1>
//             <p className="lg:w-[50%] py-1">
//             As you navigate our website, I hope you learn more about the qualities that make our company an outstanding provider of essential services and a wonderful place to build a career.
//             </p>
//         </div>
//         <div className="ceo p-8 lg:flex gap-12 ">
//             <div className="image-wrapper w-full lg:w-[40%] mx-auto pb-12 lg:pb-0">
//                 <img src={CEO} alt="ceo-message" className='w-full mx-auto  lg:w-auto border-8 border-[#b91c1c]' />
//             </div>
//             <div className="info-ceo px-8 lg:w-[60%] h-56 lg:overflow-auto lg:h-[33rem] 2xl:h-[36rem] scrollbar-thin scrollbar-thumb-red-700 scrollbar-track-red-300 overflow-y-scroll">
//                 <div className="paragraph py-2">
//                     <div className="heading font-bold py-3 text-red-600">Welcome to Pharmachinery !</div>
//                     <div className="data text-sm">As you navigate our website, I hope you learn more about the qualities that make our company an outstanding provider of essential services and a wonderful place to build a career.</div>
//                 </div>
//                 <div className="paragraph">
//                     <div className="heading font-bold py-3 text-red-600">We have a client first philosophy.</div>
//                     <div className="data text-sm">We are a process-driven company with an altruistic aim to pioneer turnkey solutions in the pharmaceutical industry through constant innovation and responsible partnerships. We contribute to the world's well being by carrying out our operations in different parts of the world, and hence enabling the availability of the medicines there.
// We bring the leaders of each area in a pharma project under one roof and delivers a seamlessly integrated solution to our client.</div>
//                     <div className="data text-sm">Our Aim is to use our core expertise about the pharma projects and the production technologies to deliver an Efficient, Compliant and Cost-effective solutions to our clients.

// We provide a one-point solution right from the conceptualization to the final commissioning of the project.
// We believe in keeping the customer at the core of our actions, customizing our solutions by understanding, designing, and providing facilities for great value, efficiency and timely delivery of solutions through our expertise.

// We provide Turnkey based solutions, having all end-to-end disciplines under one roof. Allowing a full range of services required to design and execute projects.</div>

//                 </div>
//                 <div className="paragraph">
//                     <div className="heading font-bold py-3 text-red-600">We have true international reach.</div>
//                     <div className="data text-sm">We have worked in many of the most demanding and secure environments in the world, and our global reach means that we can support our clients wherever their needs require. As part of Pharmachinery Group, we are able to draw upon the accumulated knowledge of an organization that has set new standards of excellence in sectors including transportation, healthcare, and defense. We apply the very best international insights to keep our clients at the leading edge.   </div>
//                 </div>
//                 <div className="paragraph">
//                     <div className="heading font-bold py-3 text-red-600">We live out our values.</div>
//                     <div className="data text-sm">Pharmachinery’s corporate culture is defined by a simple set of corporate values that define how we operate every single day – Trust, Care, Innovation, and Pride. They reflect how we interact with our clients, our colleagues, and our communities. We hold each other accountable for creating a company we can all be proud to work at.

// I hope this provides you with a few reasons to get to know Pharmachinery better. Whether you are a potential customer, a small business partner, or a future employee, we look forward to finding out how we can work together to bring service to life.</div>
//                 </div>
                
//             </div>
//         </div>
//       </div>
//     </section>

<div className="min-h-screen bg-gray-100 flex items-center justify-center">
<section className="bg-gray py-16 px-6 md:px-20 w-full">
  <div className=" max-w-4xl mx-auto text-center animate__animated animate__fadeInUp">
    <h2 className="text-red-600 text-2xl md:text-3xl font-bold mb-6">
      CEO Message
    </h2>
    <div className="bg-white-50 bg-white border-l-4 border-red-600 rounded-xl shadow-md p-8 md:p-12 text-left">
      {/* Your message content here */}
      <p className="text-gray-700 mb-6"><strong>Dear Visitors,</strong><br/><strong>Welcome to Pharmachinery Group.</strong></p>
      <p className="text-gray-700 mb-4">At Pharmachinery Group, we are proud …</p>
      <p className="text-gray-700 mb-4">In today’s fast-evolving pharmaceutical landscape …</p>
      <p className="text-gray-700 mb-4">We work closely with our clients …</p>
      <p className="text-gray-700 mb-6">Thank you for choosing Pharmachinery Group …</p>
      <p className="text-gray-700 font-semibold">Warm regards,<br/><span className="text-red-600">Dr. Mohamed Rady</span><br/>Pharmachinery Group</p>
    </div>
  </div>
</section>
</div>
  )
}

export default CeoMessage