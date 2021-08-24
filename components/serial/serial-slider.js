import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'



export default class serialSlider extends Component {

  state={
    imageIndex:0,
  }



  render() {

    return (
      <div className="serial-slider">
        <p>برترین سریال ها</p><div  className='doc-circle'><img style={{top:"-3px",left:".2px"}} src={'/images/doc.png'} alt="document.png" /></div>
        <p id="bottw" style={{position:"absolute" ,fontSize:"10px" , top:"25px" , opacity:"0.5"}}>آرشیو برترین سریال ها</p>
        <a className="archive" href="/SerialPosts"> آرشیو </a>
        <Slider dots={false}
        arrows={false}
        slidesToShow={3}
        slidesToScroll={1}
        centerMode={true}
        centerPadding={0}
        beforeChange={(current ,next) => this.setState({imageIndex:next})}
        autoplay={true}
        autoplaySpeed={3000}>
          
            {this.props.serials && this.props.serials.filter(res => {
              return res.jender.includes("khareji")
            }).slice(0,10).map((movi ,idx) => {
              return <div key={movi._id} className={idx === this.state.imageIndex ? 'active-serial-card':"serial-card"}>
                     <div><a href={`/serial/${movi._id}`}>{movi.image && <img src={`/uploads/${movi.image}`} alt={movi.title}/>}</a></div>
                    </div>
            })}
            
        </Slider>
        
      </div>
    );
  }

}