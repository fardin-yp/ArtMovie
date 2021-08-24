import React, { useState } from 'react'
import './Pop.css'

const PopAd = () => {
    const [close, setClose] =useState(false)
    return (
        <div className={close ? "close":"pop-ad"}>
            <p>تبلیغات</p>
            <button onClick={()=>setClose(true)}>X</button>
        </div>
    )
}

export default PopAd
