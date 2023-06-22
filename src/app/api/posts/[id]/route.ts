import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Post from "@/models/Post"

export const GET = async (req: any, {params}:any) => {
    const {id} = params
    try {
        await connect()
        const post:any = await Post.findById(id)
        return new NextResponse(JSON.stringify(post), {status:200, })
    } catch (error) {
        return new NextResponse("Database Error", {status:500, })
    }
}