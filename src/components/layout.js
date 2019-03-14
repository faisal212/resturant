import React from "react"
import { createGlobalStyle } from 'styled-components';
import Navbar from './globals/navbar';
import Footer from "./globals/Footer";
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>

  )
}

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  font-family: 'Open Sans', sans-serif;
  color: #262626;
  background: #fff;
}
`

export default Layout;
