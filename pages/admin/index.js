import React, {useState ,useContext ,useEffect } from 'react'
import {useRouter} from 'next/router'
import NewPost from './components/newPost'
import Menu from './menu/menu'
import NewsPost from './components/newsPost'
import NewSerial from './components/newSerial'
import AdsPost from './components/adsPost'
import AuthContext from '../../components/context/authContext';

function Redirect ({to}) {
  const router = useRouter()
  useEffect(() => {
    router.push(to)
  },[to])
  return null
} 

const Admin = () =>{  
    const [serial , setSerial ] = useState(false)
    const [newpost , setNewpost ] = useState(false)
    const [news , setNews ] = useState(false)
    const [ads , setAds ] = useState(false)

   const removeHandler = () => {
        setSerial(false)
        setNewpost(false)
        setNews(false)
        setAds(false)
    }

   const newHandler = () => {
        setSerial(false)
        setNewpost(true)
        setNews(false)
        setAds(false)
    }
  const  serHandler = () => {
        setSerial(true)
        setNewpost(false)
        setNews(false)
        setAds(false)
       
    }
   const newsHandler = () => {
        setSerial(false)
        setNewpost(false)
        setNews(true)
        setAds(false)
         
    }
  const adsHandler = () => {
        setSerial(false)
        setNewpost(false)
        setNews(false)
        setAds(true)
         
    }
        const loggedIn = useContext(AuthContext)
        console.log(loggedIn)

    if(loggedIn.loggedIn === false ){
    return <Redirect to='/404' />     
     }
    return (
        <div>
      {loggedIn.loggedIn === true && <div className='admin-panel'>
            <NewPost show={newpost}/>
            <NewSerial show={serial}/>
            <Menu adshow={ads} Sshow={serial} Neshow={news} Nshow={newpost} Nclicked={newHandler} Sclicked={serHandler} remove={removeHandler} Neclicked={newsHandler} adclicked={adsHandler}/>
            <NewsPost show = {news} />
            <AdsPost show = {ads}/>
        </div>}
        </div>
    )

}

export default Admin
