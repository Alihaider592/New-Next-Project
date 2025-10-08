"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] text-center overflow-hidden bg-gradient-to-br from-indigo-100 via-purple-200 to-pink-100">
      {/* ✨ Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob top-0 left-0"></div>
        <div className="absolute w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 top-10 right-0"></div>
        <div className="absolute w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 bottom-0 left-1/2"></div>
      </div>

      {/* 🌟 Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-700 mb-4 drop-shadow-lg">
          Welcome to <span className="text-pink-600">My Blog!</span>
        </h1>
        <h2 className="text-2xl text-gray-700 mb-10 font-medium">
          Share your stories, ideas, and creativity with the world 🌍
        </h2>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/create-post")}
          className="px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          ➕ Create a Post
        </motion.button>
      </motion.div>

      {/* 👇 Add subtle scroll indicator */}
      <div className="absolute bottom-8 animate-bounce text-gray-600 text-sm">
        ↓ Scroll to explore posts ↓
      </div>
    </section>
  );
}
