import FullPost from "../../components/Post/fullPost"

export async function getStaticProps(context) {
    
  const con = context.params.movieId
    const res = await fetch('http://localhost:27017/post/' + con)
    const json = await res.json()
    const movieRes = await fetch('http://localhost:27017/post/')
    const movie = await movieRes.json()
    const ads  = await fetch('http://localhost:27017/ad')
    const ad = await ads.json()
  
    return {
      props:{
        movie,
        json,
        ad,
      },
      revalidate:1
    }
  }
  export async function getStaticPaths (){

    const resPath = await fetch('http://localhost:27017/post/allPost')
    const path = await resPath.json()

    return {
      fallback:'blocking',
      paths:path.map(movies => ({
         params:{movieId:movies._id.toString() },
      })),
    };

    
} 

  export default function fullPostfetch( {json , movie , ad} ){

      return <FullPost movies={json} movie={movie} ads={ad}/>
  }