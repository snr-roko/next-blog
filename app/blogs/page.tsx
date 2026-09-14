export type Blog = {
    id: number;
    title: string;
    author: string;
    url: string;
    likes: number;
}

export const blogs: Blog[] = [
        {
            id: 1,
            title: "Announcing Next.js 13",
            author: "Vercel",
            url: "https://nextjs.org/blog/next-13",
            likes: 10,
        },
        {
            id: 2,
            title: "What’s New in Next.js 14",
            author: "Vercel",
            url: "https://nextjs.org/blog/next-14",
            likes: 5,
        },
    ]

export default function Blogs () {
    return (
        <div className="max-w-2xl py-10 px-4">
            <h1 className="text-2xl font-semibold mb-6">Blogs</h1>
            <ul className="divide-y divide-gray-200">
                {
                    blogs.map((blog) => (
                        <li key={blog.id} className="py-4">
                            <a
                                href={`/blogs/${blog.id}`}
                                className="text-lg font-medium text-blue-600 hover:underline"
                            >
                                {blog.title}
                            </a>
                            <div className="mt-1 flex items-center gap-3 text-sm text-gray-500">
                                <span>By {blog.author}</span>
                                <span>·</span>
                                <span>{blog.likes} likes</span>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}