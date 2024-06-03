"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    if (name) {
      router.push(`/list?name=${name}`);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-1 items-center justify-between gap-4 bg-gray-300 p-2 rounded-md"
    >
      <input
        name="name"
        type="text"
        placeholder="Search"
        className="flex-1 bg-transparent outline-none"
      />
      <button className="cursor-pointer">
        <Image src={"/search.png"} alt="Search" width={16} height={16} />
      </button>
    </form>
  );
}
