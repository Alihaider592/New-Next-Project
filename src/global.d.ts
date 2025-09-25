import mongoose from "mongoose";

declare global {
  // This tells TypeScript that global.mongoose exists
  // and has a connection and promise for caching
  var mongoose: { conn?: typeof mongoose | null; promise?: Promise<typeof mongoose> } | undefined;
}
