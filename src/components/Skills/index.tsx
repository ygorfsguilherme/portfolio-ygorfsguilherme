import axios from 'axios'
import './Skills.css'
import React, { useEffect, useState } from 'react'
import CardSkill from './CardSkill'

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
        data.skills.map((item: string) => {
            return (
                <CardSkill
                    img={item}
                />
            )
        })
    }
    </div>
  )
}

export default SKills