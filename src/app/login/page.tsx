import Image from "next/image";

const LoginPage = () => {
  return (
    <div className=" md:px-20 lg:px-40 h-[calc(100vh-6rem)] md:h[calc(100vh-8rem)] p-4 flex items-center justify-center">
      {/* box */}
      <div className="flex flex-col md:flex-row h-full w-full shadow-xl rounded-xl bg-fuchsia-50 ">
        {/* Image container */}
        <div className="relative h-1/2 w-full md:h-full md:w-1/2 ">
          <Image src="/loginBg.png" fill alt="" className="object-cover" />
        </div>
        {/* Text container */}
        <div className="flex flex-col gap-4 h-[60vh] w-full lg:text-xl md:gap-8 p-8 md:h-full md:w-1/2 md:justify-center">
          <h1 className="font-bold text-xl md:text-3xl">Welcome</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, non?
          </p>
          <div className="relative flex  cursor-pointer gap-4 border-red-500 border-[1px] p-2">
            <Image
              src="/google.png"
              alt=""
              height={20}
              width={20}
              className="object-contain"
            />
            <span className="capitalize text-sm md:text-lg">
              {" "}
              Login with Google
            </span>
          </div>
          <div className="relative cursor-pointer flex  gap-4 border-red-500 border-[1px] p-2">
            <Image
              src="/facebook.png"
              alt=""
              height={20}
              width={20}
              className="object-contain"
            />
            <span className="capitalize text-sm md:text-lg">
              Login with facebook
            </span>
          </div>
          <div>
            <span>have a problem ?</span>
            <span className="underline cursor-pointer">contact us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
