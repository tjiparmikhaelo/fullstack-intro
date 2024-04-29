import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {
  const res = await request.json();

  const { title, content } = res;
  console.log({res});

  const result = await prisma.post.create({
    data: {
      title,
      content,
      published: true,
      author: { create: {
        name: "Goklas"
      }}
    }
  })

  return NextResponse.json(result);
}