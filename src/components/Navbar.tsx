import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";
import CartIcon from "./CartIcon";

const Navbar = () => {
  const user = true;
  return (
    <div className="flex items-center justify-between h-12 md:h-20 border-b-2 border-b-red-300 font-normal text-base py-2 px-2 md:px-4  xl:px-40">
      {/* Left Links */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>
      {/* Logo */}
      <div className="text-red-500 font-bold flex-1 text-left md:text-center text-lg md:text-xl">
        <Link href="/">Cafe & Restaurant</Link>
      </div>
      {/* Menu */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* Right Links */}
      <div className="hidden md:flex items-center gap-4 flex-1 justify-end">
        <div className="md:absolute top-2 right-2 lg:static flex items-center bg-orange-300 p-1 rounded-lg gap-3 cursor-pointer">
          <Image
            src="/phone.png"
            alt="Customer care phone number"
            width={20}
            height={20}
          />
          <span className="phone">123 456 789</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}

        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
