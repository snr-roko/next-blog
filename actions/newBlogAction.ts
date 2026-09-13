"use server"

import { Blog, blogs } from "@/app/blogs/page"
import {revalidatePath} from "next/cache"
import { redirect } from "next/navigation"

export async function createNewBlog(blog: FormData) {
  const newBlog: Blog = {
    id: blogs.length + 1,
    title: blog.get("title") as string,
    author: blog.get("author") as string,
    url: blog.get("url") as string,
    likes: 0
  }
  blogs.push(newBlog)

  revalidatePath("/blogs")
  redirect("/blogs")
}