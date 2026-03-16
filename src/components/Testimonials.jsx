import React from "react";
import "swiper/css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Testimonial from "./Testimonial";
import { v4 as uuidv4 } from "uuid";



const testimonialsList = [
  {
    id: uuidv4(),
    name: "Dr Wasim Garman",
    review: "Pharmachinary has proven to be an exceptional A-Z company, providing perfect services and innovative ideas that have significantly contributed to our company's progression. Their expertise in optimizing production facilities has given us a remarkable competitive edge, allowing us to gain more market share and boost profits. We view Pharmachinary as a valuable innovation partner, helping us turn our dreams into reality.",
    position: "Chairman of Rafada 2Rs"
  },
  {
    id: uuidv4(),
    name: "Dr Mohamed Marrawy",
    review: "Our partnership with Pharmachinary has been a game-changer for our pharmaceutical business. Their innovative solutions in production facilities have been instrumental in achieving our main objective of creating innovative products that stand out in the market. This has positioned us as one of the top leading companies not only in Egypt but also in the Middle East.",
    position: "CEO of KarmanPharma"
  },
  {
    id: uuidv4(),
    name: "Dr Ayman Elshaer",
    review: "Pharmachinary has exceeded our expectations with their exceptional services and commitment to innovation. Their support in optimizing our production facilities has been invaluable, allowing us to improve our operational efficiency and productivity. Their innovative ideas have been the driving force behind the creation of remarkable products, giving us a competitive edge in the market. We consider Pharmachinary as an integral part of our success, and their partnership has been a turning point in our journey towards becoming a leading pharmaceutical company in Egypt and the Middle East.",
    position: "Chairman of Medcare"
  },
  {
    id: uuidv4(),
    name: "DR Magdy Flemon",
    review: "We are delighted to have partnered with Pharmachinary, an outstanding company in the pharmaceutical industry. Their perfect services have streamlined our operations and enhanced our production capabilities. Beyond that, their focus on innovation has been truly inspiring. With their support, we have been able to create innovative products that have set us apart from our competitors. Pharmachinary's team, led by their strategic project lead, has been instrumental in providing valuable insights and solutions. Thanks to their collaboration, we have witnessed significant growth, gained a larger market share, and experienced a boost in profitability.",
    position: "Chairman of Pharmapack"
  },
  {
    id: uuidv4(),
    name: "Eng. Essam Saloma",
    review: "Pharmachinary has been an invaluable partner for our pharmaceutical business. Their innovative solutions in production facilities have helped us achieve our core objective of delivering groundbreaking products with a competitive edge. This partnership has played a pivotal role in establishing us as a leading company in both Egypt and the Middle East. Pharmachinary's commitment to excellence and continuous support have been commendable. They have not only provided perfect services but also fostered a culture of innovation within our organization. As we continue to grow, we are grateful to have Pharmachinary as our innovation partner, driving us forward on the path of success.",
    position: "Engineering Manager UBM"
  },
  {
    id: uuidv4(),
    name: "Dr. Mohamed Elokaby",
    review: "Working with Pharmachinery Group for our pharmaceutical machinery needs was a great decision.The machines delivered were modern, GMP-compliant, and performed smoothly from day one.Their technical support team was professional and provided excellent training for our staff. We’re already planning our next phase with them — highly recommended!",
    position: "Chairman of Curamed Pharma"
  },
  {
    id: uuidv4(),
    name: "Dr . Sameh Atef",
    review: "We partnered with Pharmachinery Group for the supply and installation of cleanroom walls and doors in our new facility.The quality of materials and the precision in installation exceeded our expectations.They understood the pharmaceutical requirements perfectly and delivered a solution that was both functional and compliant.Very reliable team – we’re glad we chose them",
    position: "Chairman of Life Saver International"
  },
  {
    id: uuidv4(),
    name: "Dr. Shuja Abdulrhman",
    review:"The engineering and pharmaceutical consultancy provided by Pharmachinery Group played a key role in launching our project.They helped us design a GMP-compliant plant layout, prepared detailed feasibility studies, and supported us through every regulatory step.It truly felt like they were part of our internal team. We value their expertise and ongoing support.",
    position: "Technical Director of DOX pharma KSA"
  },
  {
    id: uuidv4(),
    name: "Dr Ahmed Abass",
    review: "the experience with Pharmachinery Group was excellent from the very first interaction.What stood out most wasn’t just the machine quality, but also their punctual delivery and strong after-sales support.Their team was present during installation and commissioning, making sure everything was running perfectly.If you're looking to upgrade your production line, I highly recommend working with them — a company you can truly rely on.",
    position: "Chairman of Organic pharma"
  },
];


const Testimonials = () => {
  SwiperCore.use([Pagination, Autoplay]);

  return (
    <section className="testimonials pb-12">
      <div className="section-head-info flex flex-col items-center justify-center text-center p-8">
        <p className="text-red-600 font-bold py-1">Testimonials</p>
        <h1 className="text-2xl	font-bold dark py-1">
          What Our Clients Say About Us
        </h1>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="h-[400px] lg:h-[300px]"
      >
        {testimonialsList.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <Testimonial testimonial={testimonial} />
            </SwiperSlide>
        ))}

       </Swiper>
    </section>
  );
};

export default Testimonials;
