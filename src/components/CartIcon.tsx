import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  return (
    <Link href="/cart" className="flex justify-center items-center gap-4">
      <div className="relative h-6 w-6">
        <Image src="/cart.png" alt="cart icon" fill />
      </div>
      <span>Cart (3)</span>
    </Link>
  );
};

export default CartIcon;
