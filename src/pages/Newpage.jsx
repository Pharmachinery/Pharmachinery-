import React from "react";
import innovative from '../assets/innovative.png';
import PageHead from '../components/PageHead';
import { Helmet } from 'react-helmet-async';
import odf7 from "../assets/odf7.jpg";
import odf8 from "../assets/odf8.png";
import odf9 from "../assets/odf9.png";
import odf10 from "../assets/odf10.jpg";
import odf11 from "../assets/odf11.jpg";
import odf12 from "../assets/odf12.jpg";
import odf13 from "../assets/odf13.jpg";
import  odf15  from "../assets/odf15.jpg";

const machines = [
  {
    title: "Economic-Speed Production Line",
    model: "OZM 340 / 2M - KFM 260S",
    details: [
      "Capacity: 150 ODF/min which is equivalent to      9,000 ODF/hr",
    ],
    video: "https://www.youtube.com/embed/oPOOGtvMajg"
  },
  {
    title: "Intermediate Speed ODF Production Line",
    model: "OZM 360 / 4M - KFM 260L",
    details: [
      "Capacity: 250 ODF/min which is equivalent to 15,000 ODF/hr"
    ],
    video: "https://www.youtube.com/embed/s-4WpBR8e6Y"
  },
  {
    title: "High-Speed ODF Production Line",
    model: "OZM 360 / 6M - KFM 260H",
    details: ["Capacity: 450 ODF/min which is equivalent to 27,000 ODF/hr"],
    video: "https://www.youtube.com/embed/OrxYIwC6r_w"
  },
  {
    title: "Super High-Speed ODF Production Line",
    model: "OZM 360 / 10M - KFM 300H",
    details: ["Capacity: 1500 ODF/min which is equivalent to 90,000 ODF/hr"],
    video: "https://www.youtube.com/embed/fUB0U1dwXwA"
  },
  {
    title: "High speed ODF Cartooning Machine",
    model: "DXH - 130S",
    details: ["Capacity: 120 ODF Box/min which is equivalent to 7,200 ODF Box/hr"],
    video: "https://www.youtube.com/embed/P6HQ3V_ub38"
  },
  {
    title: "Intermediate speed ODF Cartooning Machine",
    model: "DXH - 130",
    details: ["Capacity: 80 ODF Box/min which is equivalent to 4,800 ODF Box/hr"],
    video: "https://www.youtube.com/embed/ioYEES4vxno"
  },
  {
    title: "Transdermal Patch",
    model: "OZM 360 / 4M - TPT 200",
    details: ["Capacity: 150 TDS/min which is equivalent to 9,000 TDS/hr"],
    video: "https://www.youtube.com/embed/DWmXZzUHlgE"
  }
];

export default function ODFMachinesPage() {
  return (
    <>
      <Helmet>
        <title>Pharmachinery Machines</title>
        <meta name="description" content="Pharmachinery group provides integrated pharmaceutical and engineering solutions in Egypt and MENA region. Pharmachinery is your premier pharmaceutical machinery and Cleanroom solutions provider." />
      </Helmet>
   <div className="relative w-full h-[120px] sm:h-[180px] md:h-[300px] overflow-hidden">
  <video
    className="w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/banner-video.mp4" type="video/mp4" />
  </video>
</div>
    <div className="min-h-screen bg-[#f8f9fa] py-10 px-6 md:px-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#b30000] mb-12">
        Advanced Machinery for Fast-Dissolving Oral Films (ODF)
      </h1>
      <div className="flex flex-col lg:flex-row gap-10 items-start">
      <div className="w-full lg:w-1/2 ">
      <div className="grid grid-cols-2 gap-4 mb-6">
  <img src={odf7} className="rounded-2xl w-full h-40 object-cover border-2 border-red-200 shadow-md transition duration-300 hover:scale-105 hover:border-red-400" />
  <img src={odf8} className="rounded-2xl w-full h-40 object-cover border-2 border-red-200 shadow-md transition duration-300 hover:scale-105 hover:border-red-400" />
  <img src={odf9} className="rounded-2xl w-full h-40 object-cover border-2 border-red-200 shadow-md transition duration-300 hover:scale-105 hover:border-red-400" />
  <img src={odf10} className="rounded-2xl w-full h-40 object-cover border-2 border-red-200 shadow-md transition duration-300 hover:scale-105 hover:border-red-400" />
</div>
  <div className="bg-white shadow-lg rounded-2xl p-8 border border-red-400 mt-10">
    
    <h2 className="text-3xl font-bold mb-6 text-[#b30000]">
      ODF Project Overview
    </h2>

    <p className="text-gray-700 leading-8 mb-6">
      A successful ODF project requires collaboration between formulation
      scientists, manufacturing engineers, regulatory specialists, and sales teams.
      By ensuring thorough support at each stage, products can reach the market
      efficiently while maintaining quality and compliance.
    </p>

    <ul className="list-disc pl-6 text-gray-700 space-y-3 leading-8 mb-6">
      <li>Concept Development</li>
      <li>Technical Development</li>
      <li>Regulatory Compliance</li>
      <li>Service after sales support</li>
      <li>Production</li>
      <li>Training</li>
      <li>Know-How Support</li>
    </ul>

    <p className="text-gray-700 leading-8 mb-6">
      Orally disintegrating films (ODFs) offer a significant opportunity for
      incremental turnover and margin improvements in the pharmaceutical industry.
    </p>

    <p className="text-gray-700 leading-8">
      Companies that successfully transition high-value branded products to ODFs
      can achieve strong revenue growth within 2–5 years.
    </p>

  </div>
   <div className="grid grid-cols-2 gap-4 mb-6">
  <img src={odf11} className="rounded-2xl w-full h-40 object-cover border-2 border-red-200 shadow-md transition duration-300 hover:scale-105 hover:border-red-400" />
  <img src={odf13} className="rounded-2xl w-full h-40 object-cover border-2 border-red-200 shadow-md transition duration-300 hover:scale-105 hover:border-red-400"/>
  <img src={odf12} className="rounded-2xl w-full h-40 object-cover border-2 border-red-200 shadow-md transition duration-300 hover:scale-105 hover:border-red-400" />
  <img src={odf15} className="rounded-2xl w-full h-40 object-cover border-2 border-red-200 shadow-md transition duration-300 hover:scale-105 hover:border-red-400" />
</div>
</div>
      <div className="w-full md:w-1/2">

  <div className="border-2 border-red-300 rounded-2xl p-6">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {machines.map((machine, idx) => (
          <div
            key={idx}
            className="shadow-lg rounded-2xl overflow-hidden border border-[#b30000]/40 hover:shadow-xl transition bg-white"
          >
            <div className="aspect-video w-full bg-gray-100">
              <iframe
                className="w-full h-full"
                src={machine.video}
                title={machine.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-5">
              <h2 className="text-xl font-semibold text-[#b30000] mb-2">
                {machine.title}
              </h2>
              <p className="text-gray-800 font-medium mb-2">Model: {machine.model}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {machine.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  </div> 
    </>
  );
}
