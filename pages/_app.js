import Navbar from '../components/Navbar'
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../components/theme";
import "../styles/indexStyle.css";
import "../styles/detailStyle.css";
import "../styles/serviceStyle.css";
import "../styles/navStyle.css";
import "react-slideshow-image/dist/styles.css";
import '../styles/globals.css'
import '../styles/buyStyle.css'


function MyApp({ Component, pageProps }) {

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <Navbar /> */}
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
  
}

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};