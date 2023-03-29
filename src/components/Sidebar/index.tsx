import { Dispatch, SetStateAction, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faUser,
    faScrewdriverWrench,
    faBriefcase,
    faLaptopCode,
    faGraduationCap 
} from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css'

function Sidebar({ setPosition }: { setPosition: Dispatch<SetStateAction<number>> }) {
  const [active, setActive] = useState('')
  const url = window.location.hash.substring(1)

  function locationPath(path: string) {
    const heightPage = document.getElementById('home')?.getBoundingClientRect().height || 0

    const pages = ['home', 'graduation', 'skill', 'project', 'works']

    setActive(path)
    window.location.hash = path

    setPosition(heightPage * pages.indexOf(path))
  }

  useState(() => {
    function scrollPosition(){
        
        const position = window.pageYOffset
        const heightPage = document.getElementById('home')?.getBoundingClientRect().height || 0

        const pages = ['home', 'graduation', 'skill', 'project', 'works']

        pages.forEach((page, index) => {
            if(position >= heightPage * index) {
                setActive(page)
            }
        })
    }

    window.addEventListener('scroll', scrollPosition)
  })

  function pagePossition(){

  }
  return (
    <nav className='sidebar'>

        <ul>
            <li>
                <a 
                    href="#home" 
                    className={
                        url == '' && active == '' ||
                        url == '' && active == 'home' ||
                        url == 'home' && active == '' || 
                        url == 'home' && active == 'home' ? 'active' : '' 
                    }
                    onClick={(e) => locationPath(e.currentTarget.href.split('#')[1])}
                >
                    <FontAwesomeIcon className='icon' icon={faUser} size='2x' />
                </a>
            </li>

            <span className='separator'></span>

            <li>
                <a href="#graduation"
                    className={
                        active == 'graduation' || 
                        url == 'graduation' ? 'active' : '' }
                    onClick={(e) => locationPath(e.currentTarget.href.split('#')[1])}
                >
                    <FontAwesomeIcon className='icon' icon={faGraduationCap} size='2x' />
                </a>
            </li>

            <span className='separator'></span>

            <li>
                <a href="#skill"
                    className={
                        active == 'skill' || 
                        url == 'skill' ? 'active' : '' 
                    }
                    onClick={(e) => locationPath(e.currentTarget.href.split('#')[1])}
                >
                    <FontAwesomeIcon className='icon' icon={faScrewdriverWrench} size='2x' />
                </a>
            </li>

            <span className='separator'></span>

            <li>
                <a href="#project"
                    className={active == 'project' || url == 'project' ? 'active' : '' }
                    onClick={(e) => locationPath(e.currentTarget.href.split('#')[1])}
                >
                    <FontAwesomeIcon className='icon' icon={faLaptopCode} size='2x' />
                </a>
            </li>

            <span className='separator'></span>

            <li>
                <a href="#works"
                    className={active == 'works' || url == 'works' ? 'active' : '' }
                    onClick={(e) => locationPath(e.currentTarget.href.split('#')[1])}
                >
                    <FontAwesomeIcon className='icon' icon={faBriefcase} size='2x' />
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default Sidebar