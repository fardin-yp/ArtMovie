import React, { Component } from 'react'
import Navbar from '../../Navbar/Navbar'
import ReactPaginate from 'react-paginate'
import Footer from '../../footer/footer'
import Image from 'next/image'

class news extends Component {
    state= {
        page:0
    }

 render () {
    const pageCount = Math.ceil()
    const changePage = ({selected}) => {
         this.setState({})
    }
    const rev = this.props.news.reverse()
    return (
        <div className="ne">
           <Navbar />
            <div className="hole-card">
             <div className="news-right">
            {rev.slice(0,10).map(ne => {     
    return<div className='new-card'>
            <div className="image-component">
               <Image className="news-image" quality={50} priority layout={"fill"}  src={`/newsUpload/${ne.image}`}  alt="news"/>
            </div>
            <div className="property">
              <a style={{textDecoration:"none",color:"black"}} to={"/news/" + ne._id}><p>{ne.title}</p></a>
              <p style={{opacity:"0.8",fontSize:"14px",pointerEvents:"none"}}>{ne.shortnews}</p>
            </div>
        </div>
        })} 
        <div className="page">
            <ReactPaginate       
            previousLabel={"قبلی"} 
            nextLabel={"بعدی"}
            pageCount={pageCount} 
            onPageChange={changePage}
            containerClassName={"pagination-bttn"}
            previousLinkClassName={"previous-bttn"}
            nextLinkClassName={"next-bttn"}
            disabledClassName={"disabled"}
            activeClassName={"active-bttn"}
            />
            </div>
        </div>        
            <div className="news-left">
                <div className="most"><p>پربازدید ترین</p>
                <hr /></div>
                <div className="insta-card"><img src='/images/insta.png' alt="instagram"/></div>
            </div>
            
            </div>
            <Footer />
        </div>
    )
}
}

export default news
