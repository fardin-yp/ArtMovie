import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
import AuthContext from '../../context/authContext'



const Comment = (props) => {


    const [des ,setDes] =useState("")
    const {find} = useContext(AuthContext);
    const [ messages ,setMessages] =useState([])
    const {loggedIn} = useContext(AuthContext)
    const [answer ,setAnwer ] = useState(false)

    

    async function sendmessage(e){
        e.preventDefault()
        if(!find.email){
         alert("برای استفاده از این بخش وارد اکانت خود شوید")
     }

        const message = {name:find.username,email:find.email,des,movie:props.movie}  
     try{
        await axios.post("http://localhost:27017/messages", message,{withCredentials:true}).then()
     }catch(err){
        alert(err.response.data.errMessage)
     }
     if(loggedIn){
        try{
            await axios.post("http://localhost:27017/messages/admin", message,{withCredentials:true}).then()
         }catch(err){
            alert(err.response.data.errMessage)
         }
     }
}
 async function answers (e){

    const message = {name:find.username,email:find.email,des,movie:props.movie}  


 try{
    await axios.post("http://localhost:8080/messages", message).then()
 }catch(err){
    alert(err.response.data.errMessage)
 }
 if(loggedIn){
    try{
        await axios.post("http://localhost:8080/messages/admin", message).then()
     }catch(err){
        alert(err.response.data.errMessage)
     }
 }
}
    
    useEffect(() => { 
        async function fetchData(){
       await axios.get('http://localhost:27017/messages').then(res => { 
           const filterMess = []
           filterMess.push(res.data)
           setMessages(res.data) 
         })
        }
    fetchData()
    },['http://localhost:27017/messages'])

    async function Answer (name) {
       console.log(name)
    }
    
    return (
        <div className="hole-comment">
            <div className="new-comment" id="cm" >
                <div className="comment-bot" ><textarea placeholder="دیدگاه خود را وارد کنید..." onChange={(e)=>setDes(e.target.value)} value={des}  /> </div>
                <button onClick={sendmessage}>ارسال دیدگاه</button>     
            </div>
            <hr />
            <div className="comments">
        {messages && messages.filter(se => {
                return se.movie.includes(props.movie)
                }).map(mes => {
            return<div key={mes._id} className={mes.admin ? 'admin-mess' :"mess"}>
                      <p style={{opacity:"0.8",fontSize:"15px",top:"5px"}}>{mes.name}</p><img src={mes.admin ? '/images/art.png': '/images/users.png'} alt="user"/>
                      <p style={{marginTop:"-10px"}}>{mes.des}</p>
                      {!mes.admin && <button onClick={() => Answer(mes.name)}>پاسخ</button>}
                  </div>})}
            </div> 
            </div>
    )
}

export default Comment
