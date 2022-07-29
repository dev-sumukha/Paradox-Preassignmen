import React from 'react';
import './App.css';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import TopNavbar from './components/TopNavbar';
import About from './components/About';
import Choose from './components/Choose';
import Apprehend from './components/Apprehend';
import Specalization from './components/Specalization';
import Staistics from './Staistics';
import Footer from './components/Footer';
import Subscribe from './components/Subscribe';

function App() {
  return (
    <>
      <TopNavbar/>
      <Navbar/>
      <Carousel/>
      <About/>
      <Choose/>
      <Apprehend/>
      <Specalization/>
      <Staistics/>
      <div className='container'>
        <Subscribe/>

      </div>
      <Footer/>
    </>
  );
}

export default App;
