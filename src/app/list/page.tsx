import Filter from "@/components/filter";
import ProductList from "@/components/product-list";
import Image from "next/image";

export default function ListPage() {
  return (
    <div className="relative px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* Campain */}
      <div className="hidden md:flex justify-between h-64 px-4 bg-pink-50">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on <br /> Selected Products
          </h1>
          <button className="w-max px-5 py-3 rounded-3xl bg-fixedColor text-white text-sm">
            Buy Now
          </button>
        </div>
        <div className="relative w-1/3">
          <Image src="/woman.png" alt="" fill className="object-contain" />
        </div>
      </div>
      {/* Filter */}
      <Filter />
      {/* Products */}
      <h1 className="mt-12 text-xl font-semibold">Shoes For You!</h1>
      <ProductList />
    </div>
  );
}
