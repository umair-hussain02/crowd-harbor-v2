// lib/jwt.ts
import jwt, { JwtPayload } from "jsonwebtoken";

const JWT_SECRET =
  process.env.JWT_SECRET || "your-super-secret-jwt-key-change-in-production";
if (!JWT_SECRET) throw new Error("Missing JWT_SECRET in environment variables");

export interface JWTPayload extends JwtPayload {
  adminId: string;
  email: string;
  role: string;
}

export function signAccessToken(payload: JWTPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" }); // 1-day validity
}

export function verifyToken(token: string): JWTPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as JWTPayload;
  } catch {
    return null;
  }
}

export function getTokenFromRequest(request: Request): string | null {
  const authHeader = request.headers.get("authorization");
  if (authHeader?.startsWith("Bearer ")) {
    return authHeader.slice(7);
  }
  return null;
}
