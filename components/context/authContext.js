import axios from 'axios';
import { createContext , useState , useEffect } from 'react'

const AuthContext = createContext();


  function AuthContextProvider(props) {

const [userLoggedIn ,setUserLoggedIn] = useState(null)
const [find , setFind ] = useState(null)
const [loggedIn ,setLoggedIn] = useState(null)

async function getUserLoggedIn() {
  const usersloggedIn = await axios.get("http://localhost:27017/authentication/loggedIn",{withCredentials:true});
  await setUserLoggedIn(usersloggedIn.data);
  
}
async function getLoggedIn() {

  const loggedIn = await axios.get("http://localhost:27017/auth/loggedIn",{withCredentials:true});
  await setLoggedIn(loggedIn.data);

  
}

// async function getData() {
//   const find = await axios.get("http://localhost:27017/authentication/find",{withCredentials:true});
//   await setFind(find.data);
        
// }



useEffect(() => {
  getUserLoggedIn()
},[])

// useEffect(() => {
//     getData();
// },[])


useEffect(()=> {
    getLoggedIn();
},[])

    
    return(
    <AuthContext.Provider value={{loggedIn ,userLoggedIn ,find ,getUserLoggedIn , getLoggedIn }}  >
       {props.children}
    </AuthContext.Provider>
    ) 

}

export default AuthContext;
export { AuthContextProvider };
