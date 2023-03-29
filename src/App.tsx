import { useState } from 'react'
import styled from 'styled-components'
import './App.css'
import './assets/css/_color.css'
import About from './components/About'
import Projects from './components/Projects'
import SectionBox from './components/SectionBox'
import Sidebar from './components/Sidebar'
import SKills from './components/Skills'
import Works from './components/Works'

function App() {
  const [position, setPosition] = useState(0)

  const AppContainer = styled.div`
    position: position;

    @media (max-width: 768px) {
      position: fixed;
      top: -${position}px;
      width: 100%;
    }
  `
  return (
    <AppContainer>
      <SectionBox title='Sobre' id='home'>
        <About/>
      </SectionBox>

      <SectionBox title='Educação' id='graduation'>
        <h1>Graduação</h1>
      </SectionBox>

      <SectionBox title='Habilidades' id='skill'>
        <SKills/>
      </SectionBox>

      <SectionBox title='Projetos' id='project'>
        <Projects />
      </SectionBox>

      <SectionBox title='Experiência' id='works'>
        <Works/>
      </SectionBox>

      <Sidebar setPosition={setPosition} />
    </AppContainer>
  )
}



export default App
