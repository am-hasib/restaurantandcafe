import Image from "next/image";
import { singleProduct } from "@/data";
import PriceOption from "@/components/PriceOption";
const SingleProductPage = () => {
  return (
    <div className="p-4 flex flex-col md:flex-row  text-red-500 items-center justify-center">
      <div className="relative  w-full md:w-1/2 h-[50vh] md:flex-1">
        {singleProduct.img && (
          <Image
            src={singleProduct.img}
            alt=""
            fill
            className="object-contain"
          />
        )}
      </div>
      <div className=" flex flex-col text-left md:flex-1 gap-4">
        <h1 className="font-bold text-xl xl:text-3xl uppercase">
          {singleProduct.title}
        </h1>
        <p>{singleProduct.desc}</p>
        <PriceOption
          price={singleProduct.price}
          options={singleProduct.options}
          id={singleProduct.id}
        />
      </div>
    </div>
  );
};

export default SingleProductPage;
