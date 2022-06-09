import React from 'react';
 import './Contact.css'
const Contact = () => {
    return (
        <div className='container'>
            <form>
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