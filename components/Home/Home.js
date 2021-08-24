import { useState ,useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Slider from '../slider/slider'
import Footer from '../footer/footer'
import Ads from '../ads/Ads'
import SerialSlider from '../serial/serial-slider'
import Jenres from '../jenres/jenres'
import SerialIrani from '../serial/seialIrani/serialIrani'
import Anime from '../animation/animSlider'
import News from '../News/News'
import Year from '../year/year'
import Image from 'next/image'
import axios from 'axios'
import Like from './like/like'



export default function Home (props) {

    const [messages , setMessages ] = useState([])
    const page = parseInt(props.movies.page)
    const pages = props.movies.pages


   const display = props.movies.findPost.map(movi => {
        return<div className="post" key={movi._id}>
        <div className="movi-right">
        <div className="image-place">
            <a href={`/movie/${movi._id}`}>
                <Image priority className="image" src={`/uploads/${movi.image}`} quality={50} layout="fill" alt={movi.title}/>
            </a>
        </div>
        {movi.with === "duble" && <div className='duble'><div className="left-mic"><img src='/images/mic.png' alt="microphone" /></div><p>همراه با دوبله فارسی </p></div>} 
        {movi.with === "IMDB" && <div className='imdb'><div className="left-imdb"><img src='/images/white.png' alt="imdb" /></div><p > 250 فیلم برتر IMDB</p></div>} 
        </div>
        <div className="movi-left">
        <a style={{textDecoration:"none"}} href={`/movie/${movi._id}`} ><h3>با زیرنویس فارسی {movi.title} دانلود فیلم </h3></a>
        <p>نمره <img src={'/images/imdb.png'} alt='/images/imdb.png'/>:<bp style={{opacity:"0.7"}}>{movi.score}</bp></p>
        <p>سال تولید : <bp style={{opacity:"0.7"}}>{movi.age}</bp></p>
        <p> کارگردان : <bp style={{opacity:"0.7"}}>{movi.director}</bp> </p>
        <p>بازیگران : <bp style={{opacity:"0.7"}}>{movi.actores}</bp></p>
        <p>داستان فیلم : <p style={{opacity:"0.7",position:"relative",top:"-18px",width:"90%"}}>{movi.story}</p></p>
        <a href={`/movie/${movi._id}`} ><button>ادامه مطلب و دانلود</button></a>     
        </div>
        <div className="movi-bottom">
        <img style={{position:"relative",width:"30px",left:"8px"}} alt="menu" src='/images/menu.png' /><p style={{position:"relative",left:"14px",fontSize:"12px"}}>{movi.genres}</p>
        <img src='/images/imdb.png' alt="imdb-logo"/><p style={{opacity:"0.7",position:"relative",right:"-7px"}}>:{movi.score}</p>
        
        <p style={{position:'absolute', top:"0",fontSize:"15px",opacity:"0.8"}}><a style={{color:"black"}} href={`/movie/${movi._id}`}>دانلود فیلم {movi.title} با زیرنویس فارسی </a></p>
    </div>  
        <div className="like">
        <Like movie={movi.title} />
        <p movie={movi.title} />
                    {messages.filter(res => {
                       return res.movie.includes(movi.title)
                    }).length}       
            <a href="" movie={movi.title} />  
            <p style={{direction:"rtl",fontSize:"12px",position:"relative",top:"1px",left:"1px"}}> دیدگاه: </p><img src='/images/cm.png' alt="comment"></img>
        </div>
    </div>
    })

   let middlePagination;

   if(props.movies.pages <= 5 ){
       middlePagination=[...Array(props.movies.pages)].map((_ , idx) => {
           return <a style={page === idx + 1 ? {backgroundColor:"rebeccapurple",color:"white" } : null} key={idx +1} href={`${props.movies.route}/page/${idx + 1}`} >{idx +1}</a>
       })
   } else {
       var startValue = Math.floor((props.movies.page - 1) / 5 ) * 5; 
       console.log(startValue)
       middlePagination  = (
           <>
           {[...Array(5)].map(( _ , idx) => (
            <a style={page === idx + 1 ? {backgroundColor:"rebeccapurple",color:"white" } : null} key={startValue +idx + 1} href={`${props.movies.route}/page/${startValue + idx + 1}`}>{startValue + idx + 1}</a>
           ))}
           <a>...</a>
           </>
       )

   }
   if(page > 5) {
       if(props.movies.pages - page >= 5){

        middlePagination  = (
            <>
            <a href={`/page/${1}`}>1</a>
            <a>...</a>
            {[...Array(5)].map(( _ , idx) => (
             <a style={page === idx + 1 ? {backgroundColor:"rebeccapurple",color:"white" } : null} key={startValue +idx + 1} href={`${props.movies.route}/page/${startValue + idx + 1}`}>{startValue + idx + 1}</a>
            ))}
            <a>...</a>
            </>
        )
       }else{
        middlePagination  = (
            <>
            <a href={`/page/${1}`}>1</a>
            <a>...</a>
            {[...Array(5)].map(( _ , idx) => (
             <a key={startValue +idx + 1} href={`${props.movies.route}/page/${startValue + idx + 1}`} style={props.movies.pages < startValue + idx + 1 ? {display:"none"} : null}>{startValue + idx + 1}</a>
            ))}
            </>
        )

       }
   }

    useEffect(() => {
        async function fetchData(){
        await axios.get('http://localhost:27017/messages').then(res => {      
            setMessages(res.data)
         })
        }
    fetchData()
    // paginate()
    },[])

    return (
    <div>
        <div className='home'>
            <Navbar/>
            <div className='card-1'>
                <Ads />
                <SerialSlider serials={props.serial} />
                <Anime movies={props.animation}/> 
            </div>
            <div className="card-2">
                <Slider resSlider={props.resSlider} />
                <News news={props.news}/>
                <Year />
              {display}
            <div className="paginate-card">
               <a style={page === 1 ? {opacity:"0.5", cursor:"not-allowed"} :null} href={page === 1 ? null :`${props.movies.route}/page/${page-1}`}>قبلی</a>
               {middlePagination}
              <a style={page === props.movies.pages ? {opacity:"0.5", cursor:"not-allowed"} :null} href={page === props.movies.pages ? null :`${props.movies.route}/page/${page+1}`}>بعدی</a>
              <a href={props.movies.route +"/page/" + props.movies.pages}>آخرین صفحه</a>
            </div>
          <Footer />
        </div>  
        <div className='card-3'>
                <Jenres/>
                <SerialIrani serials={props.serial} />
                {/* <PopAd /> */}
            </div>  
    </div>
</div>
    )
}



