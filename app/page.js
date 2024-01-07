"use client";
import { UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
const metadata = {
  title: 'Home page | nextjs notes app',
}
export default function Home() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { user } = useUser();
  return (
    <div className="break-words text-wrap w-full">
      {userId}
      <br />
      {sessionId}
      <br />
      {JSON.stringify(user)}
      <br />
      <br />
      <br />
    </div>
  )
}