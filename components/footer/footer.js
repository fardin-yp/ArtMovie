import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="right">
                <a style={{textDecoration:"none"}} href="/"><li > صفحه اصلی</li></a>
                <a style={{textDecoration:"none"}} href="/news"><li>اخبار</li></a>
                <a style={{textDecoration:"none"}} href={'/irani-movie'}><li>دانلود فیلم ایرانی</li></a>
                <a style={{textDecoration:"none"}} href='/irani-serial'><li>دانلود سریال ایرانی</li></a>
                <a style={{textDecoration:"none"}} href="/SerialPosts"><li> دانلود سریال</li></a>  
                <a style={{textDecoration:"none"}} href="/serial"><li> ارتباط با ما </li></a>     
            </div>
            <div className="bot"><p>تمامی حقوق وبسایت محفوظ بوده و هرگونه کپی برداری پیگرد قانونی دارد .</p>
            
            <div className="icon">
            <svg height="80" width="80">
                    <circle cx="40" cy="40" r="35" stroke="white" strokeWidth="4" fill="none"></circle>
                </svg>
                <img style={{width:"45px",height:"45px",top:"-67px",left:"18px"}} src='/images/telegram.png' alt="telegram"/>
            </div>
            <div className="icon">
                <svg height="80" width="80">
                    <circle cx="40" cy="40" r="35" stroke="white" strokeWidth="4" fill="none"></circle>
                </svg>
                <img src="/images/insta.png" alt="instagram"/>
            </div>
            
            </div>
      </div>
    )
}

export default Footer
