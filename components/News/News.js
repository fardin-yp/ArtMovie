import React, { Component } from 'react'
import Image from 'next/image'


class News extends Component{

    render (){

        const rev = this.props.news.reverse()
    return (
    <>
    <div className={this.props.show ? "black-news":'news'}>
        <div className='news-title'>
           <p>اخبار سینمای جهان</p>
            <a href="/news">آرشیو اخبار</a>
        </div>
        {rev.slice(0,2).map(ne => {
            return<div key={ne._id} className='container'>
                        <div className="image-news">
                        <Image className="news-image" quality={55} priority layout={"fill"}  src={`/newsUpload/${ne.image}`}  alt={ne.title}/>
                        </div>
                        <p>{ne.title}</p>
                   </div>
        })}
    </div>
        
    </>
    )
}
}

export default News
