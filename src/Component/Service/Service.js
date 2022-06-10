import React, { useEffect } from 'react';
import { FaJs, FaReact, FaCss3Alt } from "react-icons/fa"; 
import './Service.css' 
import Aos from "aos" 
import 'aos/dist/aos.css'
const Service = () => {
    const data = [
        {
            id: 1,
            title: "Web Design",
            icon: <FaJs></FaJs>,
            des: ' I am a great responsible for creating the design and layout of a website or web page usign the Modern Technology creating products that are user-friendly, effective and appealing '
        },
        {
            id: 2,
            title: "SPA",
            icon: <FaReact></FaReact>,
            des: 'Design and develop new custom components to meet project requirements also Maintain existing React systems, including fixing bugs and creating a single page application'
        },
        {
            id: 3,
            title: "Responsive Design",
            icon: <FaCss3Alt></FaCss3Alt>,
            des: 'Optimizing your app for small screens improves the experience for your users and delivers positive business results'
        },


    ]
    useEffect(()=>{ 
        Aos.init({  duration: 3000});
    },[])
    return (
        <div className='container service_container'>
            <h2 className='text-center mb-5'> What I do</h2>
            <div className="row">
                {
                    data.map((service) => {
                        return (
                            <div className="col-lg-4 d-block d-lg-flex ">
                               
                                    <div class="card service_wraper " data-aos="flip-left"   >
                                       <div class="card-body ">
                                             <article className='serv_des'> 
                                             <h5 class="card-title titles">{service.icon}</h5>
                                             <h3 class="card-text"> 
                                                {service.title}
                                             </h3> 
                                             <p> {service.des} </p>

                                             </article>
                                               
                                            </div>
                                    </div>
                              



                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Service;