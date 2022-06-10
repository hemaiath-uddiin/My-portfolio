import React from 'react';
import { FaJs, FaReact, FaCss3Alt } from "react-icons/fa"; 
import './Service.css'
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
            des: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, aperiam? Repellat, cum? Unde, architecto? Obcaecati sapiente repudiandae omnis vero expedita!'
        },


    ]

    return (
        <div className='container service_container'>
            <h2 className='text-center mb-5'> What I do</h2>
            <div className="row">
                {
                    data.map((service) => {
                        return (
                            <div className="col-lg-4 d-block d-lg-flex ">
                               
                                    <div class="card service_wraper ">
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