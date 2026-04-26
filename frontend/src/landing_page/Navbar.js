import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return ( 
        <div className='container-fluid'>
            <nav class="navbar navbar-expand-lg border-bottom">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">
        <img src='https://zerodha.com/static/images/logo.svg' style={{width:"30%"}} alt='Logo'></img>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
      <form class="d-flex" role="search">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Signup">
            Signup
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/login">
            Login
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/About">
            About
          </Link>
        </li>
        
        <li class="nav-item">
          <Link class="nav-link active" aria-disabled="true" to="/products">
            Products
          </Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link active" aria-disabled="true" to="/pricing">
            Pricing
          </Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link active" aria-disabled="true" to="/support">
            Support
          </Link>
        </li>
      </ul>

      </form>
    </div>
  </div>
</nav>
        </div>
     );
}

export default Navbar;