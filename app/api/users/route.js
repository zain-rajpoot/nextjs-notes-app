import Database from "@/libs/database";
import { clerkClient } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request) {
    await Database()
    const users = await clerkClient.users.getUserList();
    return NextResponse.json({ msg: 'User fetched', users }, { status: 200 })
}