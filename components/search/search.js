import { useState ,useEffect } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../Navbar/Navbar'
import Slider from '../slider/slider'
import Footer from '../footer/footer'
import ReactPaginate from 'react-paginate'
import Ads from '../ads/Ads'
import SerialSlider from '../serial/serial-slider'
import Jenres from '../jenres/jenres'
import SerialIrani from '../serial/seialIrani/serialIrani'
import Anime from '../animation/animSlider'
import News from '../News/News'
import Year from '../year/year'
import Image from 'next/image'
import axios from 'axios'
import Like from '../Home/like/like'

export default function Search (props) {

    const [moviesPage , setMoviespage] = useState(0)
    const [messages , setMessages ] = useState([])
    const router = useRouter()

    const filterIran = props.movies.filter(se => {
        return se.jender.toLowerCase().includes('khareji')
      })
      const filterYear = filterIran.filter(ye => {
          return (
              ye.year < router.query.year
              && ye.IMDB < router.query.imdb
          )
      });
      const filterJenres = filterYear.filter(jen => {
          return jen.jenres.includes(router.query.genres)
      })
      const filterimdb = filterJenres.filter(im => {
          return  im.IMDB < router.query.imdb
      })

    const moviesPerPage = 5;
    const pageVisited = moviesPage * moviesPerPage

   const display = filterimdb.reverse().slice(pageVisited, pageVisited + moviesPerPage).map(movi => {
        return<div className="post" key={movi._id}>
        <div className="movi-right">
        <div className="image-place"><a href={`/movie/${movi._id}`}><Image priority className="image" src={`/uploads/${movi.image}`} quality={50} layout="fill" alt='movie-image'/></a></div>
        {movi.with === "duble" && <div className='duble'><div className="left-mic"><img src='/images/mic.png' alt="microphone" /></div><p>همراه با دوبله فارسی </p></div>} 
        {movi.with === "IMDB" && <div className='imdb'><div className="left-imdb"><img layout="fixed" src='/images/white.png' alt="imdb" /></div><p > 250 فیلم برتر IMDB</p></div>} 
        </div>
        <div className="movi-left">
        <a style={{textDecoration:"none"}} href={`/movie/${movi._id}`} ><h3>با زیرنویس فارسی {movi.title} دانلود فیلم </h3></a>
        <p>نمره <img src={'/images/imdb.png'} alt='/images/imdb.png'/>:<bp style={{opacity:"0.7"}}>{movi.score}</bp></p>
        <p>سال تولید : <bp style={{opacity:"0.7"}}>{movi.age}</bp></p>
        <p> کارگردان : <bp style={{opacity:"0.7"}}>{movi.director}</bp> </p>
        <p>بازیگران : <bp style={{opacity:"0.7"}}>{movi.actores}</bp></p>
        <p>داستان فیلم : <p  style={{opacity:"0.7",position:"relative",top:"-18px"}}>{movi.story}</p></p>
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
    const pageCount = Math.ceil(filterimdb.length / moviesPerPage)

    const changePage = ({selected}) => {
         setMoviespage(selected)
    }

    useEffect(() => {
        async function fetchData(){
        await axios.get('http://localhost:27017/messages').then(res => {      
            setMessages(res.data)
         })
        }
    fetchData()
    },[])

    return (
    <div>
        <div className='home'>
            <Navbar/>
            <div className='card-1'>
                <Ads />
                <SerialSlider serials={props.serial} />
                 <Anime movies={props.movies}/> 
            </div>
             <div className="card-2">
                <Slider movies={props.movies} />
                <News news={props.news}/>
                <Year />
              {display}
              <div className="paginate-card">
              <ReactPaginate       
            previousLabel={"قبلی"} 
            nextLabel={"بعدی"}
            pageCount={pageCount} 
            onPageChange={changePage}
            containerClassName={"pagination-bttn"}
            previousLinkClassName={"previous-bttn"}
            nextLinkClassName={"next-bttn"}
            disabledClassName={"disabled"}
            activeClassName={"active-bttn"}
            />
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