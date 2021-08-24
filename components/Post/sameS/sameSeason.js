import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../sameFilm/samefilm.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import {FaArrowRight ,FaArrowLeft} from 'react-icons/fa'
import imdb from '../../../home/imdb.png'



class SameSeason extends Component { 
    state={
        sameMovies:[],
        loading:false,
        filter:'1080p'
    }
    
  async componentDidMount(){

       this.setState({loading:true})
    await axios.get('http://localhost:27017/season').then(res => {
          this.setState({sameMovies:res.data})
          this.setState({loading:false})
      }) 
    }
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
            <p> فصل های دیگر</p>
            <Slider className="sal" {...settings}>  
        {this.props.season && this.props.season.filter(op => {
          return op.quality.includes(this.state.filter)
        }).map(movi => {
            return(
                <> 
              <Link to={`/season/${movi.season}/${movi._id}`} key={movi._id}>
              <div className="same-card">
                     <img src={`/seasonsUpload/${movi.image}` } alt="movie"/>
              </div></Link>
              <Link style={{textDecoration:"none"}} to={`/season/${movi.name}/${movi.season}/${movi._id}`}><div className="same-cards-hover">
                <p>{movi.title}</p>
              <img src={imdb} alt="imdb" /><p style={{top:"15px" ,left:"10px",textAlign:"center"}}>{movi.score} :</p> 
              <p style={{fontSize:"12px"}}>{movi.director}:کارکردان</p>
              </div>
              </Link>   
        </>
            )
        })}
      </Slider>
    </div>
    )

}
}
export default SameSeason
