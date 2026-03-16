import React from 'react';
import events from '../assets/events.png';
import PageHead from '../components/PageHead';
import { v4 as uuidv4 } from 'uuid';
import Event from '../components/Event';
import { Helmet } from 'react-helmet-async';
import { achema1 , achema2 , achema3 , achema4  } from '../assets';
import { 
  pharmaconex1, 
  pharmaconex2, 
  pharmaconex3, 
  pharmaconex4, 
  pharmaconex5, 
  pharmaconex6, 
  pharmaconex8,
  pharmaconex10,
  pharmaconex12,
  pharmaconex13,
  pharmaconex14,
  pharmaconex15,
  pharmaconex16,
  pharmaconex17,
  pharmaconex18,
  pharmaconex19,
  pharmaconex20,
  pharmaconex21,
  pharmaconex22,
  pharmaconex23,
  pharmaconex24,
  pharmaconex25,
  pharmaconex26,
  pharmaconex27,
  pharmaconex28,
  pharmaconex29,
  pharmaconex30,
  pharmaconex31,
  pharmaconex32,
  pharmaconex33,
  pharmaconex34,
  pharmaconex35,
  pharmaconex36,
  pharmaconex37,
  pharmaconex38,
  pharmaconex39,
  pharmaconex40,
  pharmaconex41,
  pharmaconex42,
  pharmaconex43,
  pharmaconex44,
  pharmaconex45,
  pharmaconex46
  
  

} from '../assets';
import { cphi1 , cphi2 , cphi3 , cphi4 , cphi5 , cphi6 } from '../assets';
const eventsList = [
  {
  id: uuidv4(),
  title: "Pharmaconex 2025",
  description: "Pharmaconex is Africa’s pharmaceutical manufacturing hub, connecting the entire supply chain in Egypt, the largest producer of the pharmaceutical market in the MENA region. It offers a comprehensive experience for the pharma community to network and build knowledge around the latest industry trends.",
  date: "September 2025",
  location: "Cairo, Egypt",
  images:[pharmaconex39 , pharmaconex40 , pharmaconex41 , pharmaconex42 , pharmaconex43 , pharmaconex44 , pharmaconex45 , pharmaconex46 ]
 },
  {
    id:uuidv4(),
    title:"Pharmaconex 2024",
    description: "Pharmaconex is Africa’s pharmaceutical manufacturing hub, connecting the entire supply chain in Egypt, the largest producer of the pharmaceutical market in the MENA region. Offering a comprehensive experience for the pharma community to network and build knowledge around the latest industry trends.",
    date:"September 2024",
    location:"Cairo,Egypt",
    images:[pharmaconex24 , pharmaconex25 , pharmaconex26 , pharmaconex27 , pharmaconex28 ,  pharmaconex29 , pharmaconex30 , pharmaconex31 , pharmaconex32 , pharmaconex33 , pharmaconex34 , pharmaconex35 , pharmaconex36 , pharmaconex37 , pharmaconex38 ]
  },
  {
    id:uuidv4(),
    title:"Pharmaconex 2023",
    description: "Pharmaconex is Africa’s pharmaceutical manufacturing hub, connecting the entire supply chain in Egypt, the largest producer of the pharmaceutical market in the MENA region. Offering a comprehensive experience for the pharma community to network and build knowledge around the latest industry trends.",
    date:"September 2023",
    location:"Cairo,Egypt",
    images:[pharmaconex16 , pharmaconex17 , pharmaconex18 , pharmaconex19 , pharmaconex20 ,  pharmaconex21 , pharmaconex22 , pharmaconex23 ]
  },
  {
    id:uuidv4(),
    title:"CPHI China",
    description: "CPHI & PMEC China is Asia’s premier pharma event, bringing together suppliers and buyers from the entire pharmaceutical supply chain. Global pharma experts gather in Shanghai to network, source cost-effective solutions, and conduct vital face-to-face business.",
    date:"June 2023",
    location:"Shanghai, China",
    images:[cphi1 , cphi2 , cphi3 , cphi4 , cphi5 ,  cphi6]
  },
  {
    id:uuidv4(),
    title:"Achema 2022",
    description: "ACHEMA is home to the full scope of technology and services for the process industry. Manufacturers, service providers, and forward thinkers meet at ACHEMA in a single place, thus overcoming the boundaries between different specialist fields and industries.",
    date:"August 2022",
    location:"Frankfurt, Germany",
    images:[achema1,achema2,achema3,achema4]
  },{
    id:uuidv4(),
    title:"Pharmaconex 2022",
    description: "Pharmaconex is Africa’s pharmaceutical manufacturing hub, connecting the entire supply chain in Egypt, the largest producer of the pharmaceutical market in the MENA region. Offering a comprehensive experience for the pharma community to network and build knowledge around the latest industry trends.",
    date:"September 2022",
    location:"Cairo,Egypt",
    images:[pharmaconex1 , pharmaconex2 , pharmaconex3 , pharmaconex4 , pharmaconex5 ,  pharmaconex6 ]
  },{
    id:uuidv4(),
    title:"Pharmaconex 2021",
    description: "Pharmaconex is Africa’s pharmaceutical manufacturing hub, connecting the entire supply chain in Egypt, the largest producer of the pharmaceutical market in the MENA region. Offering a comprehensive experience for the pharma community to network and build knowledge around the latest industry trends.",
    date:"October 2021",
    location:"Cairo, Egypt",


    images:[ pharmaconex8,
      pharmaconex10,
      pharmaconex12,
      pharmaconex13,
      pharmaconex14,
      pharmaconex15]
  },
  
]


const Events = () => {
  return (
  <div>
    <Helmet>
      <title>Pharmachinery Events</title>
      <meta name="description" content="Pharmachinery Events" />
    </Helmet>
      <PageHead img={events} />
      <div className="section-head-info flex flex-col items-center justify-center text-center p-4 lg:p-8">
        <p className='text-red-600 font-bold py-1'>Our Events</p>
        <h1 className='text-2xl	font-bold dark py-1'>Events We Have Participated In And <br /> Left Our Signature </h1>
      </div>
      <div className='pb-8'>
        {eventsList.map((event) =>(
           <Event key={event.id} event={event} />
        ))}
      </div>
  </div>
  )
}

export default Events