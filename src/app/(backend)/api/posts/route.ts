import { NextResponse } from "next/server";
import post from "../../models/post";
import { connectToDatabase } from "@/lib/mongoodb";
// Handle POST request — create a new post
export async function POST(req: Request) {
  try {
    await connectToDatabase();

    const { title, description, imageUrl } = await req.json();

    if (!title || !description || !imageUrl) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const newPost = await post.create({ title, description, imageUrl });
    return NextResponse.json(
      { message: "✅ Post created successfully", post: newPost },
      { status: 201 }
    );
  } catch (err) {
    console.error("❌ Error creating post:", err);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}

// Handle GET request — fetch all posts
export async function GET() {
  try {
    await connectToDatabase();
    const posts = await post.find().sort({ createdAt: -1 });
    return NextResponse.json(posts);
  } catch (err) {
    console.error("❌ Error fetching posts:", err);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
