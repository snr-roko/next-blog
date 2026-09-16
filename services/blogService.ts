import { Blog } from "@/app/blogs/page";
import { db } from "@/db";
import { blogs } from "@/db/schema";
import { eq } from "drizzle-orm";

export function getBlogs() {
    return db.query.blogs.findMany()
}

export function findBlogById(id: number) {
    return db.query.blogs.findFirst({
        where: eq(blogs.id, id)
    })
}

export async function createBlog(blog: Blog) {
    await db.insert(blogs).values({
        title: blog.title,
        author: blog.author,
        url: blog.url,
        likes: blog.likes
    })
}

export async function increaseBlogLikes(id: number) {
    const blog = await findBlogById(id)

    if (blog) {
        await db.update(blogs).set({
            likes: blog.likes + 1
        }).where(eq(blogs.id, id))
    }
}