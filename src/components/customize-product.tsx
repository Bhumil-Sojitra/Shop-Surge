export default function CustomizeProduct() {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium">Choose a Color</h4>
      <ul className="flex items-center gap-3">
        <li className="relative w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer bg-red-500">
          <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </li>
        <li className="relative w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer bg-blue-500"></li>
        <li className="relative w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed bg-green-500">
          <div className="absolute w-10 h-[2px] bg-red-500 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </li>
      </ul>
      <h4 className="font-medium ">Choose a Size</h4>
      <ul className="flex items-center gap-3 font-medium">
        <li className="px-4 py-1 ring-1 ring-fixedColor bg-fixedColor text-white rounded-md cursor-not-allowed opacity-30">
          Large
        </li>
        <li className="px-4 py-1 ring-1 ring-fixedColor bg-white text-fixedColor rounded-md cursor-pointer">
          Medium
        </li>
        <li className="px-4 py-1 ring-1 ring-fixedColor bg-fixedColor text-white rounded-md cursor-pointer">
          Small
        </li>
      </ul>
    </div>
  );
}
