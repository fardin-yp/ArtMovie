import Image from "next/image"


const Ads = () => {
    return (
        <>
        <a href="https://www.instagram.com/art_to_movie/" >
            <div className="ads">
        <Image quality={1} width={350} height={300} src={'/images/insta.gif'} alt="instagram"/>
        <p>ما را در اینستاگرام دنبال کنید</p>
        <h4>art-movies</h4>
        </div>
        </a>
        </>
    )
}

export default Ads
