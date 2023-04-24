import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardWork from './CardWork'
import './Works.css'

function Works() {
    const [data, setData] = useState({
        works: []
    })

    useEffect(() => {
        axios.get('data.json')

        .then(response => {
            setData(response.data)
        })
    }, [])
    
  return (
    <div className='works'>
        {
            data.works.map((item: any, index) => {
        
                return <CardWork id={index} data={item} position={index}/>
            })
        }
    </div>
  )
}

export default Works