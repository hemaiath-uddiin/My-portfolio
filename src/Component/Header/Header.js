import React from 'react';
import "./Header.css" 
import img from "../../protfolio-removebg-preview (1).png"
import { FaFacebookSquare,FaLinkedin,FaGithubSquare } from "react-icons/fa";
const Header = () => {
    return (
        <div className='container'>
            <header className='header'> 
               <div className="row"> 
                 <div className="col-lg-6 abou_img"> 
                    <img className='img-fluid abou_img' src={img} alt="" />
                 
                 </div> 
                 <div className="col-lg-6"> 
                   
                  <article className='about_me'>  
                  <button className='title_btn'> Hello</button> 
                  <h1> I am Hemaiath Uddin   </h1> 
                   <h5>Front End Web Developer</h5> 
                   <p> hemaithsifat@gmail.com</p> 
                    <a href="http:/"> <FaFacebookSquare />   </a>
                    <a href="https://www.linkedin.com/in/hemaith-uddin-684528208/" target={'blank'}> <FaLinkedin />   </a>
                    <a href="https://github.com/hemaiath-uddiin" target={'blank'}> <FaGithubSquare />   </a>  <br />
                    <button className='cv_btn'> <a href="https://drive.google.com/file/d/12NDTrjVjpBZoAzw6RjU29tA1nXntZsVG/view?usp=sharing">  Download Cv </a> </button>
                  </article>
                 </div>
               
               </div>

            </header>
        </div>
    );
};

export default Header;