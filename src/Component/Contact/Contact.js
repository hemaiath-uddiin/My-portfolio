
import React from 'react'; 
import emailjs from "emailjs-com"
 import './Contact.css'
const Contact = () => {
   
     const sendEmail =(e)=>{ 
        e.preventDefault()  ;
        emailjs.sendForm('service_f52pjfm','template_queobfo',e.target, 
        'EybKgG_idWixY_ui_'
        ).then(res=>{ 
            console.log(res);
        }).catch(error=>console.log(error))
    
     }
   
    return (
        <div className='container'> 
        <h2 className='text-center'> contact with me</h2>
            <form onSubmit={sendEmail}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"> Name</label>
    <input type="name" name='name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/> 
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
 

<textarea id="w3review" name="message" rows="4" cols="50">
 
</textarea>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
    );
};

export default Contact;