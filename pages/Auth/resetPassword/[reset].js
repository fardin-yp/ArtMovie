import axios from 'axios'
import React, { useState } from 'react'
import { useRouter } from 'next/router'

const ResetPassword = (props) => {
    const [password, setPassword] =useState('')
    const [verify, setVerify] =useState('')
    const [seccsess ,setSeccess] = useState('')
    const [error ,setError] = useState('')
    const [loading , setLoading] = useState(false);
    const Router = useRouter()

    async function reset(){
      
      const post = {password ,token:Router.query.reset,verify}
      await axios.post('http://localhost:27017/authentication/reset' ,post).then(res => {
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
        <div className="reset-card">
            <p > تغییر رمز عبور اکانت </p>
            <input type="password" placeholder="رمز عبور جدید" onChange={(e) => setPassword(e.target.value)} value={password} />
            <input type="password" placeholder="تایید رمز عبور" onChange={(e) => setVerify(e.target.value)} value={verify} />
            <button disabled={loading} onClick={reset}>ثبت</button>
        </div>
        </div>
    )
}

export default ResetPassword
