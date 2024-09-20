import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";

export async function DELETE(req,res) {

    try {
        let {searchParams} = new URL(req.url);
        let userId = parseInt(searchParams.get('id'));
        const prisma = new PrismaClient();

        let userUpdate = await prisma.user.delete({
            where:{id: userId},

        })

        return NextResponse.json({status:"Success",data:userUpdate})
    }

    catch (error) {
        return NextResponse.json({status:"Fail",data:error})
    }
}