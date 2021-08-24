import axios from 'axios';
import React, { useState } from 'react'


function SignUp () {

    const [email ,setEmail] = useState("")
    const [password ,setPassword] = useState("")
    const [username ,setUserName] = useState("")
    const [verify ,setVerify] = useState("")
    const [loading , setLoading] = useState(false);
    const [error ,setError] = useState('')
    const [seccsess ,setSeccess] = useState('')
    
 async function postHandler(e) {

     e.preventDefault();
     setLoading(true)
     try{
        const post = {
            email,
            password,
            username,
            verify
        }
        await axios.post('http://localhost:27017/authentication/sendemail', post).then(res => {
          setLoading(false)
          setSeccess(res.data.message)
          if(res.data.errMessage){
            setError(res.data.errMessage)}
        setTimeout(function(){
          setSeccess('')
     }.bind(),10000) 
     setTimeout(function(){
      setError('')
 }.bind(),10000) 
    })
     }catch(err){
       setSeccess('')
        setError(err.response.data.errMessage)
        setTimeout(function(){
          setError('')
     }.bind(),10000)
        setLoading(false)
  
     }
     
}
   let err = ['err']
   if(error){
     err = ['open-err','err']
   }
   let sec = ['sec']
   if(seccsess){
     sec = ['open-sec','sec']
   }
   
        return(
          <div className="background">
          <div className="cover"></div>
          <div className={err.join(' ')}><p>{error}</p><button onClick={() => setError(false)}>X</button>{error && <hr />}</div>
          <div className={sec.join(' ')}><p>{seccsess && <p>{seccsess}</p>}</p><button onClick={() => setSeccess(false)}>X</button>{seccsess && <hr />}</div>
         <div className='signup-card'>
           <form>
             <h1>ایجاد حساب کاربری</h1>
          {loading && <div className='loading-spinner'></div>}
           <input type='text' required placeholder='نام کاربری' onChange={(e) => setUserName(e.target.value)}value={username} />
           <input type='email' required placeholder='ایمیل' onChange={(e) => setEmail(e.target.value)}value={email} />
           <input type='password' required placeholder='کلمه عبور' onChange={(e) => setPassword(e.target.value)}value={password}/>
           <input type='password' required placeholder='تکرار کلمه عبور' onChange={(e) => setVerify(e.target.value)}value={verify}/>
           <button disabled={loading === true} onClick ={postHandler} > <b> SignUp</b></button>
           <a to="/auth/login" style={{marginTop:"0px",textAlign:'right' , color:"black", textDecoration:"none" ,fontSize:"larger"}}><p>ورود به پنل کاربری</p></a>
           </form>
         </div>
         </div>
        )
    
  }
export default SignUp
