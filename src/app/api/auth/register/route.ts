import User from "@/models/User"
import connect from "@/utils/db"
import { NextResponse } from "next/server"
import bcrypt from 'bcryptjs'


export const POST = async (req:any) => {
    const { username, email, password } = await req.json()
    await connect()
    const hashedPassword = await bcrypt.hash(password, 5)
    const newUser = new User({username, email, password:hashedPassword})
    try {
        await  newUser.save()
        return new NextResponse('User created', {status:200})
    } catch (error:any) {
        return new NextResponse(error.message, {status:500})
    }
}