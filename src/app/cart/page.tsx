import Image from "next/image";

const CartPage = () => {
  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-6rem)] md:h-[calc(100vh-8rem)] text-red-500">
      {/* Product Container */}
      <div className=" h-1/2 w-full p-4 flex flex-col  justify-top items-center 2xl:justify-center  overflow-y-auto lg:h-full lg:w-2/3 xl:w-1/2 gap-4 lg:px-20 xl:px-40 ">
        {/* Single Product */}
        <div className="flex w-full gap-8 md:gap-20 lg:gap-8 items-start justify-center lg:justify-between  ">
          <div className="relative w-[50px] h-[50px] lg:h-[100px] lg:w-[100px] ">
            <Image
              src="/temporary/p1.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-1 item-start">
            <h1 className="text-red-500 font-bold text-md lg:text-xl">
              Sicilian
            </h1>
            <span className="text-red-500 text-md lg:text-xl">Large </span>
          </div>
          <span className="text-red-500 font-bold text-md lg:text-xl">
            $12.90
          </span>
          <button className="bg-red-500 p-1 md:p-2 text-white rounded-md">
            {"x"}
          </button>
        </div>
        {/* Single Product */}
        <div className="flex w-full gap-8 md:gap-20 lg:gap-8  items-start justify-center lg:justify-between  ">
          <div className="relative w-[50px] h-[50px] lg:h-[100px] lg:w-[100px]">
            <Image
              src="/temporary/p1.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-1 item-start">
            <h1 className="text-red-500 font-bold text-md lg:text-xl">
              Sicilian
            </h1>
            <span className="text-red-500 text-md lg:text-xl">Large </span>
          </div>
          <span className="text-red-500 font-bold text-md lg:text-xl">
            $12.90
          </span>
          <button className="bg-red-500 p-1 md:p-2 text-white rounded-md">
            {"x"}
          </button>
        </div>
        {/* Single Product */}
        <div className="flex w-full gap-8 md:gap-20 lg:gap-8  items-start justify-center lg:justify-between  ">
          <div className="relative w-[50px] h-[50px] lg:h-[100px] lg:w-[100px]">
            <Image
              src="/temporary/p1.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-1 item-start">
            <h1 className="text-red-500 font-bold text-md lg:text-xl">
              Sicilian
            </h1>
            <span className="text-red-500 text-md lg:text-xl">Large </span>
          </div>
          <span className="text-red-500 font-bold text-md lg:text-xl">
            $12.90
          </span>
          <button className="bg-red-500 p-1 md:p-2 text-white rounded-md">
            {"x"}
          </button>
        </div>
        {/* Single Product */}
        <div className="flex w-full gap-8 md:gap-20 lg:gap-8  items-start justify-center lg:justify-between  ">
          <div className="relative w-[50px] h-[50px] lg:h-[100px] lg:w-[100px]">
            <Image
              src="/temporary/p1.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-1 item-start">
            <h1 className="text-red-500 font-bold text-md lg:text-xl">
              Sicilian
            </h1>
            <span className="text-red-500 text-md lg:text-xl">Large </span>
          </div>
          <span className="text-red-500 font-bold text-md lg:text-xl">
            $12.90
          </span>
          <button className="bg-red-500 p-1 md:p-2 text-white rounded-md">
            {"x"}
          </button>
        </div>
        {/* Single Product */}
        <div className="flex w-full gap-8 md:gap-20 lg:gap-8  items-start justify-center lg:justify-between  ">
          <div className="relative w-[50px] h-[50px] lg:h-[100px] lg:w-[100px]">
            <Image
              src="/temporary/p1.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-1 item-start">
            <h1 className="text-red-500 font-bold text-md lg:text-xl">
              Sicilian
            </h1>
            <span className="text-red-500 text-md lg:text-xl">Large </span>
          </div>
          <span className="text-red-500 font-bold text-md lg:text-xl">
            $12.90
          </span>
          <button className="bg-red-500 p-1 md:p-2 text-white rounded-md">
            {"x"}
          </button>
        </div>
      </div>
      {/* Checkout Container */}
      <div className="h-1/2 w-full p-4 bg-fuchsia-50 flex flex-col gap-4 justify-top lg:justify-center lg:h-full lg:w-1/3 xl:w-1/2 lg:px-20 xl:px-40 xl:text-xl 2xl:gap-6">
        <div className="flex w-full justify-between ">
          <span className="text-md">Subtotal (4 Items )</span>
          <span className="font-bold text-md">$84.90</span>
        </div>
        <div className="flex w-full justify-between">
          <span className="text-md ">Service Cost</span>
          <span className="font-bold text-md">$0.00</span>
        </div>
        <div className="flex w-full justify-between">
          <span className="text-md ">Delivery Cost</span>
          <span className="font-bold text-md text-teal-500">FREE</span>
        </div>
        <div className="flex justify-between w-full gap-2 md:gap-6">
          <input
            type="text"
            placeholder="coupon"
            className="p-2  ring-1 ring-red-500 rounded-md hover:outline-none w-2/3"
          />
          <button className="p-2 bg-red-500 rounded-md text-white w-1/3">
            Submit
          </button>
        </div>
        <hr className="w-full my-4" />
        <div className="flex w-full justify-between">
          <span className="text-md font-bold">TOTAL</span>
          <span className="font-bold text-md">$84.90</span>
        </div>
        <button className="bg-red-500 p-2 w-1/2 text-white rounded-md self-end">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
