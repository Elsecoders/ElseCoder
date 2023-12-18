
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from './Pages/AboutUs/Aboutus';
import MainBody from '../Components/MainBody/MainBody';
import Services from './Pages/ServicesE/Services';
import Contactus from './Pages/ContactUs/Contactus';

  const App = () => {
    return (
      
      <>
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<MainBody/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
      </Routes>
      </BrowserRouter>

      
      </>
    );
  }
  
  export default App;
  





