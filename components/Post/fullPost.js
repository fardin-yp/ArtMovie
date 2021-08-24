import React,{Component ,useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Samefilm from './sameFilm/samefilm'
// import Ad from './sameFilm/ad/Ad'
import Comment from './comment/comment'
// import Middle from './sameFilm/ad/Middle'
import FullRight from './FullRight'
import FullLeft from './FullLeft'
import Footer from '../footer/footer'
import Head from 'next/head'
import Ad from './sameFilm/ad/Ad'
import {useRouter} from 'next/router'


function Redirect ({to}) {
  const router = useRouter()
  useEffect(() => {
    router.push(to)
  },[to])
  return null
} 


class FullPost extends Component {

 state={
     loading:false,
     saved:false 
 }


saved = () => {
    this.setState(prevState  => {
        return ({saved:!prevState})        
})}

 render()  {   
     if(this.props.movies.title == undefined ){
         return <Redirect to='/404' />
         
     }
    
    return (
    <div className="full">
        <Head>
            <link rel="icon" href="/art.png" />
            <title>{`دانلود فیلم${this.props.movies.title}`}</title>
            <meta name={`دانلود فیلم${this.props.movies.title}`} content={`${this.props.movies.title}دانلود فیلم` }/>
            <meta name={'keywords'} content={`دانلود فیلم ${this.props.movies.title},دانلود فیلم ${this.props.movies.title} با زیرنویس فارسی`} />
            <meta name="og:type" content="article"/>
            <meta name="description" content=" ;دانلود فیلم و سریال با بهترین کیفیت و کاملا رایگان در آرت مووی" />
            <meta name="keywords" content={`دانلود فیلم,دانلود سریال,دانلود فیلم رایگان,artmovie,آرت مووی,دانلود سریال رایگان,دانلود فیلم مجانی`}/>
            <meta property="og:site_name" content="آرت مووی"/>
            <meta property="og:title" content={`دانلود فیلم ${this.props.movies.title}`} />
        <meta property="og:description" content={`دانلود فیلم ${this.props.movies.title},${this.props.movies.title},دانلود فیلم${this.props.movies.title} با زیرنویس فارسی`} />
        </Head>
        <FullRight />
        <FullLeft movies={this.props.movie} />
       <Navbar />
       {/* <Middle /> */}
       <div className='layout'>
        <div className="full-post">     
         <h3> با لینک مستقیم {this.props.movies.title} دانلود فیلم</h3>
          {this.state.saved && <div className="tick"><img src='/images/tick.png' alt="tick" /></div>}
          <div className="movi-right">
         <img style={{top:"-5px"}} src={`/uploads/${this.props.movies.image}`} alt={this.props.movie.title}/>
         {this.props.movies.with === "IMDB" && <div style={{top:"332px" ,width:"91%",right:"35px"}} className='imdb'><div className="left-imdb"><img style={{width:"38px",height:"26px",left:"-23px",borderRadius:"5px"}} src='/images/white.png' alt="imdb" /></div><p> 250 فیلم برتر IMDB</p></div>}
         {this.props.movies.with === "duble" && <div style={{top:"332px" ,width:"91%",right:"35px"}} className='duble'><div className="left-mic"><img style={{width:"15px",height:"26px",marginRight:"100px",borderRadius:"5px"}} src='/images/mic.png' alt="imdb" /></div><p> همراه با دوبله فارسی</p></div>}  
         </div> 
         <div className="full-des">
         <p>نمره <img src='/images/imdb.png' alt="imdb-logo"/>:<bp style={{opacity:"0.7"}}>{this.props.movies.score}</bp></p>
             <p> ژانر : <bp style={{opacity:"0.7"}}>{this.props.movies.genres}</bp>  </p>
             <p> مدت زمان : <bp style={{opacity:"0.7"}}>{this.props.movies.time}</bp> </p>
             <p>سال تولید : <bp style={{opacity:"0.7"}}>{this.props.movies.age}</bp></p>
             <p> کارگردان : <bp style={{opacity:"0.7"}}>{this.props.movies.director}</bp> </p>
             <p> بازیگران : <bp style={{opacity:"0.7"}}>{this.props.movies.actores}</bp>  </p>
             <p> خلاصه داستان : <br /> <p id="story">{this.props.movies.story}</p> </p>
             {this.props.movies.message &&<div className="movi-message"><b>{this.props.movies.message}</b><img src='/images/bell.png' alt="bell"/></div>}
         </div>
    </div>
     <Samefilm sameMovies={this.props.movie} jenres={this.props.movies.jenres} name={"فیلم"} title={this.props.movies.title}/> 
    <Ad ads={this.props.ads} /> 
    <div className="down-box">
         <div className="links">
         <div className="top-link">
             <p style={{position:"absolute" , right:"100px",top:"8px"}}> باکس دانلود </p><img src='/images/down.png' alt="download"/>
         </div>
             <div className="link"><p style={{direction:"rtl"}}>دانلود با کیفیت <b>480</b></p><p> حجم:2.5 گیگابایت </p> <a href={`/uploads/${this.props.movies.link480}`} download>لینک دانلود</a> </div>
             <div className="link"><p>دانلود با کیفیت <b>720</b></p><p > حجم:2.5 گیگابایت </p><a href={`/uploads/${this.props.movies.link720}`} download>لینک دانلود</a></div>
             <div className="link"><p>دانلود با کیفیت <b>1080</b></p><p> حجم:2.5 گیگابایت </p><a href={`/uploads/${this.props.movies.link1080}`} download>لینک دانلود</a></div>
             <div className="link-sub"><a href={`https://subf2m.co/subtitles/${this.props.movies.subtitle}`}>جستجوی زیرنویس فارسی</a></div>
         </div>
         </div>
    <Comment movie={this.props.movies.title} />
    </div>
    <Footer />
    </div>
    
    )
}
}
    

export default FullPost
