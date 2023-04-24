import React from 'react'
import './SectionBox.css'

interface Props{
  children: React.ReactNode,
  id?: string,
  title?: string
}

function SectionBox({children , id, title}: Props){
  
  return (
    <div className='section-box' id={id}>
        <div className='box'>
            <div className='box__title'>
                <h1>{title}</h1>
            </div>

            <div className='box__body'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default SectionBox