import Database from '@/libs/database';
import Notes from '@/libs/database/models/notes';
import { NextResponse } from 'next/server'
import cors from 'cors';

export async function POST(request) {
    await Database()
    await cors();

    try {
        const { title, desc, clerkId } = await request.json()
        if (!clerkId) {
            return NextResponse.json({ msg: "Something went wrong" }, { status: 401 });
        }
        if (!title, !desc) {
            return NextResponse.json({ msg: "Title and description is required" }, { status: 401 });
        }
        const addnotes = await Notes.create({ clerkId, title, desc })
        if (!addnotes) {
            return NextResponse.json({ msg: "Not stored in Database, Try later" }, { status: 401 });
        }
        return NextResponse.json({ msg: "Successfully Added note", addnotes }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ msg: "Internal Server Error", error: error.message }, { status: 500 });
    }
}
// http://localhost:3000/api/notes?userid=234567
export async function GET(request) {
    try {
        await Database();
        await cors( );
        const searchParams = new URLSearchParams(request.nextUrl.search);
        const userId = searchParams.get('userid');
        if (userId) {
            const notes = await Notes.find({ clerkId: userId })
            return NextResponse.json({ msg: "Successfully Added note", notes }, { status: 200 });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({ msg: "Internal Server Error", error: error.message }, { status: 500 });
    }
}

// http://localhost:3000/api/notes?notedeleteid=234567
export async function DELETE(request) {
    try {
        await Database();
        await cors( );
        const searchParams = new URLSearchParams(request.nextUrl.search);
        const noteid = searchParams.get('notedeleteid');
        if (noteid) {
            const note = await Notes.findByIdAndDelete(noteid)
            if (!note) {
                return NextResponse.json({ msg: "Note with this id not found" }, { status: 404 });
            }
            return NextResponse.json({ msg: "Successfully Deleted note", note }, { status: 201 });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({ msg: "Internal Server Error", error: error.message }, { status: 500 });
    }
}

// http://localhost:3000/api/notes?noteupdateid=234567
export async function PUT(request) {
    try {
        await Database();
        await cors( );
        const { newtitle, newdesc } = await request.json()
        if (!newtitle, !newdesc) {
            return NextResponse.json({ msg: "Title and description is required" }, { status: 401 });
        }
        const searchParams = new URLSearchParams(request.nextUrl.search);
        const noteupdateid = searchParams.get('noteupdateid');
        if (noteupdateid) {
            const note = await Notes.findByIdAndUpdate(noteupdateid,
                { title: newtitle, desc: newdesc },
                { new: true })
            if (!note) {
                return NextResponse.json({ msg: "Note with this id not found" }, { status: 404 });
            } else {
                return NextResponse.json({ msg: "Successfully Updated note", note }, { status: 201 });
            }
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({ msg: "Internal Server Error", error: error.message }, { status: 500 });
    }
}

