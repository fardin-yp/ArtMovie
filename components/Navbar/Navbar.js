import React,{useEffect ,useState,useContext} from 'react'
import BackDrop from '../backdrop/Backdrop'
import axios from 'axios'
import Image from 'next/image'
import art from '../../images/art.png'
import Slide from './slide/slide'





const Navbar = ( props ) => {

    const [search , setSearch ] = useState('')
    const [Msearch , setMSearch ] = useState('')
    const [movies ,setMovies] = useState([])
    const [serial ,setSerial] = useState([])
    const [open ,setOpen] = useState(false)
    const [empty , setEmpty ] = useState(false)
    const [year , setYear ] = useState('2010')
    const [genres , setGenres ] = useState('null')
    const [jender ,setJender ] =useState('movie')
    const [imdb ,setImdb ] = useState('6')
    const [navPlace ,SetNavPlace] = useState('home')

    


    useEffect(() => {
        async function fetchData(){
            axios.get("http://localhost:27017/post").then(res => {
                setMovies(res.data.findPost)
            })
            axios.get("http://localhost:27017/serial").then(res => {
                setSerial(res.data)
            })
         
        }
        fetchData()
    },['http://localhost:27017/serial' ,'http://localhost:27017/post'])

    const concat = movies.concat(serial)
    return(
        <nav className="navbar">
           <div className="nav-top">       
               <div className="log-con">
                   <a href='/Auth/Login'><img src="/images/user.png" alt="user-image" /></a><a href='/Auth/Login'>ورود به پنل</a>
               </div>
               <div className="in-con"><input onChange={(e) => setSearch(e.target.value)} placeholder="نام فیلم یا سریال را وارد کنید..." /></div>
               <div className="art-con">
               <h2 style={{margin:"25px 10px"}}>آرت مووی</h2><a href="/"><Image src={art} priority width={100} height={100} alt="ArtMovie" /></a>
               </div>
           </div>
           <div className="nav-bot">
          <ul> 
           <li><a href="/"> صفحه اصلی</a></li> 
           <li><a href={'/irani-movie'}>   فیلم ایرانی</a></li> 
           <li><a href="/SerialPosts">  سریال </a></li>
           <li><a href='/irani-serial'>سریال ایرانی</a></li>
           <li><a href="/animation"> انیمیشن</a></li>
           <li><a href="/movie-imdb"> 250 فیلم  IMDB</a></li>   
           <li><a href="/news">اخبار</a></li> 
           </ul>                    
           </div>
          {search && <BackDrop backclicked={() => setSearch('')}  />}
          {open && <BackDrop backclicked={() => setOpen(false)} />}
          {empty && <BackDrop backclicked={() => setEmpty(false)} />}

        <div className="nav-right" >
        {empty && <div className="pop-Msearch">
                   <h4 onClick={()=>setEmpty(false)} style={{cursor:'pointer',position:'absolute',right:"20px",top:"-30px",fontSize:"25px"}}>X</h4>
                    <input placeholder=" نام فیلم یا سریال را وارد کنید ..." onChange={e => setMSearch(e.target.value) }/>
           {!Msearch && <div style={{width:'82%',height:"60%",display:"flex"}}>
                        <div style={{height:"100%",width:"50%" ,display:"flex",flexFlow:"column",alignItems:"center",justifyContent:"space-evenly"}}>
                        <select style={{left:"90px" , top:"-12px"}}   onChange={e => setJender(e.target.value)}>
                   <option value="">دسته بندی</option>
                   <option value="khareji">فیلم</option>
                   <option value="irani">سریال</option>
                   <option value="animation">انیمیشن</option>
                   </select>

                <select style={{left:"0px" , top:"15px"}}   onChange={e => setGenres(e.target.value)}>
                   <option value="">انتخاب ژانر</option>
                   <option value="action">اکشن</option>
                   <option value="comedy">کمدی</option>
                   <option value="horor">ترسناک</option>
                   <option value="fighting">جنگی</option>
                   <option value="imaginary">تخیلی</option>
                   <option value="drama">درام</option>
                   <option value="history">تاریخی</option>
                   <option value="family">خانوادگی</option>
                   <option value="western">وسترن</option>
                   <option value="mystery">معمایی</option>
                </select>
                        </div>
                        <div style={{height:"100%",width:"50%" ,display:"flex",flexFlow:"column",alignItems:"center",justifyContent:"space-evenly"}}>
                <select style={{left:"90px" , top:"-12px"}}   onChange={e => setYear(e.target.value)}>
                   <option value="">سال انتشار</option>
                   <option value="2018">بالاتر از 2018</option>
                   <option value="2012">بالاتر از 2012</option>
                   <option value="2008">بالاتر از 2008</option>
                   <option value="2000">بالاتر از 2000</option>
                   <option value="1990">بالاتر از 1990</option>
                 </select>
                   <select onChange={e => setImdb(e.target.value)}>
                   <option value=""> نمره IMDB</option>
                   <option value="9">بیشتر از 9</option>
                   <option value="8">بیشتر از 8</option>
                   <option value="6">بیشتر از 6</option>
                   <option value="4">بیشتر از 4</option>
                   </select>
                        </div>
                    </div>}
                   {!Msearch  &&  <button style={{position:"relative",top:"-30px",padding:"5px 50px",cursor:"pointer",borderRadius:"5px",backgroundColor:"#53439c",border:"none",color:"white",fontSize:"large"}}><a href={`/search/${year}/${imdb}/${genres}/${jender}`}>جستجو</a></button>}
               {Msearch && <div className='result'>
                    {Msearch && concat.filter(se => {
        return se.title.toLowerCase().includes(Msearch.toLowerCase())
             }).slice(0,4).map(movi => {
                 return <div style={{width:"150px",height:"150px",marginTop:"10px"}}>
                    <a href={`/${movi.coll}/${movi._id}`} >
                 <img id="iamge" src={`/uploads/${movi.image}`} alt="movie"/>
                 </a>
                 </div>
             })} 
                    </div>}

                </div>}
                    
                    
            <div className="humburger" onClick={() => setOpen(prevState => {
                return !prevState})}>
                    <div className="hum-1"></div>
                    <div className="hum-1"></div>
                    <div className="hum-1"></div>
                </div>
                <img id="search" src='/images/search-2.png' alt="search" onClick={()=>setEmpty(true)}/>
                <h2>آرت مووی</h2>
                <a href="/" ><img src='/images/art.png' alt="Art Movie"></img></a>
        </div>
            <Slide open={open} closeClicked={() => setOpen(false)}/>

            {search && <div className="pop-search">
              <h4>نتایج جستجو</h4>
          {search &&  concat.filter(og => {
              return og.title.toLowerCase().includes(search.toLowerCase())
          }).slice(0,3).map(res => {
             return <a href={`/${res.coll}/${res._id}`}><div className='search-card'>
                          <img src={`/uploads/${res.image}`} />
                          <p>{res.title}</p>
                        </div>
                    </a>
          })}
          </div>}
        </nav>
    )
}

export default Navbar
