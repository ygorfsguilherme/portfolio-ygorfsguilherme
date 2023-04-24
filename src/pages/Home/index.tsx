import React, { useEffect, useState } from 'react'
import SectionBox from '../../components/SectionBox'
import './Home.css'
import About from './About'
import Profile from './Profile'
import dados from './../../../data.json'

function Home() {
  return (
    <SectionBox title='Sobre' id='home'>
      <div className='home'>
        <Profile {... dados.about.redeSocial} />

        <About {... dados.about}/>
      </div>
    </SectionBox>
  )
}

export default Home