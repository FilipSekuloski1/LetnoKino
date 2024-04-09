import React from "react";
import Cinema from "../images/cinema1.jpg";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/* Overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-normal">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Најдоброто <span className="text-black">Кино</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl ">
            <span className="text-black">Под Отворено </span> Небо
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src={Cinema}
          alt="/"
        />
      </div>
    </div>
  );
};

export default Hero;
