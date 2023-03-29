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

    console.log(data.works)
    
  return (
    <div className='works'>
        {
            data.works.map((item: any) => {
                return <CardWork data={item}/>
            })
        }
    </div>
  )
}

export default Works