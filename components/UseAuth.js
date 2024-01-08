// useAuth.js
import { useAuth as useClerkAuth } from "@clerk/nextjs";

export default function useAuth() {
  return useClerkAuth();
}
