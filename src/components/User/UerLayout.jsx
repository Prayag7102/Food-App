import React from 'react'
import Header from './Header'
import '../../assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../../assets/css/font-face.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './Footer';
import Content from './Content';


function UerLayout() {
  return (
    <div>
        <Header />
        <Content/>
        <Footer/>
    </div>
  )
}

export default UerLayout