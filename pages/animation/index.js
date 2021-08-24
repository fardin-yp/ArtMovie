import Home from "../../components/Home/Home"

export async function getStaticProps() {
    const res = await fetch('http://localhost:27017/post/animation')
    const json = await res.json()

    const resSerial = await fetch('http://localhost:27017/serial/Allserial')
    const serial = await resSerial.json()

    const resSlider = await fetch('http://localhost:27017/post/allPost')
    const JsonSlider = await resSlider.json()
  
    const resAnimation = await fetch('http://localhost:27017/post/Allanimation')
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
    }
  }


  export default function IraniPage( {json ,news , serial ,JsonSlider ,animation} ) {
    return (
      <Home movies={json} news={news} serial={serial} resSlider={JsonSlider} animation={animation} />
    )
  }