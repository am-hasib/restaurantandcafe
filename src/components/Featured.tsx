import Image from "next/image";
import React from "react";
import { featuredProducts } from "@/data";
const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500 ">
      <div className="w-max flex">
        {/* Single Product */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-100 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
            {/* Image Container */}
            <div className="relative w-full flex-1 md:flex-2 hover:rotate-[60deg] transition-all duration-300">
              {item.img && (
                <Image
                  src={item.img}
                  fill
                  className="object-contain"
                  alt="product image"
                />
              )}
            </div>
            {/* Text  Container */}
            <div className=" flex flex-col gap-4  flex-1  text-red-500 text-md items-center justify-center">
              <h1 className="font-bold text-xl lg:px-20">{item.title}</h1>
              <p className="font-medium text-md line-clamp-3 text-red-400 px-6">
                {item.desc}
              </p>
              <span className="font-bold text-lg">${item.price}</span>
              <button className="px-6 py-3 lg:px-8 lg:py-4 bg-red-500 text-white font-medium text-sm rounded-md hover:bg-none">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
