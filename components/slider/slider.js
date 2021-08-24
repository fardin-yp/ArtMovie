import Slider from "react-slick";
import {FaArrowRight ,FaArrowLeft} from 'react-icons/fa'
import Image from "next/image";


const SampleNextArrow = ({onClick}) => {
  return (
    <div className='arrow-next' onClick={onClick}>
      <FaArrowRight />
    </div>
  );
}

const SamplePrevArrow = ({onClick}) => {
  return (
    <div className='arrow-prev' onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
}


function Slide(props){


var settings = {
      dots:false,
      slidesToShow:4,
      slidesToScroll:1,
      autoplay:true,
      autoplaySpeed:3000,
      nextArrow:<SampleNextArrow />,
      prevArrow:<SamplePrevArrow />,

      responsive: [
        {
        breakpoint:810,
        settings: {
          dots:false,
          slidesToShow:3,
          slidesToScroll:1,
          autoplay:true,
          autoplaySpeed:3000,
          nextArrow:<SampleNextArrow />,
          prevArrow:<SamplePrevArrow />,
        }
      },
      {
        breakpoint:650,
        settings: {
          dots:false,
          slidesToShow:2,
          slidesToScroll:1,
          autoplay:true,
          autoplaySpeed:3000,
          nextArrow:<SampleNextArrow />,
          prevArrow:<SamplePrevArrow />,
        }
      }
    ]
};

    return (
      <div className="box">
         <Slider className="Slider" {...settings}>
         {props.resSlider && props.resSlider.slice(0,10).map(movi => {
              return( <div key={movi._id}>
              <div className="slider-card">
              <a to={'/movie/' + movi._id}><Image priority  quality={50} width={200}height={150} src={`/uploads/${movi.image}` } alt="movie"/></a>
              </div>
              <a style={{textDecoration:"none"}} href={'/movie/' + movi._id}><div className="card-hover">
              <p>{movi.title}</p>
              <img src={"/images/imdb.png"} alt="imdb" /><p style={{top:"15px" ,left:"10px",textAlign:"center"}}>{movi.score} :</p> 
              <p style={{fontSize:"12px"}}>{movi.director}:کارگردان</p>
              <p style={{fontSize:"12px"}}>{movi.age}:سال تولید</p>
              </div>
              </a>
              </div>)
            })}
        </Slider>
      </div>
    );
  }

export default Slide


