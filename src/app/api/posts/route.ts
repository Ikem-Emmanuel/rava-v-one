import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Post from "@/models/Post"

export const GET = async (req: any) => {
    const url = new URL(req.url)
    const username:any = url.searchParams.get("username")
    try {
        await connect()
        const posts:any = await Post.find(username && { username })
        return new NextResponse(JSON.stringify(posts), {status:200, })
    } catch (error) {
        return new NextResponse("Database Error", {status:500, })
    }
}

export const POST = async (req: any) => {
    const body = await req.json()
    const newPost = new Post(body)
    try {
        await connect()
        await newPost.save()
        return new NextResponse('Post has being created', {status:200, })
    } catch (error) {
        return new NextResponse("Database Error", {status:500, })
    }
}