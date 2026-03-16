import React from 'react';
import innovative from '../assets/innovative.png';
import PageHead from '../components/PageHead';
import Machine from '../components/Machine';
import InnovativeContact from '../components/InnovativeContact';
import unidose from "../assets/innova.png";
import { Helmet } from 'react-helmet-async';
import { bov1, bov2, bov3, odf1, odf2, odf3, odf4, odf6} from '../assets';
import { licaps  } from '../assets';
import hpl from "../assets/hpl.jpg";
import { v4 as uuidv4 } from 'uuid';
const Innovative = () => {
  const MachinesData = [
    
    {
      
        title: "ODF Technology",
      images: [odf6],
      id: "odf",
      video:
      "https://www.youtube.com/embed/KFMoL4E3ZaM?si=1Omg4KhzE0_bD18F",
      description:"The working principle of the machine has evenly coated a layer of liquid material on the surface of the reel base roll. The solvent (moisture) is rapidly evaporated and dried through the drying channel. And winding up after cooling (or composite with another material). Then, get the final products of the film (composite film) KFM-230 Automatic Oral thin film Packaging machine cutting and crosscutting inter across the integration, the material can be precisely divided into a single sheet-like products, and then use the sucker to accurately locate and move the material to the packaging film, laminated, heat sealing, punching, the final output Packaging complete product, to achieve the integration of the product line packaging.",
      features : [
        "High dosing accuracy",
        "quick-dissolving",
        "fast release",
        "no swallowing difficulty",
        "high acceptance by elderly and children",
        "small size convenient to carry",
      ]
    },
    {
      title: "Liquid Capsules (Licaps)",
      images: [licaps],
      id: "licaps",
      video:
      "https://www.youtube.com/embed/E8KaJ9DbStQ?si=30AzNis5fwt_rgT4",
      description:"The machine special design can filling oil and past into the capsule for pharmaceutical and foodstuff etc.",
      features : [
        "Touch-Screen, PLC program control panel with LCD.",
        "Capsule vacuum positioned mechanism to make the capsule qualified over 99%.",
        "Electrical Appliance control system approved to CE, and international standard.",
        "Large cam mechanism keeps the rotating table of mould together with the whole equipment running in balance, and completely guarantees the machine operating with highest precision",
        "Easy speed selection and closed capsule length adjustment.",
        "Quick and accurate change part set-up easy to remove rotary table and ring carrier assembly.",
        "QFully enclosed rotary table and dosage station for integration of the whole capsule filling plants.",
      ]
    },
    {
      title: "Uni Dose",
      images: [unidose],
      id: "unidose",
      video:
      "https://www.youtube.com/embed/eqkBBNxhIlc?si=BVIPkOlw3KWQrmQv",
      description:"This machine is suitable for the unit dose of medicine, drinks, dairy products, health products, food, cosmetics, perfume, agricultural medicine, fruit purees, etc",
      features : [
        "High speed and high precision high-end motion controller.",
        "Stepless frequency control of motor speed control.",
        "Automatic discharge volume, a roll of film cutting, can be folded in half.",
        "At the bottom of the bottle is flat, could stand.",
        "Automatic stop when each door opening.",
        "Servo motor control tensile membrane device.",
        "Filling does not drip, no bubble, no overflow.",
       ]
     
    },
    
    {
      title: "BOV Technology",
      images: [bov1],
      id: "bov",
      video:
      "https://www.youtube.com/embed/02Y-oqjP4ck?si=aLG3oTKssfYSm31s",
      description:"Bag On Valve :Automatic Bag On Valve Aerosol Filling Machine 2800GT",
      features : [
        "Automatic can feeder" ,
        "Automatic crimping and gas filling machine",
        "Automatic liquid filling machine",
        "Automatic actuator feeder machine",
        "Automatic inkjet printer",
        "Automatic outer cap fitting machine",
      ]
    },
   
 
    {
      title: " Clean Room system",
      images: [hpl],
      id: "clean",
      video:
      "https://www.youtube.com/embed/zq0egTlCuIM?si=P7izD_s9RmT08G8R",
      description:"Cleanroom Panel : Can connect with regular wall panel system : save budget",
      features : [
        "Resistant to H202",
        "No scratching ",
        "strong More compact and intact",
      ]
    },
  ];
  return (
    <>
      <Helmet>
        <title>Pharmachinery Machines</title>
        <meta name="description" content="Pharmachinery group provides integrated pharmaceutical and engineering solutions in Egypt and MENA region. Pharmachinery is your premier pharmaceutical machinery and Cleanroom solutions provider." />
      </Helmet>
      <PageHead img={innovative} />
      <div className="section-head-info flex flex-col items-center justify-center text-center p-8 ">
        <p className='text-red-600 font-bold py-1'>Innovative Machines</p>
        <h1 className='text-2xl	font-bold dark py-1'>Meet Our Innovative Machines With<br />Robust Quality and Reasonable Price</h1>
      </div>
      {MachinesData.map((data) => {
        return <Machine key={uuidv4()} title={data.title}  description={data.description} features={data.features} images={data.images} id={data.id} video={data.video} />
      })}
      <InnovativeContact />
    </>
      )
}

export default Innovative