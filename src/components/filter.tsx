export default function Filter() {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex flex-wrap gap-6 ">
        <select
          name="type"
          id=""
          className="px-4 py-2 rounded-2xl text-sm font-medium bg-gray-100"
        >
          <option>Type</option>
          <option value={"physical"}>physical</option>
          <option value={"digital"}>Digital</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400 "
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400 "
        />

        <select
          name="size"
          id=""
          className="px-4 py-2 rounded-2xl text-sm font-medium bg-gray-100"
        >
          <option>Size</option>
          <option value={""}>Size</option>
        </select>
        <select
          name="color"
          id=""
          className="px-4 py-2 rounded-2xl text-sm font-medium bg-gray-100"
        >
          <option>Color</option>
          <option value={""}>Test</option>
        </select>
        <select
          name="ribbon"
          id=""
          className="px-4 py-2 rounded-2xl text-sm font-medium bg-gray-100"
        >
          <option>Category</option>
          <option value={""}>New Arrival</option>
          <option value={""}>Popular</option>
        </select>
        <select
          name=""
          id=""
          className="px-4 py-2 rounded-2xl text-sm font-medium bg-gray-100"
        >
          <option>All Filters</option>
        </select>
      </div>
      <div className="">
        <select
          name=""
          id=""
          className="px-4 py-2 rounded-2xl text-sm font-medium bg-gray-100"
        >
          <option>Sort By</option>
          <option value={""}>Price (low to high)</option>
          <option value={""}>Price (high to low)</option>
          <option value={""}>Newest</option>
          <option value={""}>Oldest</option>
        </select>
      </div>
    </div>
  );
}
