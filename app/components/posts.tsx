import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

function BlogCard(post) {
  return (
    <Link href={`/blog/${post.slug}`}>
                    <div className="blog-card" key={post.slug}>
                            <p className='font-[Poppins]' >{post.metadata.title}</p>
                            <small>
                              <p>{post.metadata.summary}</p>
                            </small>
                            <small>
                              {formatDate(post.metadata.publishedAt, false)}
                            </small>
                    </div>
                </Link>
  )
}

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map(BlogCard)
          
      }
    </div>
  )
}
