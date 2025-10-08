"use client";

import { useEffect, useState } from "react";

// Define a type for your Post model
interface Post {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  createdAt?: string;
  updatedAt?: string;
}

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]); // 👈 typed array

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/posts");
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data: Post[] = await res.json(); // 👈 typed response
        setPosts(data);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 p-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-indigo-700">📚 All Blog Posts</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-all"
          >
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm line-clamp-3">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
