import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faUser,
    faScrewdriverWrench,
    faBriefcase,
    faLaptopCode,
    faGraduationCap 
} from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css'
import { Link, useLocation } from 'react-router-dom'
import Separator from './Separator'

function Sidebar() {
  const location = useLocation().pathname.substring(1)

  return (
    <nav className='sidebar'>

        <ul>
            <li>
                <Link
                    className={location == '' ? 'active' : '' }
                    to={'/'}
                >
                    <FontAwesomeIcon className='icon' icon={faUser} size='2x' />
                </Link>
            </li>

            <Separator />

            <li>
                <Link
                    className={ location == 'education' ? 'active' : '' }
                    to={'education'}
                >
                    <FontAwesomeIcon className='icon' icon={faGraduationCap} size='2x' />
                </Link>
            </li>

            <Separator />

            <li>
                <Link
                    className={location == 'skill' ? 'active' : ''} 
                    to={'skill'}    
                >
                    <FontAwesomeIcon className='icon' icon={faScrewdriverWrench} size='2x' />
                </Link>
            </li>

            <Separator />

            <li>
                <Link
                    className={location == 'project' ? 'active' : '' }
                    to={'project'}
                >
                    <FontAwesomeIcon className='icon' icon={faLaptopCode} size='2x' />
                </Link>
            </li>

            <Separator />

            <li>
                <Link
                    className={location == 'experience' ? 'active' : '' }
                    to={'experience'}
                >
                    <FontAwesomeIcon className='icon' icon={faBriefcase} size='2x' />
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Sidebar