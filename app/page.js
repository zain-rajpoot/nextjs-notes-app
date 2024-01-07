"use client";
import { useAuth } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { Suspense } from 'react'
import Link from 'next/link'
import Loading from "./loading";
import {Card, CardHeader, CardBody, CardFooter, Divider} from "@nextui-org/react";
import Head from "next/head";

const metadata = {
  title: 'Home page | nextjs notes app',
}

export default function Home() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { user } = useUser();
  return (
    <div className="w-full mt-10 mx-auto max-w-7xl">
      <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"/>
      </Head>
      <Suspense fallback={<Loading />}>
        {/* {userId}
        <br /> */}
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 mx-auto justify-items-center md:grid-cols-3 items-center p-4">    
        <Card className="max-w-[350px]">
      <CardHeader className="flex justify-between items-center gap-3">
        <div className="flex flex-col">
        <h2 className="text-xl text-indigo-500 truncate w-48 font-semibold">NextUI</h2>
          <p className="text-small text-default-500">12/12/2024</p>
        </div>
        <div className="flex text-bold gap-3">
        <Link href={`update-note/123`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-pencil-square" viewBox="0 0 16 16">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
      </svg>
      </Link>
        <div className="cursor-pointer">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
          </svg>
        </div>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
      <Divider/>
    <CardFooter>
      <Link href='/' className="text-indigo-400">
      Learn more
      </Link>
    </CardFooter>
    </Card>
  </div>
      </Suspense>
    </div>
  )
}