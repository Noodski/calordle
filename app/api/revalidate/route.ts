import { NextRequest } from "next/server";
import { revalidateTag } from "next/cache";

export async function GET(request: NextRequest) {
  const key: string | null = request.nextUrl.searchParams.get("key");

  if (key !== process.env.REVALIDATE_KEY) {
    return Response.json({ revalidated: false }, { status: 401 });
  }

  revalidateTag("daily");

  return Response.json({ revalidated: true });
}
