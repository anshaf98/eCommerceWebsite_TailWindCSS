import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://images.pexels.com/photos/3465604/pexels-photo-3465604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5625005/pexels-photo-5625005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5126268/pexels-photo-5126268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3465604/pexels-photo-3465604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };

  return (
    <div className=" w-full h-[100vh] overflow-x-hidden">
      <div className=" w-screen h-[650px] relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className=" w-[400vw] h-[100vh] object-cover flex transition-transform duration-1000"
        >
          <img
            className=" w-screen h-[100vh] object-cover"
            src={data[0]}
            alt=""
            loading="priority"
          />
          <img
            className=" w-screen h-[100vh] object-cover"
            src={data[1]}
            alt=""
            loading="priority"
          />
          <img
            className=" w-screen h-[100vh] object-cover"
            src={data[2]}
            alt=""
            loading="priority"
          />
          <img
            className=" w-screen h-[100vh] object-cover"
            src={data[3]}
            alt=""
            loading="priority"
          />
        </div>
        {/* ARROW */}
        <div className=" absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
          <div
            onClick={prevSlide}
            className=" w-14 h-12 border-[1px] text-white border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <AiOutlineArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className=" w-14 h-12 border-[1px] text-white border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
