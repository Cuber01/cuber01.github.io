import Link from "next/link"


export const metadata = {
  title: 'Info'
}

export default function Page() {
    return (
      <section>
        <h1 className="poppins text-2xl font-semibold tracking-tighter">
         Jan Piotr Englert 
       </h1>                
       <h1 className="poppins mb-8 text-xl font-semibold tracking-tighter">
         <Link href="https://github.com/Cuber01">Github</Link>
         {` — `}
         <Link href="https://cuber1.itch.io/">Itch.io</Link>
         {` — `}
         <Link href="mailto:janenglert098@icloud.com">Email</Link>
       </h1>

       <p className="mb-4">
         {`I'm a self-taught programmer with a knack for learning new things. 
         I have many interests including game and language design, writing, tabletop RPGs,
          history and everything tech. My blog will likely focus on all these things, but currently I have written mostly things about sci-fi.`}
       </p>

      </section>
     
    )
}