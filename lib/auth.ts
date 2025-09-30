"use client";

import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

interface JWTPayload {
  adminId: string;
  email: string;
  role: string;
  exp: number;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("access-token");
    if (token) {
      try {
        const decoded = jwtDecode<JWTPayload>(token);

        if (decoded.exp * 1000 < Date.now()) {
          localStorage.removeItem("access-token");
        } else {
          setUser({
            id: decoded.adminId,
            email: decoded.email,
            name: decoded.email.split("@")[0],
            role: decoded.role,
          });
        }
      } catch {
        localStorage.removeItem("access-token");
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    
    
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) return false;

      const data = await res.json();
      if (!data.token) return false;

      localStorage.setItem("access-token", data.token);

      const decoded = jwtDecode<JWTPayload>(data.token);
      setUser({
        id: decoded.adminId,
        email: decoded.email,
        name: decoded.email.split("@")[0],
        role: decoded.role,
      });

      return true;
    } catch (err) {
      console.error("Login failed:", err);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("access-token");
    setUser(null);
  };

  const getAuthHeaders = (): Record<string, string> => {
    const token = localStorage.getItem("access-token");
    return token ? { Authorization: `Bearer ${token}` } : {};
  };

  return {
    user,
    loading,
    login,
    logout,
    getAuthHeaders,
    isAuthenticated: !!user,
  };
}
