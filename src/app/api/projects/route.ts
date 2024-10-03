import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

export async function GET() {
  const data = await client.project.findMany({
    select: {
      id: true,
      title: true,
      thumbnail: true,
      summary: true,
    },
  });
  return Response.json(data);
}

export async function POST() {
  throw new Error('No Post');
}
