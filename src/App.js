import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { GlobalStyle } from "./GlobalStyles";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import { productData, productDataTwo } from "./components/Products/data";
import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productData}/>
      <Feature />
      <Products heading='Sweet Treats for you' data={productDataTwo}/>
      <Footer />
    </Router> 
  );
}

export default App;
