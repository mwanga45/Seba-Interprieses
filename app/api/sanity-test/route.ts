import { NextResponse } from "next/server";
import { client } from "@/lib/client";

export async function GET() {
  try {
    const result = await client.fetch(`{
      "posts": count(*[_type == "post"]),
      "categories": count(*[_type == "category"]),
      "samplePosts": *[_type == "post"] | order(publishedAt desc)[0...5]{
        _id,
        productName,
        "slug": slug.current
      }
    }`);

    return NextResponse.json({
      success: true,
      connected: true,
      ...result,
    });
  } catch (error) {
    console.error("Sanity connection error:", error);

    return NextResponse.json(
      {
        success: false,
        error: String(error),
      },
      { status: 500 },
    );
  }
}
