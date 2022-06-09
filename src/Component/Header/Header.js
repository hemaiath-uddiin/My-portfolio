import React from 'react';
import "./Header.css" 
import img from "../../protfolio-removebg-preview (1).png"
import { FaFacebookSquare,FaLinkedin,FaGithubSquare } from "react-icons/fa";
const Header = () => {
    return (
        <div className='container'>
            <header className='header'> 
               <div className="row"> 
                 <div className="col-lg-6"> 
                    <img className='img-fluid' src={img} alt="" />
                 
                 </div> 
                 <div className="col-lg-6"> 
                   
                  <article className='about_me'>  
                  <button> Hello</button> 
                  <h1> I am Hemaiath Uddin   </h1> 
                   <h5>Front End Web Developer</h5> 
                   <p> hemaithsifat@gmail.com</p> 
                    <a href="http:/"> <FaFacebookSquare />   </a>
                    <a href="http:/"> <FaLinkedin />   </a>
                    <a href="http:/"> <FaGithubSquare />   </a>
                  </article>
                 </div>
               
               </div>

            </header>
        </div>
    );
};

export default Header;