import axios from 'axios';
import React,{Component} from 'react';



class NewSerial extends Component {
    state={
        title:'',
        score:'',
        story:'',
        image:'',
        age:'',
        actores:"",
        director:"",
        serial:"true",
        name:'',
        episodes:'',
        quality:"",
        id:"",
        season:"",
        file:"",
        jender:"",
        price:0

    }

    

uploadImage = (e) => {
        const images = e.target.files[0]
        this.setState({image:images})
    }
    
UploadFile = (e) => {
      const files = e.target.files[0]
      this.setState({file:files})
  }

postHandler= (e) =>{
        e.preventDefault()
        
        const formData = new FormData();

        formData.append("title" , this.state.title)
        formData.append("score" , this.state.score)
        formData.append("story" , this.state.story)
        formData.append("image" , this.state.image)
        formData.append("quality" , this.state.quality)
        formData.append('jender', this.state.jender)
        formData.append("actores",this.state.actores)

        axios.post('http://localhost:27017/serial/', formData).then(res => {
          })
        

}

seasonHandler = (e) =>{
    e.preventDefault()
    const formData = new FormData();

formData.append("name" , this.state.name)
   formData.append("score" , this.state.score)
      formData.append("story" , this.state.story)
        formData.append("image" , this.state.image)
         formData.append("age" ,this.state.age)
           formData.append('age' , this.state.age)
             formData.append('season',this.state.season)
               formData.append('quality',this.state.quality)


 axios.post('http://localhost:27017/season', formData).then(res => {
})
}
episodeHandler = (e) =>{
  e.preventDefault()
  const formData = new FormData();

formData.append("name" , this.state.name)
 formData.append("file" , this.state.file)
  formData.append("price",this.state.price)
   formData.append("size",this.state.size)
    formData.append("id",this.state.id)

axios.put('http://localhost:27017/season/episode', formData).then(res => {
   console.log(res.data)
})
}
 
    render(){
        let show = [ 'dontShow']
        if(this.props.show){
            show =['newpost']
        }

  return(
        <div className={show}>
            <select onChange={e => this.setState({serial:e.target.value})}>
            <option value={true} > سریال جدید</option> 
            <option value={false}>اضافه کردن فصل</option>
            <option value={"undefined"}>اضافه کردن قسمت</option>   
            </select>
           {this.state.serial === "true" && <form className='new-form' onSubmit={this.postHandler} encType="multipart/form-data">
                          
             <div className="right-con">          
               <input type='text' placeholder='نام' onChange={e => this.setState({title:e.target.value})}/>
               <input type='text' placeholder='کارگردان' onChange={e => this.setState({director:e.target.value})}/>
               <input type='text' placeholder='بازیگران' onChange={e => this.setState({actores:e.target.value})}/>
               <input type='text' placeholder='سال تولید' onChange={e => this.setState({age:e.target.value})}/>
               <input type='text' placeholder='ژانر' onChange={e => this.setState({genres:e.target.value})}/>
               <input type='text' placeholder='مدت زمان به دقیقه' onChange={e => this.setState({time:e.target.value})}/>
               <input type="" placeholder="نمره "  onChange={e => this.setState({score:e.target.value})} /> 
               <select style={{left:"90px" , top:"-12px"}}   onChange={e => this.setState({jender:e.target.value})}>
               <option value="">دسته بندی</option>
                   <option value="khareji">خارجی</option>
                   <option value="irani">ایرانی</option>
                   <option value="animation">انیمیشن</option>
              </select>    
               <textarea type='text' placeholder='داستان سریال' onChange={e => this.setState({story:e.target.value})}/>
             </div>
               <div className="image-in"><input type='file' filename="image"  onChange={this.uploadImage}/>{this.state.image && <img src='/images/tick.png' alt="" />}<p>ارسال عکس</p></div>
               <button onClick ={this.postHandler} >POST</button>
             </form>}
             {this.state.serial === "false"  && <form className='new-form' onSubmit={this.postHandler} encType="multipart/form-data">
                          
             <div className="right-con">          
               <input type='text' placeholder='نام' onChange={e => this.setState({name:e.target.value})}/>
               <input type='text' placeholder='کیفیت' onChange={e => this.setState({quality:e.target.value})}/>
               <input type='text' placeholder='تعداد قسمت ها' onChange={e => this.setState({episodes:e.target.value})}/>
               <input type='text' placeholder='فصل' onChange={e => this.setState({season:e.target.value})}/>
               <input type='text' placeholder='کارگردان' onChange={e => this.setState({director:e.target.value})}/>
               <input type='text' placeholder='بازیگران' onChange={e => this.setState({actores:e.target.value})}/>
               <input type='text' placeholder='سال تولید' onChange={e => this.setState({age:e.target.value})}/>
               <input type='text' placeholder='ژانر' onChange={e => this.setState({genres:e.target.value})}/>
               <input type="" placeholder="نمره "  onChange={e => this.setState({score:e.target.value})} /> 
               <textarea type='text' placeholder='داستان فصل' onChange={e => this.setState({story:e.target.value})}/>
             </div>
             <div className="image-in"><input type='file' filename="image"  onChange={this.uploadImage}/>{this.state.image && <img src='/images/tick.png' alt="" />}<p>ارسال عکس</p></div>

               <button onClick ={this.seasonHandler} >POST</button>
             </form>}
             {this.state.serial === "undefined"  && <form className='new-form' onSubmit={this.postHandler} encType="multipart/form-data">
                          
             <div className="right-con">          
               <input type='text' placeholder='نام' onChange={e => this.setState({name:e.target.value})}/>
               <input type='text' placeholder='ID' onChange={e => this.setState({id:e.target.value})}/>
             </div>
               <div className="image-in"><input type='file' filename="file"  onChange={this.UploadFile}/>{this.state.file && <img src='/images/tick.png' alt="" />}<p>ارسال قسمت</p></div>
               <button onClick ={this.episodeHandler} >POST</button>
             </form>}

            </div>
        )
}
}

export default NewSerial