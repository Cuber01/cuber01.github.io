import Link from 'next/link'
import path from 'path'
import Image from 'next/image'
import { getProjectData } from 'app/blog/utils'

function ProjectDisplay(data)
{
    return (
    <Link href={data.metadata.link}>
        <div className="blog-card" key={data.slug}>
                <Image 
                    alt={data.metadata.title} 
                    src={'/' + data.metadata.image}
                    width={100}
                    height={100}
                />
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