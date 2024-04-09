import React from "react";
import Cinema1 from "../images/cinema.jpg";
import Movie1 from "../images/movie1.jpg";
import Movie2 from "../images/movie2.jpg";
import Movie3 from "../images/movie3.jpg";
import Movie4 from "../images/movie4.jpg";
import Movie5 from "../images/movie5.jpg";
import Movie6 from "../images/movie6.jpg";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">БЕДНИ СУШТЕСТВА</p>
          <p className="px-2">ПОЧЕТОК НА ФИЛМСКАТА ПРОЕКЦИЈА: 18.01.2024</p>
          <button className="border-white bg-white text-black mx-2 bottom-4 absolute">
            Купи карта
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full"
          src={Movie1}
          alt="/"
        />
      </div>
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">МАДАМ ВЕБ</p>
          <p className="px-2">ПОЧЕТОК НА ФИЛМСКАТА ПРОЕКЦИЈА: 15.02.2024</p>
          <button className="border-white bg-white text-black mx-2 bottom-4 absolute">
            Купи карта
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover"
          src={Movie2}
          alt="/"
        />
      </div>
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">ДИНА ВТОР ДЕЛ</p>
          <p className="px-2">ПОЧЕТОК НА ФИЛМСКАТА ПРОЕКЦИЈА: 29.02.2024</p>
          <button className="border-white bg-white text-black mx-2 bottom-4 absolute">
            Купи карта
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover"
          src={Movie3}
          alt="/"
        />
      </div>
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">ЗАМИСЛЕН</p>
          <p className="px-2">ПОЧЕТОК НА ФИЛМСКАТА ПРОЕКЦИЈА: 07.03.2024</p>
          <button className="border-white bg-white text-black mx-2 bottom-4 absolute">
            Купи карта
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover"
          src={Movie4}
          alt="/"
        />
      </div>
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">КУНГ-ФУ ПАНДА 4</p>
          <p className="px-2">ПОЧЕТОК НА ФИЛМСКАТА ПРОЕКЦИЈА: 07.03.2024</p>
          <button className="border-white bg-white text-black mx-2 bottom-4 absolute">
            Купи карта
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover"
          src={Movie5}
          alt="/"
        />
      </div>
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">ЗЕМЈА НА ЗЛОТО</p>
          <p className="px-2">ПОЧЕТОК НА ФИЛМСКАТА ПРОЕКЦИЈА: 14.03.2024</p>
          <button className="border-white bg-white text-black mx-2 bottom-4 absolute">
            Купи карта
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover"
          src={Movie6}
          alt="/"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
