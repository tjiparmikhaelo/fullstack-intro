import Post from "./components/Post";
import styles from "./page.module.css";
import Link from "next/link";
// import prisma from "@/lib/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getPosts () {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      author: {
        select: { name: true }
      }
    }
  });

  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className={styles.main}>
      <Link href={"/submitPost"}>Add Post</Link>
      	<h1>Feed</h1>
        {
          posts.map((post) => {
            return (
              <Post
                key={post.id}
                id={post.id}
                title={post.title}
                content={post.content}
                authorName={post.author.name}
              />
            )
          })
        }
    </main>
  );
}
