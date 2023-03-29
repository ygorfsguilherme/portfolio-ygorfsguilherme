import React from 'react'
import { CardProject } from './CardProject'
import './Projects.css'

function Projects() {
  return (
    <div className="projects">
        <CardProject 
            image={'/images/project-jogo-da-forca.png'}
            github_link={''}
            title={'App'} 
            description={'Lorem asdoa asoda sda asashhas ashas a ahsha'} 
        />

        <CardProject 
            image={'/images/project-portfolio.png'}
            github_link={''}
            title={'App'} 
            description={'Lorem asdoa asoda sda asashhas ashas a ahsha'} 
        />

        <CardProject 
            image={'/images/project-jogo-da-forca.png'}
            github_link={''}
            title={'App'} 
            description={'Lorem asdoa asoda sda asashhas ashas a ahsha'} 
        />

        <CardProject 
            image={'/images/project-jogo-da-forca.png'}
            github_link={''}
            title={'App'} 
            description={'Lorem asdoa asoda sda asashhas ashas a ahsha'} 
        />

        <CardProject 
            image={'/images/project-jogo-da-forca.png'}
            github_link={''}
            title={'App'} 
            description={'Lorem asdoa asoda sda asashhas ashas a ahsha'} 
        />
    </div>
  )
}

export default Projects