import { NextResponse } from 'next/server'

export async function POST(request) {
    const { title , desc} = request.json()
    return NextResponse.json({ msg: "Successfully POST method run"
    ,title , desc 
    }, { status: 200 });
}
