"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
const data = [
  {
    id: 1,
    image: "/slide1.png",
    title: "It's mean to always fresh, crispy and Hot",
  },
  {
    id: 2,
    image: "/slide2.png",
    title: "We Deliver in time whatever you want",
  },
  {
    id: 3,
    image: "/slide3.jpg",
    title: "Best Pizza for family to share",
  },
];
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  //   }, 4000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-6rem)] md:h-[calc(100vh-8rem)]">
      {/* Text Container */}
      <div className="flex flex-1 flex-col items-center justify-center gap-6 p-3">
        <h1 className="text-center capitalize text-red-500 font-bold  text-3xl md:text-6xl ">
          {data[currentSlide].title}
        </h1>
        <button className="border-none p-3 font-bold text-lg bg-red-500 text-white rounded-md">
          {" "}
          Order now
        </button>
      </div>
      {/* Image Container */}
      <div className=" relative object-top flex-1">
        <Image
          src={data[currentSlide].image}
          fill
          alt="SLider 1"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
