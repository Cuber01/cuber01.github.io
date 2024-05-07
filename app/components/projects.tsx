import Link from 'next/link'
import Image from 'next/image'
import { getProjectData } from 'app/blog/utils'  

function ProjectDisplay(data)
{
    return (
    <Link href={data.metadata.link}>
        <li className="project-container" key={data.slug}>
                <h3 className='poppins' >{data.metadata.title}</h3>
                <p className='poppins'>{data.metadata.description}</p>
        </li>
    </Link>
    )
}

export function Projects()
{
    return (
            <ul> 
               { getProjectData().map(ProjectDisplay) }
            </ul>
            )
}