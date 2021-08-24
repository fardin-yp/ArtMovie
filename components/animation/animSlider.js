import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default class serialSlider extends Component {

  state={
    imageIndex:0,
  }



  render() {

    return (
      <div className="serial-slider">
        <p>جدیدترین انیمیشن ها</p><div  className='doc-circle'><img style={{top:"-3px",left:".2px"}} src={'/images/doc.png'} alt="document.png" /></div>
        <p id="bottc" style={{position:"absolute" ,fontSize:"10px" , top:"25px" , opacity:"0.5"}}>آرشیو جدید ترین انیمیشن ها</p>
        <a className="archive" href="/animation"> آرشیو </a>
        <Slider dots={false}
        arrows={false}
        slidesToShow={3}
        slidesToScroll={1}
        centerMode={true}
        centerPadding={0}
        beforeChange={(current ,next) => this.setState({imageIndex:next})}
        autoplay={true}
        autoplaySpeed={3000}>
          
            {this.props.movies && this.props.movies.map((movi ,idx) => {
              return <div key={movi._id} className={idx === this.state.imageIndex ? 'active-serial-card':"serial-card"}>
                     <a href={`/movie/${movi._id}`}>{movi.image && <img src={`/uploads/${movi.image}` } alt="movie"/>}</a>
                    </div>
            })}
            
        </Slider>
        
      </div>
    );
  }

}