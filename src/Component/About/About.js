import React from 'react';
import img from "../../final-projects.png"
import img2 from "../../screenshot-final-project-dda07.web.app-2022.06.09-14_36_41.png" 
import "./About.css"
const About = () => {
    return ( 
        <div className='container'>
            <h2 className='text-center title'>  My Project</h2>
            <div className="row  project">
                 
                 <div className="col-lg-6 d-block d-lg-flex">
                    <div class="card" >
                        <img src= {img} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title"> Iphone warehouse app </h5>
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