import { Projects } from 'app/components/projects'
import './projects.css'

export const metadata = {
  title: 'Projects'
}

export default function Page() {
    return (
      <section>
        <h1 className="font-[Poppins] font-bold text-2xl mb-8 tracking-tighter">My Projects</h1>
        <Projects />
      </section>
    )
}