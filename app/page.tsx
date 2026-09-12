import { client } from "@/lib/client";
import { POSTS_QUERY } from "@/lib/sanity/query";
import HomeClient from "@/components/Homeclient";
import type { Post } from "@/lib/sanity/types";

export const revalidate = 60; 


export default async function Page() {
  const posts: Post[] = await client.fetch(POSTS_QUERY);
  console.log("Fetched posts:", posts);

  return <HomeClient posts={posts} />;
}