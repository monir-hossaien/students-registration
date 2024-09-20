import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";

export async function PUT(req,res) {

    try {

        let {searchParams} = new URL(req.url);
        let userId = parseInt(searchParams.get('id'));

        const reqBody = await req.json();
        const prisma = new PrismaClient();

        let userUpdate = await prisma.user.update({
            where:{
                id: userId
            },
            data:reqBody
        })

        return NextResponse.json({status:"Success",data:userUpdate})
    }

    catch (error) {
        return NextResponse.json({status:"Fail",data:error})
    }
}