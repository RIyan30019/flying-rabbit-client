import React from 'react';
import { Button, Navbar, Nav, Form, FormControl, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    //         <div className='container'>
    //           <Navbar bg="light" expand="lg">
    //   <Navbar.Brand> <Link to="/">Flying Rabit</Link></Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="mr-auto">
    //    <Navbar><Link to="/orders">Orders</Link></Navbar> 
    //       <Navbar><Link to="/admin">Admin</Link></Navbar>

    //     </Nav>
    //     <Form inline>
    //       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    //       <Button variant="outline-info">Search</Button>
    //     </Form>
    //   </Navbar.Collapse>
    // </Navbar>

    //         </div>
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/shop">Flying Rabit</Link> 
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 me-auto">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page"to="/shop">Home</Link> 
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/orders">Orders</Link> 
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/admin">Admin</Link> 
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/login">Login</Link> 
              </li>
              
            
       
      </ul>
             
    </div>
  </div>
</nav>
        </div>

     );
};

export default Header;
