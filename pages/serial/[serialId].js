import Serial from '../../components/serial/fullSerial/fullSerial'

export async function getStaticProps(context) {
    
  const con = context.params.serialId
  const res = await fetch('http://localhost:27017/serial/' + con)
  const json = await res.json()

  const movieRes = await fetch('http://localhost:27017/post/allPost')
  const movie = await movieRes.json()

  const ads  = await fetch('http://localhost:27017/ad')
  const ad = await ads.json()
  
    return {
      props:{
        movie,
        json,
        ad
      }
    }
  }
  export async function getStaticPaths (){
    const resPath = await fetch('http://localhost:27017/serial/Allserial')
    const path = await resPath.json()
    return {
      fallback:'blocking',
      paths:path.map(movies => ({
         params:{serialId:movies._id.toString() },
      })),
    };

    
} 

  export default function fullPostfetch( {json , movie ,ad} ){

      return <Serial movies={json} movie={movie} ads={ad} />
  }