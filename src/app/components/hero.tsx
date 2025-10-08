"use client";

import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <div className=" h-[80%] flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-200 to-pink-100 text-center p-6">
      <h1 className=" text-5xl font-extrabold text-indigo-700 mb-4">
        Welcome to My Blog!
      </h1>
      <h2 className="text-2xl text-gray-700 mb-10">
        This is a Next.js blog built with ❤️
      </h2>

      <button
        onClick={() => router.push("/create-post")}
        className="px-8 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-indigo-700 active:scale-95 transition-transform duration-200"
      >
        ➕ Create Post
      </button>
    </div>
  );
}
