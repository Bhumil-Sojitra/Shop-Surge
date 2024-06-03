"use client";
import { useState } from "react";

export default function Add() {
  const [quantity, setQuantity] = useState(1);
  const stock = 4;
  const handleQuantity = (type: "-" | "+") => {
    if (type === "-" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "+" && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-semibold">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="w-32 flex flex-row items-center justify-center gap-6 text-lg bg-gray-200 rounded-full px-4 py-2">
            <button onClick={() => handleQuantity("-")}>-</button>
            <div className="">{quantity}</div>
            <button onClick={() => handleQuantity("+")}>+</button>
          </div>
          <div className="">
            <p>
              Only <span className="text-orange-500">4 items left!</span>
            </p>
            <p>{"Don't"} miss it </p>
          </div>
        </div>

        <button className="px-6 py-2 rounded-full cursor-pointer ring-1 ring-fixedColor bg-white text-fixedColor hover:bg-fixedColor hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:text-white disabled:ring-0">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
