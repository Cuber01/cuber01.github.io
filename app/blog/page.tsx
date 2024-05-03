import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog'
}

export default function Page() {
  return (
    <section>
      <h1 className="poppins-extrabold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <BlogPosts />
    </section>
  )
}
