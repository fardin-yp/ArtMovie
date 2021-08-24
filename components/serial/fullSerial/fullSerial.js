import React,{Component , useEffect} from 'react'
import Navbar from '../../Navbar/Navbar'
import Comment from '../../Post/comment/comment'
import FullRight from '../../Post/FullRight'
import FullLeft from '../../Post/FullLeft'
import Footer from '../../footer/footer'
import Head from 'next/head'
import Ad from '../../Post/sameFilm/ad/Ad'
import { useRouter} from 'next/router'

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
        <title>{`دانلود سریال ${this.props.movies.title}`}</title>
        <meta name={`دانلود سریال${this.props.movies.title}`} content={`${this.props.movies.title} دانلود سریال ` }/>
        <meta name={'keywords'} content={`دانلود سریال ${this.props.movies.title},دانلود سریال ${this.props.movies.title} با زیرنویس فارسی`} />
        <meta name="og:type" content="article"/>
        <meta name="description" content=" ;دانلود فیلم و سریال با بهترین کیفیت و کاملا رایگان در آرت مووی" />
        <meta name="keywords" content={`دانلود سریال ${this.props.movies.title} بدون سانسور ,دانلود سریال,دانلود سریال رایگان,آرت مووی ,دانلود سریال رایگان  ${this.props.movies.title},دانلود سریال ${this.props.movies.title}`}/>
        <meta property="og:site_name" content="آرت مووی"/>
        <meta property="og:title" content={`دانلود فیلم ${this.props.movies.title}`} />
        <meta property="og:url" content="www.ArtMovie.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="Fa_IR" />
        <meta property="og:description" content={`دانلود فیلم ${this.props.movies.title},${this.props.movies.title},دانلود فیلم${this.props.movies.title} با زیرنویس فارسی`} />
    </Head>
        <FullRight />
        <FullLeft movies={this.props.movie} />
       <Navbar />
       <div className='layout'>
        <div className="full-post">     
         <h3> با لینک مستقیم {this.props.movies.title} دانلود سریال</h3>
          {this.state.saved && <div className="tick"><img src='/images/tick.png' alt="tick" /></div>}
          <div className="movi-right">
         <img src={`/uploads/${this.props.movies.image}`} alt="movie-pic"/>
         {this.props.movies.with === "IMDB" && <div style={{top:"365px" ,width:"94%",right:"35px"}} className='imdb'><div className="left-imdb"><img style={{width:"38px",height:"26px",marginRight:"50px",borderRadius:"5px"}} src='/images/white.png' alt="imdb" /></div><p> 250 فیلم برتر IMDB</p></div>}
         {this.props.movies.with === "duble" && <div style={{top:"365px" ,width:"94%",right:"35px"}} className='duble'><div className="left-mic"><img style={{width:"15px",height:"26px",marginRight:"100px",borderRadius:"5px"}} src='/images/duble.png' alt="imdb" /></div><p> همراه با دوبله فارسی</p></div>}  
         </div> 
         <div className="full-des">
         <p>نمره <img src='/images/imdb.png' alt="imdb-logo"/>:<bp style={{opacity:"0.7"}}>{this.props.movies.score}</bp></p>
             <p> ژانر : <bp style={{opacity:"0.7"}}>{this.props.movies.genres}</bp>  </p>
             <p> مدت زمان : <bp style={{opacity:"0.7"}}>{this.props.movies.time}</bp> </p>
             <p>سال تولید : <bp style={{opacity:"0.7"}}>{this.props.movies.age}</bp></p>
             <p> کارگردان : <bp style={{opacity:"0.7"}}>{this.props.movies.director}</bp> </p>
             <p> بازیگران : <bp style={{opacity:"0.7"}}>{this.props.movies.actores}</bp>  </p>
             <p> خلاصه داستان : <br /> <p style={{opacity:"0.7",marginRight:"0px"}}>{this.props.movies.story}</p> </p>
             {this.props.movies.message && <p id="message">{this.props.movies.message}<img src='/images/bell.png' alt="bell"/></p>}
         </div>
    </div>
    <Ad ads={this.props.ads}/> 
    <div className="down-box">
         <div className="links">
         <div className="top-link">
             <p style={{position:"absolute" , right:"110px",top:"5px"}}> باکس دانلود </p><img src='/images/down.png' alt="download"/>
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
