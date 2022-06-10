import React, { useEffect } from 'react';
 import img from "../../protfolio-removebg-preview (1).png" 
 import "./AboutMe.css" 
 import Aos from "aos" 
import 'aos/dist/aos.css'
const AboutMe = () => {
    useEffect(()=>{ 
        Aos.init({  duration: 3000});
    },[])
  
    return (
  <div className='container'>
   <div class="card mb-3 about-me_wraper " >
  <div class="row  ">
    <div class="col-lg-4">
      <img src= {img} class="img-fluid rounded-start about_me_img" alt="..."/>
    </div>
    <div class="col-lg-8">
      <div class="card-body" data-aos="flip-left">
        <h5 class="card-title about"> About Me</h5>
        <p class="card-text card-texts">  I Working with clients to develop the overall look and design of a website, Creating tools that enhance the users website experience also Routinely testing websites for ease of use, speed and other quality factors as well as Fixing any website issues or bugs that arise </p> 
         <div className="skills"> 
            <h3>  work with</h3>
         </div>
         <div className="btn_grp"> 
         <button> React js</button> 
         <button> JavaScript </button> 
         <button> Express Js</button> 
         <button> Mongodb  </button> 
         </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default AboutMe;