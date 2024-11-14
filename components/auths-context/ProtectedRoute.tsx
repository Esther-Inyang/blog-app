"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import React from "react";

interface RouteProps {
  children?: React.ReactNode;
}

const ProtectedRoute: React.FC<RouteProps> = ({ children }) => {
  const token = localStorage.getItem("token");
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/auth/login");
    }
  }, [token, router]);

  return <div>{children}</div>;
};

export default ProtectedRoute;
