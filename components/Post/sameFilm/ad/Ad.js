import React, { useEffect, useState } from 'react'

const Ad = (props) => {

   const filterIran =props.ads.filter(res => {
       return res.pos.includes('fullBot')
   })
    return (
        <>
    {props.ads && <div className="ad-div">
        <div className="top-add"><p>مطالب پیشنهادی</p></div>
        <hr style={{opacity:"0.5",position:"absolute",top:"50px",width:"100%",  backgroundColor:"silver"}} />
        {filterIran.map(res => {
            return <a key={res._id} target="_blank" href={res.link}><div className='ad-card'>
                  <img src={`/adsUploads/${res.image}`} alt={res.title} />
                   <p>{res.title}</p>
               </div>
               </a>
        })}
    </div>}
    </>
    )
}

export default Ad
