import Link from 'next/link'
import { getProjectData } from 'app/blog/utils'

function ProjectDisplay(data)
{
    return (
    <Link href={data.metadata.link}>
        <div className="blog-card" key={data.slug}>
                <p>{data.metadata.title}</p>
                <small>
                 <p>{data.metadata.description}</p>
                </small>
        </div>
    </Link>
    )
}

export function Projects()
{
    return (
            <div> 
               { getProjectData().map(ProjectDisplay) }
            </div>
            
            )
}