import React, { useState } from 'react'
import axios from 'axios'

const ForgetPassword = () => {

  const [email, setEmail] =useState('')
  const [seccsess ,setSeccess] = useState('')
  const [error ,setError] = useState('')
  const [loading , setLoading] = useState(false);

  async function forget(){
    try{
      setLoading(true)
    const post = {email}
    await axios.post('http://localhost:27017/authentication/resetemail' ,post).then(res => {
       setSeccess(res.data.message)
        setTimeout(function(){
          setSeccess('')
     }.bind(),10000) 
     if(res.data.errMessage){
      setError(res.data.errMessage)}
  setTimeout(function(){
    setError('')
}.bind(),10000) 
     setLoading(false)
    })
    
  }catch(err){
    setSeccess('')
    setError(err.response.data.errMessage)
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
    return (
        <div className="background">
          <div className="cover"></div>
          <div className={err.join(' ')}><p>{error}</p><button onClick={() => setError(false)}>X</button>{error && <hr />}</div>
          <div className={sec.join(' ')}><p>{seccsess && <p>{seccsess}</p>}</p><button onClick={() => setSeccess(false)}>X</button>{seccsess && <hr />}</div>
            <div className="forget-card">
            <div className="forget-left">
                <input placeholder="ایمیل خود را وارد کنید" type="email" onChange={(e) => setEmail(e.target.value)}value={email}/>
                <button disabled={loading === true} onClick={forget}>ارسال</button>
              </div>
              <div className="forget-right">
                <p style={{fontSize:"18px",color:"white"}}>فراموشی رمز عبور</p>
                <p style={{marginTop:"40px",color:"white",direction:"rtl",width:"88%" ,fontSize:"14px"}}> شما میتوانید از طریق ایمیل خود رمز عبور خود را بازیابی کنید !</p>
                <p style={{marginTop:"40px",color:"white",direction:"rtl",width:"88%" ,fontSize:"14px"}}>اگر ایمیل را مشاهده نکردید به قسمت spam در جیمیل خود مراجعه کنید</p>
              </div>
            </div>
          </div>
    )
}

export default ForgetPassword
