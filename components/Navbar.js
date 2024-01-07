"use client";
import Link from 'next/link'
import React from 'react'
import { Avatar } from "@nextui-org/react";
import { useUser, useAuth } from "@clerk/nextjs";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { SignOutButton } from "@clerk/nextjs";
import { useRouter } from 'next/navigation'
import {Button} from "@nextui-org/react";

export default function Navbar() {
    const { user } = useUser();
    const { userId } = useAuth();
    const router = useRouter()
    return (
        <div>
            {userId ?
                <div>
                    <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                        <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
                            <div className="ml-4 mt-2">
                                <Link href={'/'} className="text-2xl font-bold text-gray-900">
                            {user?<>Hi, {user?.firstName}</>:"Notes App"}                            
                                </Link>
                            </div>
                            <div className="ml-4 mt-2 gap-2 flex">
                            <Button color="primary">
                                <Link href="/add-new-note">+ Add Note</Link>
                            </Button>
                                <Dropdown>

                                    <DropdownTrigger>
                                        <div className="cursor-pointer">
                                            <Avatar src={user?.imageUrl} />
                                        </div>
                                    </DropdownTrigger>
                                    <DropdownMenu aria-label="Static Actions">
                                        <DropdownItem key="new">
                                            <Link href="/user-profile" className="flex">Profile</Link>
                                        </DropdownItem>
                                        <DropdownItem key="delete" className="text-danger" color="danger">
                                            <SignOutButton signOutCallback={() => { router.push('/sign-in'); }}>
                                                <span className="flex">Sign Out</span>
                                            </SignOutButton>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
                : null}
        </div>
    )
}
