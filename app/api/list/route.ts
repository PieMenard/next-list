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


//POST request
export async function PUT(req: any) {
    const { searchParams } = new URL(req.url);
    const currentListId = searchParams.get('id');

    if (!currentListId) {
        return NextResponse.json({
            success: false,
            message: 'Invalid ID'
        });
    }
    const data = await req.json()

    try {
        const updatedList = await prisma.list.update({
            where: {
                id: currentListId,
            },
            data: {
                title: data.title,
                description: data.description
            }
        })

        if (updatedList) {
            return NextResponse.json({
                success: true,
                message: 'Updated data successfully'
            })
        }
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error
        })

    }
}