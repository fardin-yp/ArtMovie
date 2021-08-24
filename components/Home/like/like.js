import React, { useState ,useContext ,useEffect } from 'react'
import axios from 'axios'
import AuthContext from '../../context/authContext'



const Like = (props) => {
    const [like ,setLike] =useState([])
    const [ liked ,setLiked ] =useState([])
    const {find} = useContext(AuthContext);
    const [secc ,setSecc] =useState()
    const [err ,setErr ] = useState('')

   async function likes() {
       if(!find.email){
           alert("برای استفاده از این بخش وارد اکانت خود شوید")
       }
       try{
       const varieble = {movie:props.movie,email:find.email}
        await axios.post('http://localhost:27017/like/',varieble,{withCredentials:true}).then(res => {
            setSecc(res.data.secc)
        })
    }catch(err){
        alert(err.response.data.errMessage)
    }
    }
    async function getlikes() {
        await axios.get('http://localhost:27017/like').then(res => {        
            setLike(res.data)
        })
     }
     useEffect(() => {
        getlikes()
     },[])

   const filterLike = like.filter(res => {
         return res.movie.includes(props.movie) 
     })

     let current = filterLike.length
     if(secc === true){
         current = +1
     }
     if(secc === false){
        current = -1
    }

    return (
        <>
         <div className="erro">{err}</div>
            <p style={{direction:"rtl",fontSize:"12px",position:"relative",top:"1px"}}>{current} نفر پسندیده اند</p><img style={{cursor:"pointer"}} src='/images/like.png ' alt="likes" onClick={likes}></img>
        </>
    )
}

export default Like
