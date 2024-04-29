import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(request, {params}) {
  const id = params.id;

  const post = await prisma.post.delete({
    where: {id}
  })

  return NextResponse.json(post);
}