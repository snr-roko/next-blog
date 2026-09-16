"use server"

import { Blog} from "@/app/blogs/page"
import { createBlog } from "@/services/blogService"
import {revalidatePath} from "next/cache"
import { redirect } from "next/navigation"

export async function createNewBlog(blog: FormData) {
  const newBlog= {
    title: blog.get("title") as string,
    author: blog.get("author") as string,
    url: blog.get("url") as string,
    likes: 0
  }
  await createBlog(newBlog as Blog)

  revalidatePath("/blogs")
  redirect("/blogs")
}