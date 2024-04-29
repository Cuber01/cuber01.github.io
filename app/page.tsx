import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="text-2xl font-semibold tracking-tighter">
        Jan Englert 
      </h1>
      <h2 className="mb-8 text-base font-semibold tracking-tighter">
        @Cuber01
      </h2>

      <p className="mb-4">
        {`I'm a self-taught programmer with a knack for learning new things. 
        I have many interests including game and language design, writing, tabletop RPGs,
         history and everything tech. `}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
