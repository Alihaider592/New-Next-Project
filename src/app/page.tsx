"use client";
import { useEffect, useState } from "react";
import Hero from "./components/hero";

interface Post {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("/api/posts");
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error("Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-200 to-pink-100 p-10">
      <Hero/>
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="text-5xl font-extrabold text-indigo-700">
          {/* Welcome To My Blog! */}
        </h1>
        <h2 className="text-2xl mt-3 text-gray-700">
          {/* This is a Next.js blog 📝 */}
        </h2>
      </div>

      {loading ? (
        <p className="text-center text-lg text-gray-600">Loading posts...</p>
      ) : posts.length === 0 ? (
        <p className="text-center text-lg text-gray-600">
          No posts available. Be the first to create one!
        </p>
      ) : (
        <div>
          <p className="text-4xl font-bold text-indigo-700 mb-4">Latest Posts</p>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-indigo-700 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      )}
    </div>
  );
}
