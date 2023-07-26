import { menu } from "@/data";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  return (
    <div className="py-2 px-2 md:px-4 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-8rem)] flex flex-col md:flex-row items-center ">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="flex flex-col h-1/3 w-full md:h-1/2 md:w-1/3 xl:h-[70vh]"
          style={{
            backgroundImage: `url(${category.img})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            filter: "blur()",
          }}
        >
          <div className={`h-1/3 w-full p-4 xl:p-8 flex flex-col `}>
            <h1
              className={`font-bold text-3xl text-${category.color} uppercase mb-3`}
            >
              {category.title}
            </h1>
            <p className={`text-sm text-${category.color} capitalize `}>
              {category.desc}
            </p>{" "}
            {/*  */}
            <button
              className={`absolute bottom-4 left-8 hidden xl:block px-4 py-2 rounded-md mt-5 text-xl
              text-${category.color == "black" ? "white" : "black"} bg-${
                category.color != "black" ? "white" : "black"
              } text-white bg-black`}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default page;
