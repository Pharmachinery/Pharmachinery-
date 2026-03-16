import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

const Machine = ({ white, title, description, images, id, features, video }) => {
  return (
    <section id={id}  className="container mx-auto border border-red-500 rounded-2xl p-10 shadow-xl mb-20 transition duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-red-600">
      <div className="container mx-auto">
        {/* الكلام فوق */}
        <div className="machine-info p-4 text-center mb-10">
          <h1 className="font-bold text-3xl py-2">{title}</h1>
          <p className="py-1 max-w-4xl mx-auto">{description}</p>

          <button
            type="button"
            className="inline-block w-[224px] my-4 bg-red-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white"
          >
            <Link to="/contact">Request Technical Data</Link>
          </button>
        </div>

        {/* تحت: شمال فيديو / يمين صورة */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-10 p-4">
          <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src={video}
              title={title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

          <div className="w-full">
            <img
              src={images[0]}
              alt={title}
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* features */}
        <div className="features p-4">
          <h1 className="font-semibold text-xl py-2">Performance & Features</h1>

          <div className="lg:flex lg:justify-between">
            <div className="lg:w-[45%]">
              {features.map((feature, index) => {
                if (index <= 3) {
                  return (
                    <div className="feature py-2 flex" key={uuidv4()}>
                      <FontAwesomeIcon
                        className="text-white p-1 bg-red-600 rounded-full w-[20px] h-[20px]"
                        icon={faCheck}
                      />
                      <p className="pl-3">{feature}</p>
                    </div>
                  );
                }
                return null;
              })}
            </div>

            <div className="lg:w-[45%]">
              {features.map((feature, index) => {
                if (index > 3) {
                  return (
                    <div className="feature py-2 flex" key={uuidv4()}>
                      <FontAwesomeIcon
                        className="text-white p-1 bg-red-600 rounded-full w-[20px] h-[20px]"
                        icon={faCheck}
                      />
                      <p className="pl-3">{feature}</p>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Machine;