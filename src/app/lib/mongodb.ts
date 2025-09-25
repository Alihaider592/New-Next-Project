import mongoose from "mongoose";

const MONGODB_URI = process.env.DATABASE_URL;

if (!MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

// Define the type for the cache
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Extend globalThis with a typed mongoose cache
declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

const cached = globalThis.mongooseCache;

if (!globalThis.mongooseCache) {
  globalThis.mongooseCache = { conn: null, promise: null };
}



export async function connectToDatabase(): Promise<typeof mongoose> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI)
      .then((mongoose) => mongoose)
      .catch((err) => {
        cached.promise = null; // reset promise on failure
        console.error("MongoDB connection error:", err);
        throw err; // rethrow to propagate error
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
