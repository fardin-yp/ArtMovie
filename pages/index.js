import Head from 'next/head'
import { Fragment, useState ,useEffect } from 'react'
import Home from '../components/Home/Home'



export async function getStaticProps(context) {
  let page = 1
  if(context.query){
   page = context.query.page
  }
  const resSlider = await fetch('http://localhost:27017/post/allPost')
  const JsonSlider = await resSlider.json()

  const res = await fetch(`http://localhost:27017/post?page=${page}`)
  const json = await res.json()

  const resAnimation = await fetch('http://localhost:27017/post/Allanimation')
  const animation = await resAnimation.json()

  const resSerial = await fetch('http://localhost:27017/serial/Allserial')
  const serial = await resSerial.json()

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




export default function HomePage( {json ,news ,serial ,animation ,JsonSlider } ) {

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
    <meta property="og:url" content="www.ArtMovie.com" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="Fa_IR" />
</Head>
   <Home movies={json} news={news} serial={serial} animation={animation} resSlider={JsonSlider} />
</Fragment>

  )
}

