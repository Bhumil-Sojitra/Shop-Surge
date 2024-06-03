import Image from "next/image";
import Link from "next/link";

export default function ProductList() {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap ">
      <Link
        href="/1"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] "
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="No Product Image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="No Product Image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md "
          />
        </div>
        <div className="flex justify-between ">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$50</span>
        </div>
        <div className="text-sm text-gray-500">Product Descption</div>
        <button className="w-max py-2 px-4 rounded-2xl ring-1 ring-fixedColor text-fixedColor text-sm hover:bg-fixedColor hover:text-white ">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/2"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] "
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="No Product Image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="No Product Image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md "
          />
        </div>
        <div className="flex justify-between ">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$50</span>
        </div>
        <div className="text-sm text-gray-500">Product Descption</div>
        <button className="w-max py-2 px-4 rounded-2xl ring-1 ring-fixedColor text-fixedColor text-sm hover:bg-fixedColor hover:text-white ">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/2"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] "
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="No Product Image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="No Product Image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md "
          />
        </div>
        <div className="flex justify-between ">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$50</span>
        </div>
        <div className="text-sm text-gray-500">Product Descption</div>
        <button className="w-max py-2 px-4 rounded-2xl ring-1 ring-fixedColor text-fixedColor text-sm hover:bg-fixedColor hover:text-white ">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/2"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] "
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="No Product Image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="No Product Image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md "
          />
        </div>
        <div className="flex justify-between ">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$50</span>
        </div>
        <div className="text-sm text-gray-500">Product Descption</div>
        <button className="w-max py-2 px-4 rounded-2xl ring-1 ring-fixedColor text-fixedColor text-sm hover:bg-fixedColor hover:text-white ">
          Add to Cart
        </button>
      </Link>
    </div>
  );
}
