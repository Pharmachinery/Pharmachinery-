import React from "react";
import innovative from '../assets/innovative.png';
import PageHead from '../components/PageHead';
import { Helmet } from 'react-helmet-async';


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
      <PageHead img={innovative} />
    <div className="min-h-screen bg-[#f8f9fa] py-10 px-6 md:px-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#b30000] mb-12">
        Advanced Machinery for Fast-Dissolving Oral Films (ODF)
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
    
      
    </>
  );
}
