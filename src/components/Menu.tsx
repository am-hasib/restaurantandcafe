"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hour", url: "/" },
  { id: 4, title: "Contact", url: "/contact" },
];
const Menu = () => {
  const [open, setOpen] = useState(false);
  const user = false; /* temporary */
  return (
    <div className="">
      {!open ? (
        <Image
          src="/open.png"
          alt="Menu Open Icon"
          width={20}
          height={20}
          className="cursor-pointer"
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt="Menu Open Icon"
          width={20}
          height={20}
          className="cursor-pointer"
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div className="absolute h-[calc(100vh-6rem)] uppercase top-24 left-0 w-full bg-red-500 z-10 flex flex-col gap-8 items-center justify-center text-white text-xl tracking-wide">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              {" "}
              Login{" "}
            </Link>
          ) : (
            <Link href="/orders" onClick={() => setOpen(false)}>
              {" "}
              Orders{" "}
            </Link>
          )}

          <Link href="/cart" onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
