import { getBlogs } from "@/services/blogService";

export type Blog = {
    id: number;
    title: string;
    author: string;
    url: string;
    likes: number;
}

export default async function Blogs ({searchParams}: {searchParams: Promise<{filter? : string}>}) {
    const blogs = await getBlogs()
    
    const sortedBlogs = [...blogs].sort((a, b) => b.likes - a.likes)
    
    const {filter} = await searchParams
    const blogsToShow = filter ? sortedBlogs.filter(blog => blog.title.toLowerCase().includes(filter.toLowerCase())) : sortedBlogs

    return (
        <div className="max-w-2xl py-10 px-4">
            <h1 className="text-2xl font-semibold mb-6">Blogs</h1>
            <form className="mb-6 flex gap-2">
                <input
                    type="text"
                    name="filter"
                    defaultValue={filter}
                    placeholder="Search by title"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                    Search
                </button>
            </form>
            <ul className="divide-y divide-gray-200">
                {
                    blogsToShow.map((blog) => (
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