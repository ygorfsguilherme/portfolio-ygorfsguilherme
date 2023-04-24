import axios from 'axios'
import './Skills.css'
import React, { useEffect, useState } from 'react'
import CardSkill from './CardSkill'
import EfectVariants from '../EfectVariants'

function SKills() {
    const [data, setData] = useState({
        skills: []
    })

    useEffect(() => {
        axios.get('data.json')

        .then(response => {
            setData(response.data)
        })
    }, [])


  return (
    <div className='skills'>
    {
        data.skills.map((item: string, index) => {
            const time = index / 15

            return (
                <EfectVariants 
                    time={time} 
                    id={index}>

                    <CardSkill
                        img={item}                 
                    />
                </EfectVariants>
            )
        })
    }
    </div>
  )
}

export default SKills