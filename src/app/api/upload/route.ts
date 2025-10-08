import { NextResponse } from "next/server";
import cloudinary from "cloudinary";


cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload to Cloudinary
    const uploadResponse = await cloudinary.v2.uploader.upload_stream(
      { folder: "nextjs-blogs" },
      (error, result) => {
        if (error || !result) {
          console.error("Cloudinary upload error:", error);
          return NextResponse.json({ error: "Upload failed" }, { status: 500 });
        }
        return NextResponse.json({ url: result.secure_url });
      }
    );

    const stream = uploadResponse;
    stream.end(buffer);
  } catch (err) {
    console.error("Upload route error:", err);
    return NextResponse.json({ error: "Failed to upload image" }, { status: 500 });
  }
}
