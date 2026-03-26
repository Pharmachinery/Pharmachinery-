import React from "react";

const ProjectSection = ({ img, title, description, size }) => {
  return (
    <div className="border-2 border-red-400 rounded-2xl p-6 shadow-sm hover:shadow-lg transition bg-white text-center">

      {/* اللوجو */}
    <div className=" logo-card-pro inline-block p-6 rounded-xl border border-red-200">
  <img
    src={img}
    alt={title}
    className={`${size || "h-32"} object-contain`}
  />
</div>

      {/* العنوان */}
      <h2 className="text-lg font-semibold text-[#b30000] mb-2">
        {title}
      </h2>

      {/* الوصف */}
      <p className="text-gray-600 text-sm">
        {description}
      </p>

    </div>
  );
};

export default ProjectSection;