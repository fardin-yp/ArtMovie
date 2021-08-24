import axios from 'axios';
import React,{Component} from 'react';


class NewPost extends Component {
    state={
        title:'',
        des:'',
        short:'',
        image:'',
    }

    

    uploadImage = (e) => {
        const images = e.target.files[0]
        this.setState({image:images})
    }

    postHandler= (e) =>{
        e.preventDefault()
        
        const formData = new FormData();

        formData.append("title" , this.state.title)
        formData.append("des" , this.state.des)
        formData.append("shortnews" , this.state.short)
        formData.append("image" , this.state.image)

     axios.post('http://localhost:27017/news/', formData).then(res => {
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
               <input type='text' placeholder='عنوان' onChange={e => this.setState({title:e.target.value})}/>
               <input type='text' placeholder='خبر کوتاه' onChange={e => this.setState({short:e.target.value})}/>
               <textarea type='text' placeholder='مطلب' onChange={e => this.setState({des:e.target.value})}/>
               </div>
               <div className="left-con">
               <div className="image-in"><input type='file' filename="image"  onChange={this.uploadImage}/>{this.state.image && <img src='/images/tick.png' alt="" />}<p>ارسال عکس</p></div>
               </div>
               <button onClick ={this.postHandler} >POST</button>
             </form>
            </div>
        )
}
}

export default NewPost