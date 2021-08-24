import React, { Component } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import {FaArrowRight ,FaArrowLeft} from 'react-icons/fa'




class Samefilm extends Component { 

    clicked =() => {
        window.scroll({
            top:0,
            left:0
        })
        window.location.reload()
    }

   
    render () {
        const SampleNextArrow = ({onClick}) => {
            return (
              <div className='arrow-go' onClick={onClick}>
                <FaArrowRight />
              </div>
            );
          }
          
         const SamplePrevArrow = ({onClick}) => {
            return (
              <div className='arrow-back' onClick={onClick}>
                <FaArrowLeft />
              </div>
            );
          }
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
            breakpoint:1110,
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
        <div className="same-div">
            <p>{this.props.name} های مشابه</p>
            <Slider className="sal" {...settings}>  
        {this.props.sameMovies.filter(same => {
            return same.jenres.includes(this.props.jenres)
        }).filter(se => {
          return se.jender.includes('khareji')
        }).filter(re =>{
          return re.title !== this.props.title
        })
        .map(movi => {
            return(
            <> 
              <div className="same-card" href={'/movie/' + movi._id}>
                <img src={`/uploads/${movi.image}` } alt="movie"/>
              </div>
              <a style={{textDecoration:"none"}} href={'/movie/' + movi._id}><div className="same-cards-hover">
              <p>{movi.title}</p>
              <img src={"/images/imdb.png"} alt="imdb" /><p style={{top:"15px" ,left:"10px",textAlign:"center"}}>{movi.score} :</p> 
              <p style={{fontSize:"12px"}}>{movi.director}:کارگردان</p>
              <p style={{fontSize:"12px"}}>{movi.age}:سال تولید</p>
              </div>
              </a>   
        </>
            )
        })}
      </Slider>
    </div>
    )

}
}
export default Samefilm
