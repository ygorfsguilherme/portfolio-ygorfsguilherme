import { faDiscord, faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Profile.css'

interface Props{
    linkedin: string,
    discord: string,
    github: string,
    
}

function Profile({linkedin, discord, github}:Props) {
  return (
    <div className='profile'>
        <img src="/images/profileImage.jpg" alt="image perfil" />

        <div className='rede_social'>
            <a className='rede_social__link' href={linkedin}>
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>

            <a className='rede_social__link' href={discord}>
                <FontAwesomeIcon icon={faDiscord} />
            </a>

            <a className='rede_social__link' href={github}>
                <FontAwesomeIcon icon={faGithubAlt} />
            </a>
        </div>
    </div>
  )
}

export default Profile