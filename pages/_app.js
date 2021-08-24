import '../styles/home.css'
import '../styles/slider.css'
import '../styles/navbar.css'
import '../styles/footer.css'
import '../styles/all.css'
import '../styles/news.css'
import '../styles/fullpost.css'
import '../styles/Ads.css'
import '../styles/Auth.css'
import '../styles/admin.css'
import { AuthContextProvider } from '../components/context/authContext'



function MyApp({ Component, pageProps }) {


  return ( 
   <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
    ) 
}

export default MyApp
