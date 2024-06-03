"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CartModel from "./cart-modal";

export default function Navbaricons() {
  const route = useRouter();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  //   TEMPORARY
  const isLoggedIn = true;

  const handleProfile = () => {
    if (!isLoggedIn) {
      route.push("/login");
    }
    setIsProfileOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center  gap-4 lg:gap-6 relative">
      <Image
        onClick={handleProfile}
        src={"/profile.png"}
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />
      {isProfileOpen && (
        <div className="absolute p-2 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white z-20">
          <Link href={"/"}>Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <Image
        src={"/notification.png"}
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div
        onClick={() => setIsCartOpen((prev) => !prev)}
        className="relative cursor-pointer"
      >
        <Image src={"/cart.png"} alt="" width={22} height={22} />
        <div className="absolute  -top-4 -right-4 w-6 h-6 flex items-center justify-center rounded-full text-sm text-white bg-fixedColor">
          1
        </div>
      </div>
      {isCartOpen && <CartModel />}
    </div>
  );
}
