import React from 'react'
import './About.css'

interface Props {
    name: String,
    description: String,
    quota: {
        text: String,
        author: String
    }
}

function About(
    {name, description, quota}: Props
) {
  return (
    <div className='about'>
        <h3>Ola, sou {name}</h3>
        
        <p>
            {description}
        </p>

        <blockquote>
            <p>
                "{quota.text}"
            </p>

            <cite>- {quota.author}</cite>
        </blockquote>
    </div>
  )
}

export default About