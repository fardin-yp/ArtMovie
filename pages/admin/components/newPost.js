import axios from 'axios';
import React,{Component} from 'react';


class NewPost extends Component {
    state={
        title:'',
        story:'',
        image:'',
        director:"",
        genres:"",
        jenres:"",
        actores:'',
        link480:"",
        link720:"",
        link1080:"",
        score:0,
        time:"",
        jender:"",
        age:"",
        with:""

    }

    

    uploadImage = (e) => {
        const images = e.target.files[0]
        this.setState({image:images})
    }
    upload480 = (e) => {
        const link = e.target.files[0]
        this.setState({image:link})
    }
    upload720 = (e) => {
        const link = e.target.files[0]
        this.setState({image:link})
    }
    upload1080 = (e) => {
        const link = e.target.files[0]
        this.setState({link1080:link})
    }

    postHandler= (e) =>{
        e.preventDefault()
        
        const formData = new FormData();

        formData.append("title" , this.state.title)
        formData.append("story" , this.state.story)
        formData.append("actores" , this.state.actores)
        formData.append("director" , this.state.director)
        formData.append("genres" , this.state.genres)
        formData.append("jenres" , this.state.jenres)
        formData.append("jender" , this.state.jender)
        formData.append("score" , this.state.score)
        formData.append("time" , this.state.time)
        formData.append("age" , this.state.age)
        formData.append("image" , this.state.image)
        formData.append("with" , this.state.with)

     axios.post('http://localhost:27017/post/', formData).then(res => {
      console.log(res)
    })
}
 
    render(){
        let show = [ 'dontShow']
        if(this.props.show){
            show =['newpost']
        }

  return(
        <div className={show}>
            <form className='new-form' onSubmit={this.postHandler} encType="multipart/form-data">
               <div className="right-con">
               <input type='text' placeholder='نام' onChange={e => this.setState({title:e.target.value})}/>
               <input type='text' placeholder='کارگردان' onChange={e => this.setState({director:e.target.value})}/>
               <input type='text' placeholder='بازیگران' onChange={e => this.setState({actores:e.target.value})}/>
               <input type='text' placeholder='سال تولید' onChange={e => this.setState({age:e.target.value})}/>
               <input type='text' placeholder='ژانر' onChange={e => this.setState({genres:e.target.value})}/>
               <input type='text' placeholder='مدت زمان به دقیقه' onChange={e => this.setState({time:e.target.value})}/>
               <input type="" placeholder="نمره "  onChange={e => this.setState({score:e.target.value})} /> 
                   <select style={{left:"0px" , top:"15px"}}   onChange={e => this.setState({jenres:e.target.value})}>
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
                   <option value="Criminal">جنایی</option>
                   <option value="musical">موزیکال</option>
                   </select>
                   <select style={{left:"90px" , top:"-12px"}}   onChange={e => this.setState({jender:e.target.value})}>
                   <option value="">دسته بندی</option>
                   <option value="khareji">خارجی</option>
                   <option value="irani">ایرانی</option>
                   <option value="animation">انیمیشن</option>
                   </select>
                   <select style={{left:"90px" , top:"1px"}}   onChange={e => this.setState({with:e.target.value})}>
                   <option value="">همراه با</option>
                   <option value="sub">زیرنویس فارسی</option>
                   <option value="duble">دوبله فارسی</option>
                   <option value="IMDB">250 فیلم Imdb</option>
                   </select>
               <textarea type='text' placeholder='داستان فیلم' onChange={e => this.setState({story:e.target.value})}/>
               </div>
               <div className="left-con">
               <div className="image-in"><input type='file' filename="image"  onChange={this.uploadImage}/>{this.state.image && <img style={{height:"100%"}} src="/images/tick.png" alt="" />}<p>ارسال عکس</p></div>
               <div className="botto">
               <div ><input type='file' filename="link480"  onChange={this.uploadImage}/>{this.state.link480 && <img src='/images/tick.png' alt=""/>}<p>ارسال کیفیت 480</p></div>
               <div ><input type='file' filename="link720"  onChange={this.uploadImage}/>{this.state.link720 && <img src='/images/tick.png' alt=""/>}<p>ارسال کیفیت 720</p></div>
               <div ><input type='file' filename="link1080"  onChange={this.uploadImage}/>{this.state.link1080 && <img src='/images/tick.png' alt="" />}<p>ارسال کیفیت 1080</p></div>
               </div>
               </div>
               <button onClick ={this.postHandler} >POST</button>
             </form>
            </div>
        )
}
}

export default NewPost
