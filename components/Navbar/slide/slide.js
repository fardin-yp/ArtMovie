import React, { useState } from 'react'
import BackDrop from '../../backdrop/Backdrop'



const Slide = (props) => {
    const [openSlider ,setOpenSlider] =useState(false)
    const [openIraniSlider ,setOpenIraniSlider] =useState(false)
    
    let op = ["slide"]
    if(props.open) {
        op = ["open-slide" ,"slide"]
    }
    
    return (  
     <div className={op.join(' ')}>
     <h1 onClick={props.closeClicked}>X</h1>
     <img src='/images/art.png'alt="artmovie"/>
     <div className="drop">
     <p style={{margin:"10px"}} onClick={()=> setOpenSlider(prevState => {
         return !prevState
     })}>فیلم خارجی</p> <p style={{position:'absolute',left:"10px",top:"-26px",fontSize:"25px"}}>{openSlider?"- ":"+"}</p>
 <div className={openSlider? "open-slider":"list" }>
 <a  href={"/genres/action"}><li>اکشن</li></a>
 <a  href={"/genres/horor"}><li>ترسناک</li></a>
 <a  href={"/genres/fighting"}><li>جنگی</li></a>
 <a  href={"/genres/imaginary"}></a><li>تخیلی</li>
 <a  href={"/genres/history"}></a><li>تاریخی</li>
 <a  href={"/genres/comedy"}><li >کمدی</li></a>
 <a  href={"/genres/drama"}><li >درام</li></a>
 <a  href={"/genres/western"}><li>وسترن</li></a>
 <a  href={"/genres/mystery"}><li >معمایی</li></a>
 <a  href={"/genres/family"}><li >خانوادگی</li></a>
 <a  href={"/"}><li >همه فیلم های خارجی</li></a>
 </div>
     </div>
     <div className="drop">
     <p style={{margin:"10px"}} onClick={()=> setOpenIraniSlider(prevState => {
         return !prevState
     })}>فیلم ایرانی</p> <p style={{position:'absolute',left:"10px",top:"-26px",fontSize:"25px"}}>{openIraniSlider?"- ":"+"}</p>
 <div className={openIraniSlider? "open-slider":"list" }>
 <a  href={"/genres/action"}><li>اجتماعی</li></a>
 <a  href={"/genres/horor"}><li>ترسناک</li></a>
 <a  href={"/genres/fighting"}><li>جنگی</li></a>
 <a  href={"/genres/history"}></a><li>تاریخی</li>
 <a  href={"/genres/comedy"}><li >کمدی</li></a>
 <a  href={"/genres/drama"}><li >درام</li></a>
 <a  href={"/genres/family"}><li >همه فیلم های ایرانی</li></a>
 </div>
     </div>
     <div className="drop"><p style={{margin:"10px"}}><a style={{color:"white"}} href={"/Auth/Login"}> ورود به پنل کاربری </a></p></div>
     
 </div>
    )
}

export default Slide

