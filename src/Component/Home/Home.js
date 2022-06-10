import React from 'react';
import About from '../About/About';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
               <Header></Header> 
               <About></About>  
               <AboutMe> </AboutMe>
               <Service></Service>
             <Contact></Contact>
             <Footer></Footer>
        </div>
    );
};

export default Home;