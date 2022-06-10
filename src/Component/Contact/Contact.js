
import React, { useState } from 'react';
import emailjs from "emailjs-com"
import './Contact.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('')


  // toast msg
  const notify = () => {
    if (email === "" && name === "" && message === "") {

      toast("please fill up the input filled");
    }
    else {
      toast("succesfully sent")
    }

  }
  // handle submited form
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f52pjfm', 'template_queobfo', e.target,
      'EybKgG_idWixY_ui_'
    ).then(res => {
      console.log(res);
    }).catch(error => console.log(error))
    setEmail('')
    setName('')
    setMessage('')
  }

  return (

    <div className='container form_wraper'>
      <h2 className='text-center contact'> contact with me</h2>
      <div className="row">
         <div className="col-lg-3"></div>
        <div className="col-lg-7">
          <form className='forms_img' onSubmit={sendEmail}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"> Name</label>
              <input onChange={e => setName(e.target.value)} required placeholder='Enter Your Name' type="name" name='name' class="form-control" value={name} id="exampleInputEmail1 " aria-describedby="emailHelp" />
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input onChange={e => setEmail(e.target.value)} required placeholder='Enter Your Email' type="email" name='email' class="form-control" value={email} id="exampleInputEmail1" aria-describedby="emailHelp" />

              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1"> Write Your message</label>
              <textarea onChange={e => setMessage(e.target.value)} required placeholder='write Your message' name="message" value={message} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <button onClick={notify} type="submit" class="btn btn-primary">Submit</button>
            <ToastContainer />
          </form>


        </div>

      </div>
    </div>
  );
};

export default Contact;