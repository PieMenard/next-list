import { prisma } from "@/app/utils/prisma";
import { NextResponse } from "next/server";

//POST request
export async function POST(req: any) {
    const data = await req.json()
    try {
        const newList = await prisma.list.create({
            data: {
                title: data.title,
                description: data.description
            }
        })

        if (newList) {
            return NextResponse.json({
                success: true,
                message: 'data created succesfully'
            })
        }
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error
        })

    }
}

//GET ALL request
export async function GET() {
    try {
        const allList = await prisma.list.findMany({
            select: {
                title: true,
                description: true,
                id: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        })

        if (allList) {
            return NextResponse.json({
                success: true,
                data: allList
            })
        } else {
            return NextResponse.json({
                success: false,
                message: 'An error ocurred.'
            })
        }
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error
        })

    }
}