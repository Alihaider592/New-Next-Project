"use client";

import { useState } from "react";

export default function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // 🖼️ Upload Image to Cloudinary
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setMessage("📤 Uploading image...");

    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_PRESET as string
    );

    try {
      const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD as string;

      if (!cloudName || !process.env.NEXT_PUBLIC_CLOUDINARY_PRESET) {
        setMessage("❌ Missing Cloudinary environment variables!");
        return;
      }

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        { method: "POST", body: formData }
      );

      const text = await res.text(); // First read as plain text
      try {
        const data = JSON.parse(text);
        if (data.secure_url) {
          setImageUrl(data.secure_url);
          setMessage("✅ Image uploaded successfully!");
        } else {
          console.error("Cloudinary error:", data);
          setMessage("❌ Upload failed: " + (data.error?.message || "Unknown error"));
        }
      } catch (jsonErr) {
        console.error("❌ Invalid Cloudinary JSON:", text);
        setMessage("❌ Upload failed — invalid response from Cloudinary.");
      }
    } catch (err) {
      console.error("Upload error:", err);
      setMessage("❌ Upload failed, try again.");
    }
  };

  // ✍️ Create Post
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !description || !imageUrl) {
      setMessage("⚠️ All fields are required!");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, imageUrl }),
      });

      const text = await res.text(); // again, safer way
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        console.error("Invalid JSON from /api/posts:", text);
        throw new Error("Server returned invalid JSON");
      }

      if (res.ok) {
        setMessage("✅ Post created successfully!");
        setTitle("");
        setDescription("");
        setImageUrl("");
      } else {
        setMessage(`❌ ${data.message || "Failed to create post."}`);
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Something went wrong while creating the post.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-200 to-pink-100 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg space-y-6 animate-fadeIn"
      >
        <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-6">
          📝 Create a New Blog Post
        </h1>

        <input
          type="text"
          placeholder="Enter post title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none text-gray-800"
        />

        <textarea
          placeholder="Write a description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 h-32 resize-none focus:ring-2 focus:ring-indigo-500 outline-none text-gray-800"
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full border border-gray-300 rounded-lg p-3 cursor-pointer text-gray-700 bg-gray-50 hover:bg-gray-100 transition"
        />

        {imageUrl && (
          <div className="w-full mt-4">
            <img
              src={imageUrl}
              alt="Preview"
              className="w-full h-56 object-cover rounded-lg border border-gray-300 shadow-md"
            />
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 mt-3 rounded-lg font-semibold transition-all duration-300 shadow-md ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700 text-white"
          }`}
        >
          {loading ? "Posting..." : "✨ Create Post"}
        </button>

        {message && (
          <p
            className={`text-center text-sm font-medium mt-3 ${
              message.startsWith("✅")
                ? "text-green-600"
                : message.startsWith("❌")
                ? "text-red-500"
                : "text-gray-700"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
