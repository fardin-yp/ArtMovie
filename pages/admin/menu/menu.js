import React from 'react'
import axios from 'axios'


const Menu = (props) => {

   async function logouthandler() {
      await axios.get('http://localhost:27017/auth/logout').then()

   }
    return (
        <div className='admin-menu'>
            <h4 style={{cursor:'pointer'}} onClick={props.remove}>AdminPanel</h4>
            <ul className='admin-menu-li'>
                <li className={props.Nshow ? 'active' :'admin-menu-li'}  onClick={props.Nclicked}>NewPost</li>
                <li className={props.Sshow ? 'active' :'admin-menu-li'}  onClick={props.Sclicked}>SerialPost</li>
                <li className={props.Neshow ? 'active' :'admin-menu-li'}  onClick={props.Neclicked}>News</li>
                <li className={props.adshow ? 'active' :'admin-menu-li'}  onClick={props.adclicked}>ads</li>
            </ul>
            <button onClick={logouthandler}>Logout</button>
        </div>
    )
}

export default Menu
