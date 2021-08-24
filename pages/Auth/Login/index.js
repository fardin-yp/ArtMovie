import React,{useState , useContext , useEffect} from 'react'
import axios from 'axios'
import AuthContext from '../../../components/context/authContext'
import { useRouter } from 'next/router'
import { withCookies } from 'react-cookie'

function Redirect ({to}) {
  const router = useRouter()
  useEffect(() => {
    router.push(to)
  },[to])
  return null
} 

const Login = () => {

    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')
    const {getLoggedIn ,getUserLoggedIn} = useContext(AuthContext);
    const [loading , setLoading] = useState(false);
    const [error ,setError] = useState('')
    const router = useRouter()
    

  async function loginHandler(e){
     
    e.preventDefault()
    setLoading(true)
       const post = {email,password} 
      try{
        await axios.post('http://localhost:27017/authentication/login' , post ,{withCredentials:true}).then(res => {
          if(res.data.errMessage){
            setError(res.data.errMessage)}
        setTimeout(function(){
     }.bind(),10000) 
        })
        await getUserLoggedIn()
        router.push('/')
      }catch(err){
        setError(err.response.data.err)

        setTimeout(function(){
          setError('');
     }.bind(),10000);
        setLoading(false)   
      }
      try{
        await axios.post('http://localhost:27017/auth/login' , post).then()
        await getLoggedIn()
        router.push('/Admin')
  
      }catch(err){} 
   }
   let err = ['err']
   if(error){
     err = ['open-err','err']
   }

    return (
        <div className="background">
          <div className="cover"></div>
          <div className={err.join(' ')}><p>{error}</p><button onClick={() => setError(false)}>X</button>{error && <hr />}</div>
          <div className='login-card'>
          <h1>ورود به پنل کاربری</h1>
            <form onSubmit={loginHandler}>
            {loading && <div className='loading-spinner'></div>}
           <input placeholder="ایمیل" type='email' onChange={e => setemail(e.target.value)} value={email} /> 
           <input placeholder="کلمه عبور" type='password' onChange={e => setPassword(e.target.value)} value={password} />
           <button onClick={loginHandler} disabled={loading===true}><b>Login</b></button>
           <a style={{textDecoration:"none"}} href='/Auth/forget-Password'><p style={{fontSize:"12px" ,opacity:"0.7",cursor:"pointer"}}>رمز عبور را فراموش کرده اید؟</p></a>
           <a href="/auth" style={{marginTop:"0px",textAlign:'right' , color:"black", textDecoration:"none" ,fontSize:"larger"}}><p>ایجاد حساب  </p></a>
        </form>
        </div>
        </div>
    )
}

export default Login
