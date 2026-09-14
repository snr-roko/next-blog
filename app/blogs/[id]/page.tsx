import { notFound } from "next/navigation";
import { Blog, blogs } from "../page";

export function getBlogById(id: number) {
    return blogs.find(blog => blog.id === id)
}

export default async function BlogDetailScreen ({ params }:{ params: Promise<{id: string}>}) {

    const {id} = await params

    const blog = getBlogById(parseInt(id))

    if (!blog) notFound()

    return (
        <div className="max-w-2xl py-10 px-4">
            <h1 className="text-2xl font-semibold">{blog.title}</h1>
            <p className="mt-1 text-sm text-gray-500">By {blog.author}</p>
            <p className="mt-1 text-sm text-gray-500">{blog.likes} likes</p>
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