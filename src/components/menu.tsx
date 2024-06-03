"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <div className=" ">
      <Image
        src={"/menu.png"}
        alt="Menu Image"
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute flex flex-col justify-center items-center gap-8 left-0 top-20 z-10 w-full h-[calc(100vh-80px)] text-xl font-semibold bg-slate-500 text-white">
          <Link href={"/"}>Home</Link>
          <Link href={"/shop"}>Shop</Link>
          <Link href={"/deals"}>Deals</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/logout"}>Logout</Link>
          <Link href={"/cart"}>Cart(1)</Link>
        </div>
      )}
    </div>
  );
}
