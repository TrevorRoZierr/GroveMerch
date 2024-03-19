import prisma from "@/prisma/lib";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const collection = await prisma.allcollections.findMany();

  return NextResponse.json(collection);
}
