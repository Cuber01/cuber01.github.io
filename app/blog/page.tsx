import { BlogPosts } from 'app/components/posts'


export const metadata = {
  title: 'Blog'
}

export default function Page() {
  return (
    <section>
      <h1 className="poppins font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <BlogPosts />

      <Link href={`/feed.xml`}>
            <div className="blog-card">
                  <p className='poppins' >Subscribe via RSS</p>
            </div>
      </Link>
  )
    </section>
  )
}
