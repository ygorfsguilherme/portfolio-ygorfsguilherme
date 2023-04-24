import React, { useEffect, useState } from 'react'
import SectionBox from '../../components/SectionBox'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import './Home.css'
import About from './About'
import Profile from './Profile'

function Home() {
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
    <SectionBox title='Sobre' id='home'>
      <div className='home'>
        <Profile {... data.about.redeSocial} />

        <About {... data.about}/>
      </div>
    </SectionBox>
  )
}

export default Home