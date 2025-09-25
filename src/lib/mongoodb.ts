import mongoose from "mongoose";

const MONGODB_URI: string = process.env.DATABASE_URL!;

if (!MONGODB_URI) {
  throw new Error("Please define the DATABASE_URL environment variable");
}

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

// Use const instead of let
const cached: MongooseCache = globalThis.mongooseCache ?? { conn: null, promise: null };

export async function connectToDatabase(): Promise<typeof mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  globalThis.mongooseCache = cached;
  return cached.conn;
}
