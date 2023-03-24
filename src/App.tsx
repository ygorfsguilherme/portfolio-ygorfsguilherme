import './App.css'
import './assets/css/_color.css'
import About from './components/About'
import SectionBox from './components/SectionBox'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
      <SectionBox title='Sobre' id='home'>
        <About/>
      </SectionBox>

      <SectionBox title='Educação' id='graduation'>
        <h1>Graduação</h1>
      </SectionBox>

      <SectionBox title='Habilidades' id='skill'>
        <h1>Habilidades</h1>
      </SectionBox>

      <SectionBox title='Projetos' id='project'>
        <h1>Projetos</h1>
      </SectionBox>

      <SectionBox title='Experiência' id='works'>
        <h1>Experiência</h1>
      </SectionBox>

      <Sidebar />
    </>
  )
}

export default App
