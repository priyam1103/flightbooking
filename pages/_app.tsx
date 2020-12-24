import React from "react";
import type { AppProps } from "next/app";
import '../styles/globals.css'
import Navbar from "../components/Navbar";
import Backdrop from "../components/Backdrop";
import {GlobalProvider} from "../context/globalState";
import FlightDetails from "../components/FlightDetails";
const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  
  return(
    <>
      <GlobalProvider>
      <Navbar />

      <div className="main-app">
        <Component {...pageProps} />
        </div>
        </GlobalProvider>
    </>)
}

export default MyApp
