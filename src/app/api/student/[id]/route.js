import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();


export async function PUT(req,{ params }){
    try{
        const reqBody = await req.json()

        const id = parseInt(params.id);

        const updateUser = await prisma.User.update({
            where:{id},
            data:reqBody
        })

        return NextResponse.json({status:"Success", data:updateUser})
    }

    catch (e) {
        return NextResponse.json({status:"Fail", data:e})

    }
}

export async function DELETE(req,{ params }){

    try{
        const id = parseInt(params.id);
        const deleteUser = await prisma.User.delete({
            where:{id},

        })

        return NextResponse.json({status:"Success", data:deleteUser})
    }

    catch (e) {
        return NextResponse.json({status:"Fail", data:e})

    }
}