import React, { useEffect } from 'react';
import img from  "../../phone-ware-house-app.png"
import img2 from "../../screenshot-final-project-dda07.web.app-2022.06.09-14_36_41.png"  
import { FcApproval } from "react-icons/fc"; 
import Aos from "aos" 
import 'aos/dist/aos.css'
import "./About.css"
const About = () => {
      useEffect(()=>{ 
          Aos.init({  duration: 2000});
      },[])
   
    return ( 
        <div className='container'>
            <h2 className='text-center title'>  My Project</h2>
            <div id='about' className="row project"  data-aos="flip-left">
                 
                 <div className="col-lg-6 d-block d-lg-flex ">
                    <div class="card"  >
                        <img src= {img} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title"> Iphone warehouse app </h5> 
                                <ul className='project_detls'> 
                                <li> <span> <FcApproval/> </span> making the website using react js</li>
                                <li> <span> <FcApproval/> </span> a website using fire base React Route</li>
                                <li> <span> <FcApproval/> </span> Beautiful user experience </li>
                                <li> <span> <FcApproval/> </span> The data are stored in  mongodb </li>
                                <li> <span> <FcApproval/> </span>firebase authentication system is also used</li>


                                </ul>


                                <p class="card-text"></p>
                                <a href="https://iphone-warehouse-auth.web.app/" class="btn btn-primary" target="blank" > Live link</a>
                            </div>
                    </div>

                </div>  
                 
                <div className="col-lg-6 d-block d-lg-flex">
                    <div class="card" >
                        <img src= {img2} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Drill Machine Manufacture</h5> 
                                <ul className='project_detls'> 
                                <li> <span> <FcApproval/> </span> a manufacturing websites of drill machine.</li>
                                <li> <span> <FcApproval/> </span>     a user can buy different drill products</li>
                                <li> <span> <FcApproval/> </span> can operate the website smoothly</li>
                                <li> <span> <FcApproval/> </span>    also find dynamic user email and name</li>
                                <li> <span> <FcApproval/> </span>firebase authentication system is also used</li>


                                </ul>
                                <p class="card-text"></p>
                                <a href="https://final-project-dda07.web.app/"  class="btn btn-primary" target="blank"  > Live link</a>
                            </div>
                    </div>

                </div>
               


            </div>
        </div>
    );
};

export default About;