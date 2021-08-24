import axios from 'axios';
import React,{Component} from 'react';


class NewPost extends Component {
    state={
        title:'',
        pos:'',
        link:'',
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
        formData.append("link" , this.state.link)
        formData.append("pos" , this.state.pos)
        formData.append("image" , this.state.image)

     axios.post('http://localhost:27017/ad/', formData).then(res => {
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
               <input type='text' placeholder=' لینک' onChange={e => this.setState({link:e.target.value})}/>
               <select style={{left:"90px" , top:"1px"}} onChange={e => this.setState({pos:e.target.value})}>
                   <option value=""> مکان</option>
                   <option value="large"> بزرگ</option>
                   <option value="fullBot">پایین پست </option>
                   </select>
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