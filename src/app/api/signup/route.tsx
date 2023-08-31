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
    if (!subscriberExists) {
      const subscriber = await prisma.subscriber.create({ data: body });
      return NextResponse.json({
        message: `Obrigado por sua inscrição ${body.name} nos vemos lá`,
        ...subscriber,
      });
    }
    return NextResponse.json({
      message: `Seu email ${body.email} já esta inscrito nos vemos lá`,
      ...subscriberExists,
    });
  }
}
