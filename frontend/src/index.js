import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Signup';
import Login from './landing_page/login/Login';
import AboutPage from './landing_page/About/AboutPage';
import ProductPage from './landing_page/products/productPage'; 
import PrincingPage from './landing_page/pricing/PrincingPage';
import SupportPage from './landing_page/support/SupportPage';
import NotFound from './landing_page/NotFound';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer'; 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
   <Navbar />
  <Routes>
    <Route path='/' element={<HomePage/>}/>
     <Route path='/Signup' element={<Signup/>}/>
     <Route path='/login' element={<Login/>}/>
      <Route path='/About' element={<AboutPage/>}/>
       <Route path='/products' element={<ProductPage/>}/>
       <Route path='/pricing' element={<PrincingPage/>}/>
       <Route path='/support' element={<SupportPage/>}/>
       <Route path='*' element={<NotFound/>}/>

  </Routes>
  <Footer /> 
  </BrowserRouter>
);


  
