import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EfectVariants from '../EfectVariants'
import { CardProject } from './CardProject'
import './Projects.css'

function Projects() {
    const [data, setData] = useState({
        projects: [{
            image: '',
            github_link: '',
            title: '',
            description: ''
        }]
    })

    useEffect(() => {
        axios.get('data.json')

        .then(response => {
            setData(response.data)
        })
    }, [])
    
  return (
    <div className="projects">
        {
            data.projects.map((project: any, index) => {
                const time = index / 4

                return (
                    <EfectVariants time={time} id={index}>
                        <CardProject 
                            image={project.image}
                            github_link={project.github_link}
                            title={project.title} 
                            description={project.description} 
                        />
                    </EfectVariants>
                )
            })
        }
    </div>
  )
}

export default Projects