import React from 'react'


const FullRight = () => {
    return (
        <div className="full-right">
            <div className="instagram">
                <p> اینستاگرام ما</p>
                <img src='/images/insta.png' alt="instagram"/>
            </div>
            <div className="telegram">
                <p>کانال تلگرام ما</p>
                <img src='/images/telegram.png' alt="telegram"/>
            </div>
            <div className="subjects">
               <p >  موضوعات سایت</p><div className="sub-c">
                   <div className="hum"></div>
                   <div className="hum"></div>
                   <div className="hum"></div>
               </div>
               <div className="sub-sub">
                   <li>فیلم</li>
                   <li>سریال</li>
                   <li>انیمیشن</li>
                   <li>مستند</li>
                   <li>برترین ها</li>
               </div>
            </div>
            
            <div className="ad-right">
                <p> تبلیغات شما</p>
                <hr />
            </div>
        </div>
    )
}

export default FullRight
