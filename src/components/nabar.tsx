import Link from "next/link";
import Menu from "./menu";
import Image from "next/image";
import SearchBar from "./search-bar";
import Navbaricons from "./navbar-icons";

export default function Navbar() {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 relative bg-white text-black">
      {/* Samller Screens */}
      <div className="md:hidden flex h-full  items-center justify-between ">
        <Link href={"/"} className="flex gap-2">
          <Image src={"/logo.png"} alt="Logo" width={24} height={24} />

          <div className="text-2xl font-bold ">Shop Surge</div>
        </Link>
        <Menu />
      </div>

      {/* Bigger Screens */}

      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* Left side  */}

        <div className="w-1/3 xl:w-1/2 flex items-center gap-8  ">
          <Link href={"/"} className="flex gap-2">
            <Image src={"/logo.png"} alt="Logo" width={24} height={24} />
            <div className="text-2xl lg:text-base 2xl:text-2xl font-bold tracking-wide">
              Shop Surge
            </div>
          </Link>
          <div className="hidden xl:flex gap-4 text-lg">
            <Link href={"/"}>Home</Link>
            <Link href={"/shop"}>Shop</Link>
            <Link href={"/deals"}>Deals</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>
            <Link href={"/logout"}>Logout</Link>
            <Link href={"/cart"}>Cart(1)</Link>
          </div>
        </div>

        {/* Right side */}

        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <Navbaricons />
        </div>
      </div>
    </div>
  );
}
