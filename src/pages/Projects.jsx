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
import { v4 as uuidv4 } from 'uuid';
const Projects = () => {
  const projectsList = [
    {
    id:uuidv4(),
    title:'Alrazi Pharmaceutical industries KSA',
    reverse:true,
    workDone:"ODF system",
    image:alrazi
    },
    {
    id:uuidv4(),
    title:'Saudi phrarmaceutical industries',
    reverse:false,
    workDone:"Solid Line",
    image:spi
    },
    {
    id:uuidv4(),
    title:'Doctors Pharma',
    reverse:true,
    workDone:"Clean Room Systems",
    image:doctorspharma
    },
    {
    id:uuidv4(),
    title:'Dox Pharma KSA',
    reverse:false,
    workDone:"Clean Room Systems",
    image:dox
    },
    {
    id:uuidv4(),
    title:'EGPI',
    reverse:true,
    workDone:"Clean rooms systems, ODF Line, Liquid line",
    image:egpi
    },
    {
    id:uuidv4(),
    title:'Farouk systems',
    reverse:false,
    workDone:"Aerosol filling Line",
    image:farouk
    },
    {
    id:uuidv4(),
    title:'Global Napi',
    reverse:true,
    workDone:"ODF Line",
    image:globalnapi
    },
    {
    id:uuidv4(),
    title:'Life Saver',
    reverse:false,
    workDone:"ODF line, Unidose machine",
    image:lifesaver
    },
    {
    id:uuidv4(),
    title:'Organic pharma',
    reverse:true,
    workDone:"ODF line, Soft Gelatin Line, Tablet press Machine",
    image:organicpharma
    },
    {
    id:uuidv4(),
    title:'Saudi phrarmaceutical industries',
    reverse:false,
    workDone:"Solid Line",
    image:spi
    },
    {
    id:uuidv4(),
    title:'Karman Pharmaceutical Industries',
    reverse:true,
    workDone:"General Consultation,Clean room system,Tablet press machine,Sachet filling machine,Eyedrop machine,MDI Machine,Licaps Machine,Complete automatic counting line,Water system",
    image:kpi
    },
    {
    id:uuidv4(),
    title:'Med Care',
    reverse:false,
    workDone:"General Consultation,Clean room system,Tablet press machine,Sachet filling machine,Eyedrop machine,MDI Machine,Licaps Machine,Complete automatic counting line,Water system",
    image:medcare
    },
    {
    id:uuidv4(),
    title:'Eipico',
    reverse:true,
    workDone:"Clean room system",
    image:eipico
    },
    {
    id:uuidv4(),
    title:'Global Pharma',
    reverse:false,
    workDone:"Clean room system",
    image:globalpharma
    },
    {
    id:uuidv4(),
    title:'Pharco',
    reverse:true,
    workDone:"Clean room system",
    image:pharco
    },
    {
    id:uuidv4(),
    title:'Macro',
    reverse:false,
    workDone:"Cartooning machine",
    image:macro
    },
    {
    id:uuidv4(),
    title:'Rafada 2Rs',
    reverse:true,
    workDone:"General Consultation,Clean room system,ODF production line,Semisolid Line,BOV machine,Tube filling machine,Liquid Line,Unidose machine",
    image:rafada
    },
    {
    id:uuidv4(),
    title:'Hikma Egypt',
    reverse:false,
    workDone:"Vial washining machine",
    image:hikma
    },
    {
    id:uuidv4(),
    title:'Saco Medical, Saudi Arabia',
    reverse:true,
    workDone:"General Consulation,ODF Line,Tablet Press,Sachet machine,Unidose,Blister machine,Licaps,Double Alu Packing machine,Candy line,Counting line",
    image:saco
    },
    {
    id:uuidv4(),
    title:'Sabaa International Pharma',
    reverse:false,
    workDone:"General Consulation",
    image:sabaa
    },
    {
    id:uuidv4(),
    title:'Alexandria Pharmacueticals',
    reverse:true,
    workDone:"ODF Line",
    image:alexandria
    },
    {
    id:uuidv4(),
    title:'United Biomed',
    reverse:false,
    workDone:"Liquid Line,Semisolid Line,Tube Filling Machine,Inspection Machine",
    image:ubm
    },
    {
    id:uuidv4(),
    title:'Beta Pharma',
    reverse:true,
    workDone:"Cleanroom System",
    image:beta
    },
    {
    id:uuidv4(),
    title:"Pharma Pack",
    reverse:false,
    workDone:"General Consultation,Cleanroom System,ODF Line,Liquid Line,Semisolid System,Tube Filling,Water System",
    image:pharmapack
    },
  ]
  return (
    <div className="projects">
        <Helmet>
          <title>Pharmachinery Projects</title>
          <meta name="description" content="Pharmachinery group provides integrated pharmaceutical and engineering solutions in Egypt and MENA region. Pharmachinery is your premier pharmaceutical machinery and Cleanroom solutions provider." />
        </Helmet>
      <PageHead img={projectsBannerDesktop} />
      <div className="section-head-info flex flex-col items-center justify-center text-center p-3 py-8">
            <p className='text-red-600 font-bold py-1'>Our Projects</p>
            <h1 className='text-2xl	font-bold dark py-1'>we are delivering only exceptional high quality projects</h1>
      </div>
      {projectsList.map((project) => (
              <ProjectSection key={project.id} reverse={project.reverse} img={project.image} title={project.title} description={project.workDone} />
      ))}
    
    </div>
    
  )
}

export default Projects;