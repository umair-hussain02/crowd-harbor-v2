import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;
if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Use global object to maintain cache across hot reloads in development
let cached: MongooseCache;

if (!(global as any)._mongooseCache) {
  (global as any)._mongooseCache = { conn: null, promise: null } as MongooseCache;
}
cached = (global as any)._mongooseCache;

export default async function connectDB(): Promise<typeof mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts: mongoose.ConnectOptions = {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts)
      .then((mongooseInstance) => {
        console.log("✅ MongoDB connected");
        return mongooseInstance;
      })
      .catch((err) => {
        console.error("❌ MongoDB connection error:", err);
        cached.promise = null; // reset so future calls can retry
        throw err;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
