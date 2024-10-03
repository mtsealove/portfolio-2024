import { type NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const data = await client.project.findFirst({
      where: {
        id: Number(params.id),
      },
    });
    if (data) {
      const project = {
        ...data,
        images: data.images.split(','),
      };
      return NextResponse.json(project);
    }
    return NextResponse.json({ error: 'not found' }, { status: 404 });
  } catch (e) {
    return NextResponse.json({ error: 'bad request' }, { status: 400 });
  }
}

export function POST() {
  return NextResponse.error();
}
