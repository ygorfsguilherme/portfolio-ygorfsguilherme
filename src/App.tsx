import './App.css'
import './assets/css/_color.css'
import Sidebar from './components/Sidebar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Education from './pages/Education'
import Skill from './pages/Skill'
import Project from './pages/Project'
import Experience from './pages/Experience'

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
              <Route index element={<Home/>} />
              <Route path='education' element={<Education/>} />
              <Route path='skill' element={<Skill/>} />
              <Route path='project' element={<Project/>} />
              <Route path='experience' element={<Experience/>} />
          </Routes>
        
          <Sidebar />
        </BrowserRouter>
    </>
  )
}



export default App
