import React from 'react';
const Footer = () => {
  return (
    <div>
       {/* <!-- Footer Start --> */}
    <div className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Address</h4>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Bharti Softtech Office No 4010, 4th Floor, Marvel Fuego, Near Amanora Mall, opp WeWork/Seasons Mall, 28, Magarpatta, Pune, Maharashtra 411028</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+919368303030</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@bhartisofttech.com</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Services</h4>
                    <a className="btn btn-link" href="">Fast & Economical</a>
                    <a className="btn btn-link" href="">Robust & Accurate</a>
                    <a className="btn btn-link" href="">Market Intelligence</a>
                    <a className="btn btn-link" href="">Transparent</a>
                    <a className="btn btn-link" href="">Scalable</a>
                    <a className="btn btn-link" href="">Profitability</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Quick Links</h4>
                    <a className="btn btn-link" href="about">About Us</a>
                    <a className="btn btn-link" href="products">Our Products</a>
                    <a className="btn btn-link" href="contact">Contact Us</a>
                    <a className="btn btn-link" href="services">Our Services</a>
                    <a className="btn btn-link" href="blog">Blog</a>
                    <a className="btn btn-link" href="faq">FAQ</a>
                </div>
                <div className="col-lg-3 col-md-6">
                <div class="position-relative h-100">
                        <iframe class="position-absolute w-100 h-100" 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.
                        72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!
                        2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                        frameborder="0" allowfullscreen="" aria-hidden="false"
                        tabindex="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="copyright">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a className="border-bottom" href="#">Bharti Softtech</a>, All Right Reserved.
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Footer End --> */}


    {/* <!-- Back to Top --> */}
    <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top">
        <i className="bi bi-arrow-up"></i>
    </a>

    </div>
  )
}

export default Footer;