import { connectToDatabase } from "../../lib/mongodb";
import User from "@/app/models/User";

export async function POST(req: Request) {
  try {
    await connectToDatabase();

    
    const body: Partial<{ name: string; email: string; image?: string }> = await req.json();

    
    if (!body.name || !body.email) {
      return new Response(
        JSON.stringify({ error: "Name and email are required" }),
        { status: 400 }
      );
    }

    
    const user = await User.create(body);

    return new Response(JSON.stringify(user), { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), { status: 500 });
  }
}
