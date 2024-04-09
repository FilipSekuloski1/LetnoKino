import React, { useState } from "react";
import { data } from "../data/data";
const Movies = () => {
  //console.log(data);
  const [movies, setMovies] = useState(data);

  // Filter Type Action, Drama,History, Comedy etc
  const filterType = (category) => {
    setMovies(
      data.filter((item) => {
        return item.category == category;
      })
    );
  };

  //Filter by Rating
  const filterRating = (rating) => {
    setMovies(
      data.filter((item) => {
        return item.price == rating;
      })
    );
  };
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-black font-bold text-4xl text-center">
        Најдобро рангирани филмови
      </h1>
      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-black">Филтрирај Жанр</p>
          <div className="flex justify-between flex-wrap max-w-[590px] w-full">
            <button
              onClick={() => setMovies(data)}
              className="m-1 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white"
            >
              Сите
            </button>
            <button
              onClick={() => filterType("action")}
              className="m-1 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white"
            >
              Акција
            </button>
            <button
              onClick={() => filterType("drama")}
              className="m-1 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white"
            >
              Драма
            </button>
            <button
              onClick={() => filterType("history")}
              className="m-1 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white"
            >
              Историски
            </button>
            <button
              onClick={() => filterType("comedy")}
              className="m-1 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white"
            >
              Комедија
            </button>
          </div>
        </div>
        {/* Filter Price */}
        <div>
          <p className="font-bold text-black">Филтрирај Рејтинг</p>
          <div className="flex justify-between max-w-[600px] w-full">
            <button
              onClick={() => filterRating("⭐")}
              className="m-1 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white"
            >
              ⭐
            </button>
            <button
              onClick={() => filterRating("⭐⭐")}
              className="m-1 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white"
            >
              ⭐⭐
            </button>
            <button
              onClick={() => filterRating("⭐⭐⭐")}
              className="m-1 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white"
            >
              ⭐⭐⭐
            </button>
            <button
              onClick={() => filterRating("⭐⭐⭐⭐")}
              className="m-1 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white"
            >
              ⭐⭐⭐⭐
            </button>
            <button
              onClick={() => filterRating("⭐⭐⭐⭐⭐")}
              className="m-1 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white"
            >
              ⭐⭐⭐⭐⭐
            </button>
          </div>
        </div>
      </div>

      {/* Display Movies */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {movies.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span /*className="bg-blue-500 text-white p-1 rounded-full"*/>
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
