import Home from "../../../components/Home/Home"

export async function getStaticProps(context) {
    
  const con = context.params.page

  const res = await fetch(`http://localhost:27017/post/Imdb?page=${con}`)
  const json = await res.json()

  const resSlider = await fetch('http://localhost:27017/post/allPost')
  const JsonSlider = await resSlider.json()

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
export async function getStaticPaths (){
  const resSlider = await fetch('http://localhost:27017/post/Imdb')
  const JsonSlider = await resSlider.json()
  const pages = parseInt(JsonSlider.pages)
  const arr = [...Array(pages)]

    return {
      fallback:false,
      paths:arr.map((_ ,idx) => ({
        params:{page:(idx + 1).toString()}
      })),
    }
    
  } 

  export default function fullPostfetch( {json ,news , serial ,animation ,JsonSlider} ){

      return <Home movies={json} news={news} serial={serial} animation={animation} resSlider={JsonSlider}  />
  }