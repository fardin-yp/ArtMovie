import Head from 'next/head'
import { Fragment } from 'react'
import Serial from '../../../components/Home/serial/Serial'




export async function getStaticProps() {

  const res = await fetch('http://localhost:27017/Allserial')
  const json = await res.json()

  const resSerial = await fetch('http://localhost:27017/serial')
  const serial = await resSerial.json()

  const resSlider = await fetch('http://localhost:27017/post/')
  const JsonSlider = await resSlider.json()

  const resAnimation = await fetch('http://localhost:27017/post/animation')
  const animation = await resAnimation.json()

  const Allnews = await fetch('http://localhost:27017/news')
  const news = await Allnews.json()

  return {
    props:{
      serial,
      json,
      news,
      animation,
      JsonSlider
    },
    revalidate:1
  };

 }
 export async function getStaticPaths (){
  return {
    fallback:false,
    paths:[
      {
        params:{
        genresId:'action'
      },
    },
    {
      params:{
        genresId:"horor"
      }
    },
    {
      params:{
        genresId:"drama"
      }
    },
      {
        params:{
          genresId:'mystery'
        }
      },
      {
        params:{
          genresId:'history'
        }
      },
      {
        params:{
          genresId:'fighting'
        }
      },
      {
        params:{
          genresId:'imaginary'
        }
      },
      {
        params:{
          genresId:'musical'
        }
      },
      {
        params:{
          genresId:'Criminal'
        }
      },
      {
        params:{
          genresId:'family'
        }
      },
      {
        params:{
          genresId:'western'
        }
      },
      {
        params:{
          genresId:'comedy'
        }
      }

    ]
  }
  
} 

export default function GenresPage( {json ,news , serial ,JsonSlider ,animation} ) {
  return (
<Fragment>
<Head>
    <link rel="icon" href="/art.png" />
    <title>{`دانلود فیلم و سریال با بهترین کیفیت`}</title>
    <meta name="og:type" content="article"/>
    <meta name="description" content=" ;دانلود فیلم و سریال با بهترین کیفیت و کاملا رایگان در آرت مووی" />
    <meta name="keywords" content={`دانلود فیلم,دانلود سریال,دانلود فیلم رایگان,artmovie,آرت مووی,دانلود سریال رایگان,دانلود فیلم مجانی`}/>
    <meta property="og:site_name" content="آرت مووی"/>
    <meta property="og:title" content="دانلود فیلم و سریال"/>
    <meta property="og:description" content=" ;دانلود فیلم و سریال با بهترین کیفیت و کاملا رایگان در آرت مووی" />
    <meta name="viewport" content="width=device-width, initial-scale-1" />
   </Head>
   <Serial movies={serial} news={news} serial={json} JsonSlider={JsonSlider} animation={animation}  />
</Fragment>

  )
}

