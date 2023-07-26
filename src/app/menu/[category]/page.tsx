import React from "react";
import { pizzas } from "@/data";
import Link from "next/link";
import Image from "next/image";
const CategoryPage = () => {
  return (
    <div className="flex flex-wrap text-red-500">
      {pizzas.map((item) => (
        <Link
          key={item.id}
          href={`/product/${item.id}`}
          className="flex flex-col justify-between p-4 h-[60vh] w-full sm:w-1/2 xl:w-1/3 border-r-[1px] border-b-[1px] border-red-500 odd:bg-fuchsia-100 group "
        >
          {/* Image Container */}
          <div className="relative h-[80%] w-full">
            <Image src={item.img!} alt="" fill className="object-contain" />
          </div>
          {/* Text Container */}
          <div className="flex items-center justify-between w-full  ">
            <h1 className="font-bold text-xl ">{item.title}</h1>
            <h2 className="font-bold text-sm group-hover:hidden">
              ${item.price}
            </h2>
            <button className="px-[4px] py-[2px] text-sm bg-red-500 rounded-md border-none text-white hidden group-hover:block">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
