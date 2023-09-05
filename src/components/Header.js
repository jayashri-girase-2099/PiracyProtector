import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
  <>
     {/* <!-- Topbar Start --> */}
     <div className="container-fluid bg-light p-0">
     <div className="row gx-0 d-none d-lg-flex">
         <div className="col-lg-7 px-5 text-start">
             <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                 <small className="fa fa-envelope me-3 text-primary me-2"></small>
                 <small>info@bhartisofttech.com</small>
             </div>
             <div className="h-100 d-inline-flex align-items-center py-3">
             <small className="fa fa-phone-alt text-primary me-2"></small>
                 <small>+919368303030</small>
             </div>
         </div>
         <div className="col-lg-5 px-5 text-end">
            
         <div className="h-100 d-inline-flex align-items-center">
                 <a className="btn btn-sm-square bg-white text-primary me-1" href=""><i className="fab fa-facebook-f"></i></a>
                 <a className="btn btn-sm-square bg-white text-primary me-1" href=""><i className="fab fa-twitter"></i></a>
                 <a className="btn btn-sm-square bg-white text-primary me-1" href=""><i className="fab fa-linkedin-in"></i></a>
                 <a className="btn btn-sm-square bg-white text-primary me-0" href=""><i className="fab fa-instagram"></i></a>
             </div>
         </div>
     </div>
 </div>
 {/* /* <!-- Topbar End --> */ }


 {/* /* <!-- Navbar Start -->*/ }
 <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
     <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
         <img src='assests/images/navbarlogo.png'/>
     </a>
     <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
         <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarCollapse">
         <div className="navbar-nav ms-auto p-4 p-lg-0">
             <Link to="/" className="nav-item nav-link active">Home</Link>
             <Link to="about" className="nav-item nav-link">About</Link>
             <Link to="services" className="nav-item nav-link">Service</Link>
             <Link to="products" className="nav-item nav-link">Products</Link>
             <Link to="faq" className="nav-item nav-link">FAQ</Link>
             <Link to="blog" className="nav-item nav-link">Blog</Link>
             <Link to="contact" className="nav-item nav-link">Contact</Link>
             {/* <div className="nav-item dropdown">
                 <Link to="allpages" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">AllPages</Link>
            <div className="dropdown-menu fade-up m-0">
                     <Link to="allpages/feature" className="dropdown-item">Feature</Link>
                     <Link to="allpages/quote" className="dropdown-item">Free Quote</Link>
                     <Link to="allpages/team" className="dropdown-item">Our Team</Link>
                     <Link to="allpages/testimonial" className="dropdown-item">Testimonial</Link>
                     <Link to="allpages/404" className="dropdown-item">404 Page</Link>
                 </div>     
             </div> */}
            </div>
         <a href="" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Get A Quote<i className="fa fa-arrow-right fa ms-3"></i></a>
     </div>
 </nav>
 { /* <!-- Navbar End --> */ }
 </>
  )
}

export default Header;