import { Fragment } from 'react'
import News from '../../components/News/component/componet'
import Head from 'next/head'

export async function getStaticProps() {
    const res = await fetch('http://localhost:27017/news')
    const json = await res.json()
    return {
      props:{
        json
      },
      revalidate:1
    }
  }


  export default function NewsPage( {json} ) {
    return (
    <Fragment>
      <Head>
      <link rel="icon" href="/art.png" />
        <title>{`اخبار سینمای جهان`}</title>
        <meta name="og:type" content="article"/>
        <meta name="description" content=" ;دانلود فیلم و سریال با بهترین کیفیت و کاملا رایگان در آرت مووی" />
        <meta name="keywords" content={`دانلود فیلم,دانلود سریال,دانلود فیلم رایگان,artmovie,آرت مووی,دانلود سریال رایگان,دانلود فیلم مجانی`}/>
        <meta property="og:site_name" content="آرت مووی"/>
        <meta property="og:title" content="دانلود فیلم و سریال"/>
        <meta property="og:description" content=" ;دانلود فیلم و سریال با بهترین کیفیت و کاملا رایگان در آرت مووی" />
      </Head>
      <News  news={json}/>
    </Fragment>
    )
  
  }