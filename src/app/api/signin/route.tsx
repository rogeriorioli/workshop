import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

type RequestBody = {
  email: string;
  name: string;
};

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const body: RequestBody = await req.json();
  if (req.method === "POST") {
    const subscriberExists = await prisma.subscriber.findUnique({
      where: {
        email: body.email,
      },
    });
    if (subscriberExists) {
      return NextResponse.json(
        {
          message: `Redirecionando `,
          ...subscriberExists,
        },
        { status: 200 }
      );
    }
    return NextResponse.json(
      { message: `Seu email não esta inscrito ` },
      { status: 401 }
    );
  }
}
