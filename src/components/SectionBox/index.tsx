import React from 'react'
import './SectionBox.css'

function SectionBox(Props: {children: React.ReactNode, id?: string, title?: string}){
  return (
    <div className='section-box' id={Props.id}>
        <div className='box'>
            <div className='box__title'>
                <h1>{Props.title}</h1>
            </div>

            <div className='box__body'>
                {Props.children}
            </div>
        </div>
    </div>
  )
}

export default SectionBox