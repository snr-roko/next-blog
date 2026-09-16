"use server"

import { increaseBlogLikes } from "@/services/blogService"
import { revalidatePath } from "next/cache"

export async function likeBlog(formData: FormData) {
  const id = Number(formData.get("id"))

  await increaseBlogLikes(id)

  revalidatePath(`/blogs/${id}`)
  revalidatePath("/blogs")
}
