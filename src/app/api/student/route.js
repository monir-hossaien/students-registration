import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";

export async function POST(req,res) {

    try {
        
        const reqBody = await req.json();
        const prisma = new PrismaClient();

        let newUser = await prisma.user.create({
            data:reqBody

        })

        return NextResponse.json({status:"Success",data:newUser})
    }

    catch (error) {
        return NextResponse.json({status:"Fail",data:error})
    }
}

export async function GET(req,res){

    try{

        //const reqBody = await req.json()
        const prisma = new PrismaClient();

        const users = await prisma.user.findMany({

        })

        return NextResponse.json({status:"Success",data:users})
    }
    catch (e) {

        return NextResponse.json({status:"Fail",data:e})

    }
}