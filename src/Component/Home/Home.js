import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
               <Header></Header> 
               <About></About>
             <Contact></Contact>
             <Footer></Footer>
        </div>
    );
};

export default Home;