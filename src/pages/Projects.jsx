import React from 'react';
import projectsBannerDesktop from '../assets/projects-banner-desktop.png';
import PageHead from '../components/PageHead';
import ProjectSection from '../components/ProjectSection';
import kpi from '../assets/KPI.png';
import medcare from '../assets/medcare.png';
import alexandria from '../assets/alexandria.png';
import rafada from '../assets/rafada.png';
import sabaa from '../assets/sabaa.png';
import eipico from '../assets/EIPICO.png';
import globalpharma from '../assets/globalpharma.png';
import pharco from '../assets/pharco.png';
import macro from '../assets/macro.png';
import ubm from '../assets/ubm.png';
import hikma from '../assets/hikma.png';
import beta from "../assets/beta.png";
import pharmapack from '../assets/pharmapack.png';
import saco from '../assets/saco.png';
import spi from '../assets/SPI.png';
import alrazi from '../assets/AL RAZI.png';
import doctorspharma from '../assets/DOCTORS.png';
import dox from '../assets/DOX.png';
import egpi from '../assets/EGPI.png';
import farouk from '../assets/FAROUK.png';
import globalnapi from '../assets/GLOBAL NAPI.png';
import lifesaver from '../assets/LIFE SAVER.png';
import organicpharma from '../assets/ORGANIC.png';
import { Helmet } from 'react-helmet-async';
import alandalus from "../assets/alandalus.jpg";
import ameomed from "../assets/ameomed.png";
import Egyptioncompany from "../assets/Egyptioncompany.jpg";
import granty from "../assets/granty.png";
import gsp from "../assets/gsp.png";
import hakeem from "../assets/hakeem.png";
import melano from "../assets/melano.png";
import multicare from "../assets/multicare.jpg";
import pharmaed from "../assets/pharmaed.jpg";
import pharmed from "../assets/pharmed.png";
import pharmazad from "../assets/pharmazad.jpg";
import curamed from "../assets/curamed.png";
import Bpharma from "../assets/B PHARMA.png";
import Bvp from "../assets/BVP.png";
import nerhadou from "../assets/nerhadou.jpg";
import { v4 as uuidv4 } from 'uuid';
const Projects = () => {
  const projectsList = [
    {
    id:uuidv4(),
    title:'Alrazi Pharmaceutical industries KSA',
    reverse:true,
    description:"ODF system",
    image:alrazi,
    },
    {
    id:uuidv4(),
    title:'Saudi phrarmaceutical industries',
    reverse:false,
   description:"Solid Line",
    image:spi
    },
     {
    id:uuidv4(),
    title:'Andalus Pharmaceutical Industries',
    reverse:true,
    description:"Clean Rooms",
    image:alandalus,
    },
      {
    id:uuidv4(),
    title:'Amcomed',
    reverse:true,
    description:"Blister Machine",
    image:ameomed,
    },
   {
    id:uuidv4(),
    title:'ECC Cosmotics',
    reverse:true,
    description:"BOV machine , Aerosol Line",
    image:Egyptioncompany,
    },
    {
    id:uuidv4(),
    title:'ECC Neutration Hub',
    reverse:true,
    description:"ODF Line , Solid Line",
    image:Egyptioncompany,
    },
    {
    id:uuidv4(),
    title:'Granty Food',
    reverse:true,
    description:"Blister Machine",
    image:granty,
    },
    {
    id:uuidv4(),
    title:'Glabsy Pharma',
    reverse:true,
    description:"Capsule Filling Machine",
    image:gsp,
    },
    {
    id:uuidv4(),
    title:'Hakeem Pharma, Saudi Arabia',
    reverse:true,
    description:"Blister Machine , BOV machine , Water Station",
    image:hakeem,
    },
    {
    id:uuidv4(),
    title:'Melano Pharma',
    reverse:true,
    description:"ODF Line",
    image:melano,
    },
     {
    id:uuidv4(),
    title:'Nerhaduo Pharmaceutical Industries',
    reverse:true,
    description:"ODF Line , Cartooning Machine",
    image:nerhadou,
    },
      {
    id:uuidv4(),
    title:'Advanced Pharmaceutical Industries, Saudi Arabia',
    reverse:true,
    description:"Clean Rooms",
    image:Bpharma,
    },
     {
    id:uuidv4(),
    title:'Curamed',
    reverse:true,
    description:"Clean Room , Unidose , Water Station",
    image:curamed,
    },
    {
    id:uuidv4(),
    title:'Biovax, Saudi Arabia',
    reverse:true,
    description:"Clean Rooms",
    image:Bvp,
    },
    {
    id:uuidv4(),
    title:'Multicare',
    reverse:true,
    description:"ODF Line , Capsule filling machine",
    image:multicare,
    },
    {
    id:uuidv4(),
    title:'ED Pharma',
    reverse:true,
    description:"Clean Rooms",
    image:pharmaed,
    },
    {
    id:uuidv4(),
    title:'Pharmed health care',
    reverse:true,
    description:"Blister Machine",
    image:pharmed,
    },
    {
    id:uuidv4(),
    title:'Pharmazad',
    reverse:true,
    description:"ODF Line , Counting Line",
    image:pharmazad,
    },
    {
    id:uuidv4(),
    title:'Doctors Pharma',
    reverse:true,
    description:"Clean Room Systems",
    image:doctorspharma
    },
    {
    id:uuidv4(),
    title:'Dox Pharma KSA',
    reverse:false,
    description:"Clean Room Systems",
    image:dox
    },
    {
    id:uuidv4(),
    title:'EGPI',
    reverse:true,
    description:"ODF line , Liquid Line , Counting Line , Tube effervescent , Filling line",
    image:egpi
    },
    {
    id:uuidv4(),
    title:'Farouk systems',
    reverse:false,
    description:"Airless Filling Machine",
    image:farouk
    },
    {
    id:uuidv4(),
    title:'Global Napi',
    reverse:true,
    description:"ODF Line",
    image:globalnapi
    },
    {
    id:uuidv4(),
    title:'Life Saver',
    reverse:false,
    description:"ODF Line , Tablet Press , Blister Machine",
    image:lifesaver
    },
    {
    id:uuidv4(),
    title:'Organic pharma',
    reverse:true,
    description:"ODF Line , Tablet Press , Soft gelatin Line",
    image:organicpharma
    },
   
    {
    id:uuidv4(),
    title:'Karman Pharmaceutical Industries',
    reverse:true,
    description:"General Consultation,Clean room system,Tablet press machine,Sachet filling machine,Eyedrop machine,MDI Machine,Licaps Machine,Complete automatic counting line,Water system",
    image:kpi
    },
    {
    id:uuidv4(),
    title:'Med Care',
    reverse:false,
    description:"General Consultation,Clean room system,Tablet press machine,Sachet filling machine,Eyedrop machine,MDI Machine,Licaps Machine,Complete automatic counting line,Water system",
    image:medcare
    },
    {
    id:uuidv4(),
    title:'Eipico',
    reverse:true,
    description:"Clean room system",
    image:eipico
    },
    {
    id:uuidv4(),
    title:'Global Pharma',
    reverse:false,
    description:"Clean room system",
    image:globalpharma
    },
    {
    id:uuidv4(),
    title:'Pharco',
    reverse:true,
    description:"Clean room system",
    image:pharco
    },
    {
    id:uuidv4(),
    title:'Macro',
    reverse:false,
    description:"Cartooning machine",
    image:macro
    },
    {
    id:uuidv4(),
    title:'Rafada 2Rs',
    reverse:true,
    description:"General Consultation,Clean room system,ODF production line,Semisolid Line,BOV machine,Tube filling machine,Liquid Line,Unidose machine",
    image:rafada
    },
    {
    id:uuidv4(),
    title:'Hikma Egypt',
    reverse:false,
    description:"Vial washining machine",
    image:hikma
    },
    {
    id:uuidv4(),
    title:'Saco Medical, Saudi Arabia',
    reverse:true,
    description:"ODF Line , Licaps Line , Solid Line",
    image:saco
    },
    {
    id:uuidv4(),
    title:'Sabaa International Pharma',
    reverse:false,
    description:"General Consulation",
    image:sabaa
    },
    {
    id:uuidv4(),
    title:'Alexandria Pharmacueticals',
    reverse:true,
   description:"ODF Line",
    image:alexandria
    },
    {
    id:uuidv4(),
    title:'United Biomed',
    reverse:false,
    description:"Semisolid line , Liquid Line , Turnkey project , Clean rooms",
    image:ubm
    },
    {
    id:uuidv4(),
    title:'Beta Pharma',
    reverse:true,
    description:"Cleanroom System",
    image:beta
    },
    {
    id:uuidv4(),
    title:"Pharma Pack",
    reverse:false,
    description:"General Consultation,Cleanroom System,ODF Line,Liquid Line,Semisolid System,Tube Filling,Water System",
    image:pharmapack
    },
  ]
  return (
    <div className="projects">
        <Helmet>
          <title>Pharmachinery Project</title>
          <meta name="description" content="Pharmachinery group provides integrated pharmaceutical and engineering solutions in Egypt and MENA region. Pharmachinery is your premier pharmaceutical machinery and Cleanroom solutions provider." />
        </Helmet>
      <PageHead img={projectsBannerDesktop} />
      <div className="section-head-info flex flex-col items-center justify-center text-center p-3 py-8">
            <p className='text-red-600 font-bold py-1'>Our Projects</p>
            <h1 className='text-2xl	font-bold dark py-1'>we are delivering only exceptional high quality projects</h1>
      </div>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 px-4">
  {projectsList.map((project) => (
    <ProjectSection
      key={project.id}
      img={project.image}
      title={project.title}
      description={project.description}
      size={project.size}
    />
  ))}
</div>
    
    </div>
    
  )
}

export default Projects;