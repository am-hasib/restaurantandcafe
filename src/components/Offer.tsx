import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";
const Offer = () => {
  return (
    <div className="h-screen bg-slate-900 text-white  text-center md:text-left  py-10 px-5 flex flex-col items-center md:justify-between md:flex-row gap-10 bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* Text Container */}
      <div className="flex flex-col gap-6 px-5 flex-1">
        <h1 className="capitalize font-bold text-3xl md:text-4xl">
          delicious burger & french fry
        </h1>
        <p className="capitalize text-[12px] md:text-[16px]">
          Progressively simplify effective e-tailers and proces centric method
          of emporwement. Quickly prtificate prarallel
        </p>
        <CountDown />
        <button className="mx-auto md:ml-0 px-6 py-3  bg-red-500 text-white font-medium text-sm rounded-md hover:bg-none">
          Order now{" "}
        </button>
      </div>
      {/* Image Container */}
      <div className="w-full relative h-1/2 flex-1 mt-5 ">
        <Image
          src="/offerProduct.png"
          alt="offer product image"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Offer;
