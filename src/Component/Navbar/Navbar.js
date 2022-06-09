import React from 'react';
import { Link } from 'react-router-dom';
import "./Nabvar.css"
const Navbar = () => {
    return (
        <div> 
            <nav className="navbar navbar fixed-top navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Protfolio</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">about</Link>
              </li>
            
           
           
            </ul>
          </div>
        </div>
      </nav>
            
        </div>
    );
};

export default Navbar;