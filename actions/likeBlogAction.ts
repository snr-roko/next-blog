"use server"

import { blogs } from "@/app/blogs/page"
import { revalidatePath } from "next/cache"

export async function likeBlog(formData: FormData) {
  const id = Number(formData.get("id"))
  const blog = blogs.find(b => b.id === id)
  if (blog) blog.likes++

  revalidatePath(`/blogs/${id}`)
  revalidatePath("/blogs")
}
