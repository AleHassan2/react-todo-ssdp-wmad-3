import React from 'react'
import { Route, Routes } from "react-router-dom";

import Home from 'pages/Home/Home';
import Contact from 'pages/Contact us/Contact';
import TodoContextProvider from 'contexts/TodoContext';
import Header from 'components/Header';
import Footer from 'components/Footer';


export default function Dashboard() {
  return (
    <>
      
      <TodoContextProvider>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<>404 Page Not Found</>} />
        </Routes>
        <Footer/>
      </TodoContextProvider>

     
    </>
  )
}

