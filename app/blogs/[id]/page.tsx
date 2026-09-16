import { notFound } from "next/navigation";
import { likeBlog } from "@/actions/likeBlogAction";
import { findBlogById } from "@/services/blogService";

export default async function BlogDetailScreen ({ params }:{ params: Promise<{id: string}>}) {

    const {id} = await params

    const blog = await findBlogById(Number(id))

    if (!blog) notFound()

    return (
        <div className="max-w-2xl py-10 px-4">
            <h1 className="text-2xl font-semibold">{blog.title}</h1>
            <p className="mt-1 text-sm text-gray-500">By {blog.author}</p>
            <form action={likeBlog}>
                <input type="hidden" name="id" value={blog.id} />
                <button className="mt-1 text-sm text-gray-500 hover:text-red-500">
                    ❤️ {blog.likes} likes
                </button>
            </form>
            <a
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-600 hover:underline"
            >
                Read more →
            </a>
        </div>
    )

}