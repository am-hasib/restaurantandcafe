"use client";
import { useEffect, useState } from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};
const PriceOption = ({ price, id, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selectedItem, setSelectedItem] = useState(0);
  useEffect(() => {
    setTotal(
      quantity *
        (options ? options[selectedItem].additionalPrice + price : price)
    );
  }, [price, quantity, selectedItem, options]);

  return (
    <div className=" flex flex-col gap-5">
      <h2 className="font-bold text-xl">{total.toFixed(2)}</h2>
      <div className="flex gap-3">
        {/* OPTION CONTAINER */}
        {options?.map((option, index) => (
          <button
            key={option.title}
            className="min-w-[5rem] ring-1 ring-red-500 p-2 rounded-md "
            style={{
              background: selectedItem === index ? "rgb(239 68 68)" : "white",
              color: selectedItem === index ? "white" : "rgb(239 68 68)",
            }}
            onClick={() => setSelectedItem(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      <div className="flex ">
        <div className="flex items-center p-2 ring-1 ring-red-500 rounded-md">
          <span>Quantity</span>
          <div className="">
            <button
              className="text-2xl px-2"
              style={{ lineHeight: 0 }}
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {"+"}
            </button>
            <span>{quantity}</span>
            <button
              className="text-2xl px-2"
              style={{ lineHeight: 0 }}
              onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
            >
              {"-"}
            </button>
          </div>
        </div>

        <button className="min-w-[6rem] bg-red-500 text-white p-1 rounded-md ml-3 ring-1 ring-red-500">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default PriceOption;
