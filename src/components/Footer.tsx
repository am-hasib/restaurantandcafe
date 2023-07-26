import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-12 w-full md:h-20 mt-[50px] flex flex-col">
      <hr className="w-full h-[2px] bg-red-500 my-4" />
      <div className="flex justify-between items-center text-sm py-2 px-2 md:px-10 lg:px-20 xl:px-40">
        <Link href="/" className="text-red-500 font-bold md:text-lg lg:text-xl">
          Cafe & Restaurant
        </Link>
        <span>All Right Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
