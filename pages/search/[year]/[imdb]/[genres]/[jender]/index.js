import Head from 'next/head'
import { Fragment } from 'react'
import Search from '../../../../../../components/search/search'

export async function getServerSideProps() {
  const res = await fetch('http://localhost:27017/post')
  const json = await res.json()
  const resSerial = await fetch('http://localhost:27017/serial')
  const serial = await resSerial.json()
  const Allnews = await fetch('http://localhost:27017/news')
  const news = await Allnews.json()

  return {
    props:{
      serial,
      json,
      news
    }
  };

 }

 



export default function HomePage( {json ,news , serial} ) {
  
  return (
<Fragment>
   <Search movies={json} news={news} serial={serial} />
</Fragment>

  )
}
