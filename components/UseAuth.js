// useAuth.js
import { useAuth as useClerkAuth } from "@clerk/nextjs";

export function useAuth() {
  return useClerkAuth();
}
