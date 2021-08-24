import React,{useState, useEffect} from 'react'
import Jenres from '../jenres/jenres'



const FullLeft = (props) => {

const filter = props.movies
    
    return (
        <div className="full-left">
            <Jenres />
            <div className="new-web">
                <p>جدیدترین مطالب</p><div  className='doc-c'><img style={{top:"-3px",left:".2px"}} src={'/images/doc.png'} alt="document.png" /></div>
               {filter && filter.reverse().slice(0,8).map(res => {
                   return <ul key={res._id}>
                     <a style={{textDecoration:"none"}} href={`/movie/${res._id}`}> <li>دانلود فیلم {res.title}</li></a> 
                        </ul>
               })}
            </div>
            
        </div>
    )
}

export default FullLeft
