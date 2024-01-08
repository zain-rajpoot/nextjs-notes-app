import Database from '@/libs/database';
import Notes from '@/libs/database/models/notes';
import { NextResponse } from 'next/server'
import cors from 'cors';

export async function GET(request,{params}) {
    try {
        await Database();
        await cors()
            const note = await Notes.findOne({ _id: params.id })
            if (!note){
                return NextResponse.json({ msg: "Note with this is note found" }, { status: 404 });
            }
            return NextResponse.json({ note }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ msg: "Internal Server Error", error: error.message }, { status: 500 });
    }
}