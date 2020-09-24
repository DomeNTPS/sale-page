import Navbar from '../components/Navbar'
import "../styles/indexStyle.css";
import "../styles/detailStyle.css";
import "../styles/serviceStyle.css";
import "../styles/navStyle.css";
import "react-slideshow-image/dist/styles.css";
import '../styles/globals.css'
import '../styles/buyStyle.css'


function MyApp({ Component, pageProps }) {
  
  return (
    
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
  
}

export default MyApp

