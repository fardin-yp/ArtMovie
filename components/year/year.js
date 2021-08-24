import React, { useState } from 'react'


const Year = () => {
    const [open ,setOpen ] =useState(false)
    const [year , setYear ] = useState('2010')
    const [genres , setGenres ] = useState('null')
    const [jender ,setJender ] =useState('movie')
    const [imdb ,setImdb ] = useState('6')

    let close = ['year']
    if(open){
        close =['open-year','year']
    }

    return (
        <div className={close.join(' ')}>
          <div onClick={() => setOpen(prevState => {
                 return !prevState
          })} className="year-top">
              <img id={open?"open-drp":"drp"} src='/images/flash.png' alt="dropdown" /><p>جستجوی پیشرفته</p>
          </div>
           <div className={open?"place-right":'hide'}>
           <select onChange={e => setJender(e.target.value)}>
                   <option value="">دسته بندی</option>
                   <option value="movie">فیلم</option>
                   <option value="serial">سریال</option>
                   <option value="animation">انیمیشن</option>
                   </select>

                   <select onChange={e => setGenres(e.target.value)}>
                   <option value="">انتخاب ژانر</option>
                   <option value="action">اکشن</option>
                   <option value="comedy">کمدی</option>
                   <option value="horor">ترسناک</option>
                   <option value="fighting">جنگی</option>
                   <option value="imaginary">تخیلی</option>
                   <option value="drama">درام</option>
                   <option value="history">تاریخی</option>
                   <option value="family">خانوادگی</option>
                   <option value="western">وسترن</option>
                   <option value="mystery">معمایی</option>
                </select>
           </div>
           <div className={open?"place-left":'hide'}>
           <select onChange={e => setYear(e.target.value)}>
                   <option value="">سال انتشار</option>
                   <option value="2018">بالاتر از 2018</option>
                   <option value="2012">بالاتر از 2012</option>
                   <option value="2008">بالاتر از 2008</option>
                   <option value="2000">بالاتر از 2000</option>
                   <option value="1990">بالاتر از 1990</option>
                 </select>
                   <select onChange={e => setImdb(e.target.value)}>
                   <option value=""> امتیاز IMDB</option>
                   <option value="9">بیشتر از 9</option>
                   <option value="8">بیشتر از 8</option>
                   <option value="6">بیشتر از 6</option>
                   <option value="4">بیشتر از 4</option>
                   </select>
                   <a href={`/search/${year}/${imdb}/${genres}/${jender}`}><button>جستجو</button></a>
           </div>
           
        </div>
    )
}

export default Year