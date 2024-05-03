import Link from 'next/link'
import path from 'path'
import Image from 'next/image'
import { getProjectData } from 'app/blog/utils'

function ProjectDisplay(data)
{
    return (
    <Link href={data.metadata.link}>
        <div className="project-card" key={data.slug}>
                <Image 
                    alt={data.metadata.title} 
                    src={'/' + data.metadata.image}
                    width={800}
                    height={800}
                    className='project-img'
                />
                <p className='pl-4 pt-2 pb-1'>{data.metadata.title}</p>
                <small>
                 <p className='pl-4 pb-3'>{data.metadata.description}</p>
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