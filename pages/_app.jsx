import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Component {...pageProps} />
  </React.Fragment>
  )
}

export default MyApp
