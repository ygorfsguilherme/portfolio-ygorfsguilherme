import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faLinkedinIn,
    faDiscord,
    faGithubAlt,
} from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react'
import axios from 'axios'

function About() {
    const [data, setData] = useState({about: {
        name: '',
        description: '',
        quota: {
            text: '',
            author: '',
        },
        redeSocial: {
            linkedin: '',
            discord: '',
            github: '',
        }
    }})

    useEffect(() => {
        axios.get('data.json')

        .then(response => {
            setData(response.data)
        })
    }, [])

  return (
    <div className='home'>
        <div className='profile'>
            <img src="/images/profileImage.jpg" alt="image perfil" />

            <div className='rede_social'>
                <a className='rede_social__link' href={data.about.redeSocial.linkedin}>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>

                <a className='rede_social__link' href={data.about.redeSocial.discord}>
                    <FontAwesomeIcon icon={faDiscord} />
                </a>

                <a className='rede_social__link' href={data.about.redeSocial.github}>
                    <FontAwesomeIcon icon={faGithubAlt} />
                </a>
            </div>
        </div>

        <div className='about'>
            <h3>Ola, sou {data.about.name}</h3>
            
            <p>
                {data.about.description}
            </p>

            <blockquote>
                <p>
                    "{data.about.quota.text}"
                </p>

                <cite>- {data.about.quota.author}</cite>
            </blockquote>
        </div>
    </div>
  )
}

export default About