import React, { useEffect, useState } from 'react'
import './Middle.css'
import axios from 'axios'


const Ad = () => {
const [ads ,setAds] =useState([])
const [filter ,setFilter] = useState("large")
    
                    

    const filterIran = ads.filter(se => {
        return se.pos.toLowerCase().includes(filter.toLowerCase())
      })


async function fetchAds(){
  await axios.get('http://localhost:8080/ad/').then(res => {
    setAds(res.data)
    })
}
useEffect(()=> {
    fetchAds()
},[])

    return (
        <>
    {!filterIran && <div className="middle-ad">
        <p>تبلیغات </p>
        <hr style={{opacity:"0.5",position:"absolute",top:"35px",width:"99.9%",  backgroundColor:"silver"}} />
        {filterIran.map(res => {
            return <div className='co'>
            <a target="_blank" href={res.link}><div className='middle-card'>
                   <p>{res.title}</p>
                   <img src={`/adsUploads/${res.image}`} alt={res.title} />
               </div>
               </a>
        </div>
        })}
    </div>}
    </>
    )
}

export default Ad
