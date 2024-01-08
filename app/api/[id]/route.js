import { NextResponse } from 'next/server'
import Database from '@/libs/database';
import Notes from '@/libs/database/models/notes';
import cors from 'cors';

// http://localhost:3000/api/234567
export async function GET(request,{ params }) {
    try {
        await Database();
        await cors()
            const note = await Notes.findOne({ _id: params.id })
            return NextResponse.json({ msg: "Successfully get one note", note }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ msg: "Internal Server Error", error: error.message }, { status: 500 });
    }
}