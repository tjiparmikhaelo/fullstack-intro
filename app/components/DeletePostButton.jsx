"use client"

import { useRouter } from "next/navigation"

export default function DeletePostButton({postId}) {
  const router = useRouter();

  async function handleClick() {
    try {
      await fetch( `/api/post/${postId}`, {
        method: "DELETE",
      })
    } catch (error) {
      throw new Error(error)
    }

    router.refresh();
  }

  return (
    <button onClick={handleClick}>Delete Post</button>
  )
}
