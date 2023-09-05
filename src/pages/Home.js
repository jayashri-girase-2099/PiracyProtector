import React from 'react';
import { Carousel } from 'react-bootstrap';


const Home = () =>{
    return(
<div>
    {/* <!-- Spinner Start --> */}
    {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-grow text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div> */}
    {/* <!-- Spinner End --> */}


    {/* <!-- Topbar Start --> */}
    {/* <div className="container-fluid bg-light p-0">
        <div className="row gx-0 d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
                <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                    <small className="fa fa-map-marker-alt text-primary me-2"></small>
                    <small>Bharti Softtech,Pune, Maharashtra 411028</small>
                </div>
                <div className="h-100 d-inline-flex align-items-center py-3">
                    <small className="far fa-clock text-primary me-2"></small>
                    <small>Mon - Fri : 10.00 AM - 06.00 PM</small>
                </div>
            </div>
            <div className="col-lg-5 px-5 text-end">
                <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                    <small className="fa fa-phone-alt text-primary me-2"></small>
                    <small>+919368303030</small>
                </div>
                <div className="h-100 d-inline-flex align-items-center">
                    <a className="btn btn-sm-square bg-white text-primary me-1" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-sm-square bg-white text-primary me-1" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-sm-square bg-white text-primary me-1" href=""><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-sm-square bg-white text-primary me-0" href=""><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div> */}
    {/* <!-- Topbar End --> */}


    {/* <!-- Navbar Start --> */}
    {/* <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">

            <img src='http://meradaftar.com/social_demo/assets/img/logo.png'/>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <Link to="/" className="nav-item nav-link active">Home</Link>
                <Link to="about" className="nav-item nav-link">About</Link>
                <Link to="services" className="nav-item nav-link">Service</Link>
                <Link to="projects" className="nav-item nav-link">Project</Link>
                <div className="nav-item dropdown">
                    <Link to="allpages" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">AllPages</Link>
               <div className="dropdown-menu fade-up m-0">
                        <Link to="allpages/feature" className="dropdown-item">Feature</Link>
                        <Link to="allpages/quote" className="dropdown-item">Free Quote</Link>
                        <Link to="allpages/team" className="dropdown-item">Our Team</Link>
                        <Link to="allpages/testimonial" className="dropdown-item">Testimonial</Link>
                        <Link to="allpages/404" className="dropdown-item">404 Page</Link>
                    </div>     
                </div>
                <Link to="contact" className="nav-item nav-link">Contact</Link>
            </div>
            <a href="" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Get A Quote<i className="fa fa-arrow-right ms-3"></i></a>
        </div>
    </nav> */}
    {/* <!-- Navbar End --> */}
   

    {/* <!-- Carousel Start --> */}
     <div className="container-fluid p-0 pb-5">
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
             <div class="carousel-inner">
     {/* <div className="owl-carousel header-carousel position-relative"> */}
            {/* <div className="owl-carousel-item position-relative"> */}
                <img className="img-fluid" src="assests/images/header.jpg" alt=""/>
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-8 text-center">
                                <h5 className="text-white text-uppercase mb-3 animated slideInDown">Welcome To PIRACY PROTECTOR</h5>
                                <h1 className="display-3 text-white animated slideInDown mb-4">LET'S FIGHT PIRACY TOGETHER WITH OUR ANTI PIRACY PROTECTION SERVICES</h1>
                                <p className="fs-5 fw-medium text-white mb-4 pb-2">An enterprise-grade on-premise platform with customization options, private data storage, 
                                and our widest range of search methods</p>
                                <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                            </div>
                        </div>
                    </div>
                    
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                         <span class="visually-hidden">Previous</span>
                    </button>
                   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                    </button>
                 </div>
                </div>
            </div>
            </div>
            {/* <div className="owl-carousel-item position-relative">
                <img className="img-fluid" src="assests/img/carousel-2.jpg" alt=""/>
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-8 text-center">
                                <h5 className="text-white text-uppercase mb-3 animated slideInDown">Welcome To WooDY</h5>
                                <h1 className="display-3 text-white animated slideInDown mb-4">Best Carpenter & Craftsman Services</h1>
                                <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit 
                                diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="owl-carousel-item position-relative">
                <img className="img-fluid" src="assests/img/carousel-3.jpg" alt=""/>
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-8 text-center">
                                <h5 className="text-white text-uppercase mb-3 animated slideInDown">Welcome To WooDY</h5>
                                <h1 className="display-3 text-white animated slideInDown mb-4">Best Carpenter & Craftsman Services</h1>
                                <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
                                 Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                <a href=""className ="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
     </div> */}
    {/* <!-- Carousel End --> */}

 
    {/* <!-- Feature Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <div className="feature_style d-flex align-items-center justify-content-center bg-light" >
                            <i className="fa fa-user-check fa-2x text-primary"></i>
                        </div>
                        <h1 className=" featureNo display-1 text-light mb-0" data-toggle="counter-up"  >15</h1>
                    </div>
                    <h5>Hard Workers</h5>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <div className="feature_style d-flex align-items-center justify-content-center bg-light">
                            <i className="fa fa-file-powerpoint fa-2x text-primary"></i>
                        </div>
                        <h1 className="featureNo display-1 text-light mb-0">521</h1>
                    </div>
                    <h5>Our Projects</h5>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <div className="feature_style d-flex align-items-center justify-content-center bg-light" >
                            <i className="bi bi-emoji-smile-fill fa-2x text-primary"></i>
                        </div>
                        <h1 className="featureNo display-1 text-light mb-0">231</h1>
                    </div>
                    <h5>Happy Clients</h5>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <div className="feature_style d-flex align-items-center justify-content-center bg-light" >
                            <i className="fa fa-headphones fa-2x text-primary"></i>
                        </div>
                        <h1 className="featureNo display-1 text-light mb-0">1463</h1>
                    </div>
                    <h5>Hours Of Support</h5>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Feature Start --> */}



    {/* <!-- About Start --> */}
    <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div className="container about px-lg-0">
            <div className="row g-0 mx-lg-0">
                <div className="about_style col-lg-6 ps-lg-0" >
                    <div className="position-relative h-100">
                        <img className="about_img_style position-absolute img-fluid w-100 h-100" src="assests/images/about.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
                    <div className="p-lg-5 pe-lg-0">
                        <div className="section-title text-start">
                            <h1 className="display-5 mb-4">About Us</h1>
                            <h1 className="display-7 mb-4">Who we are</h1>
                        </div>
                        <p className="mb-4 pb-2 ">Social Links is a Global OSINT (Open source intelligence) vendor with HQ in the US that empowers investigators and security professionals
                         with ground-breaking AI-powered products..</p>
                         <p>We assemble massive volumes of data from open sources including social media, messengers, blockchains, and the Dark Web to analyze and visualize a holistic 
                            picture for streamlining data-driven investigations.
                        </p>
                        <div className="row g-4 mb-4 pb-2">
                            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                                <div className="d-flex align-items-center">
                                    <div className="NoBox d-flex flex-shrink-0 align-items-center justify-content-center bg-white">
                                        <i className="fa fa-users fa-2x text-primary"></i>
                                    </div>
                                    <div className="ms-3">
                                        {/* <h2 className="text-primary mb-1" data-toggle="counter-up">232</h2> */}
                                      <h1><span class="counter mb-1">232</span></h1>
                                        <p className="fw-medium mb-0">Happy Clients</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                                <div className="d-flex align-items-center">
                                    <div className="NoBox d-flex flex-shrink-0 align-items-center justify-content-center bg-white">
                                        <i className="fa fa-check fa-2x text-primary"></i>
                                    </div>
                                    <div className="ms-3">
                                    <h1><span class="counter mb-1">521</span></h1>
                                        <p className="fw-medium mb-0">Projects Done</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="" className="btn btn-primary py-3 px-5">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About End --> */}


    {/* <!-- Products Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="section-title text-center">
                <h1 className="display-5 mb-5">Our Products</h1>
            </div>
            <div className="row g-4">
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="../assests/images/values-1.png" alt=""/>
                        </div>
                        <div className="p-4 text-center border border-5 border-light border-top-0">
                            <h4 className="mb-3">Educators</h4>
                            <p>Bytescare is here to protect your content from infringement. Our tools and technologies prevent pirates
                                 from illegally downloading and publishing your content.</p>
                            <a className="fw-medium" href="">Read More<i className="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="../assests/images/values-2.png" alt=""/>
                        </div>
                        <div className="p-4 text-center border border-5 border-light border-top-0">
                            <h4 className="mb-3">Publishers</h4>
                            <p>Bytescare's innovative algorithms provide effective protection against copyright infringement, 
                                ensuring that your content remains safe and secure.</p>
                            <a className="fw-medium" href="">Read More<i className="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="../assests/images/values-3.png" alt=""/>
                        </div>
                        <div className="p-4 text-center border border-5 border-light border-top-0">
                            <h4 className="mb-3">Creators</h4>
                            <p>Consider investing in Bytescare's content & brand protection services that will help you keep your work safe so 
                                you can continue doing what you love without worry.</p>
                            <a className="fw-medium" href="">Read More<i className="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                {/* <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="http://clipart-library.com/image_gallery2/Online-Banking-PNG-HD.png" alt=""/>
                        </div>
                        <div className="p-4 text-center border border-5 border-light border-top-0">
                            <h4 className="mb-3">Transparent</h4>
                            <p>Our automated crawlers and deep learning solutions are quicker and cheaper..</p>
                            <a className="fw-medium" href="">Read More<i className="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="https://profitline.com.co/wp-content/uploads/2019/10/BUSINESS-INTELLIGENCE-PROFITLINE-3.png" alt=""/>
                        </div>
                        <div className="p-4 text-center border border-5 border-light border-top-0">
                            <h4 className="mb-3">Market Intelligence</h4>
                            <p>It helps clients Gain valuable insights into the potential market by 
                                removing copies and links to your original content.</p>
                            <a className="fw-medium" href="">Read More<i className="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="https://cdni.iconscout.com/illustration/premium/thumb/profit-saving-2952455-2462946.png" alt=""/>
                        </div>
                        <div className="p-4 text-center border border-5 border-light border-top-0">
                            <h4 className="mb-3">Profitability </h4>
                            <p>Our efficient & cost-effective services reduce the cost associated with
                                 technical & legal operations enhancing their sales & scaling customer engagement.</p>
                            <a className="fw-medium" href="">Read More<i className="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
    {/* <!--Products End --> */}


    {/* <!-- insustries Start --> */}
    <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div className="container feature px-lg-0">
            <div className="row g-0 mx-lg-0">
                <div className="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.5s">
                    <div className="p-lg-5 ps-lg-0">
                        <div className="section-title text-start">
                            <h1 className="display-5 mb-4">Industries</h1>
                        </div>
                        {/* <p className="mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                         Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita 
                         duo justo erat amet</p> */}
                        <div className="row g-4">
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <div className="indufeature_box d-flex flex-shrink-0 align-items-center justify-content-center bg-white" >
                                        <i className="fa fa-check fa-2x text-primary"></i>
                                    </div>
                                    <div className="ms-4">
                                        <h5 className="mb-0">CYBERSECURITY</h5>
                                        <p className="mb-2">Consequuntur sunt aut quasi enim aliquam quae harum 
                                        pariatur laboris nisi ut aliquip</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <div className="indufeature_box d-flex flex-shrink-0 align-items-center justify-content-center bg-white" >
                                        <i className="fa fa-user-check fa-2x text-primary"></i>
                                    </div>
                                    <div className="ms-4">
                                    <h5 className="mb-0">GOVERNMENT AND LEAS</h5>
                                        <p className="mb-2">Excepteur sint occaecat cupidatat non proident, 
                                        sunt in culpa qui officia deserunt</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <div className=" indufeature_box d-flex flex-shrink-0 align-items-center justify-content-center bg-white" >
                                        <i className="fa fa-drafting-compass fa-2x text-primary"></i>
                                    </div>
                                    <div className="ms-4">
                                    <h5 className="mb-0">CORPORATE SECURITY</h5>
                                        <p className="mb-2">Aut suscipit aut cum nemo deleniti aut omnis.
                                         Doloribus ut maiores omnis facere</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <div className="indufeature_box d-flex flex-shrink-0 align-items-center justify-content-center bg-white" >
                                        <i className="fa fa-headphones fa-2x text-primary"></i>
                                    </div>
                                    <div className="ms-4">
                                    <h5 className="mb-0">PRIVATE INVESTIGATION</h5>
                                        <p className="mb-2">Expedita veritatis consequuntur nihil tempore laudantium vitae 
                                        denat pacta</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feature_img_div col-lg-6 pe-lg-0" >
                    <div className="position-relative h-100">
                        <img className="feature_img position-absolute img-fluid w-100 h-100" src="assests/images/industries.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- insustries End --> */}


    {/* <!-- Services Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="section-title text-center">
                <h1 className="display-5 mb-5">Our Services</h1>
            </div>
            <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
                <div className="col-12 text-center">
                    <ul className="list-inline mb-5" id="portfolio-flters">
                        <li className="mx-2 active" data-filter="*">All</li>
                        <li className="mx-2" data-filter=".first">General Carpentry</li>
                        <li className="mx-2" data-filter=".second">Custom Carpentry</li>
                    </ul>
                  <h3><marquee>The right choice to increase your content's security</marquee></h3>
                </div>
            </div>
            <div className="row g-4 portfolio-container">
                <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.1s">
                    <div className="rounded overflow-hidden">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="./assests/images/service_1.jpg" alt=""/>
                            <div className="portfolio-overlay">
                                <a className="btn btn-square btn-outline-light mx-1" href="assests/img/portfolio-1.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                {/*<a className="btn btn-square btn-outline-light mx-1" href=""><i className="fa fa-link"></i></a> */}
                            </div>
                        </div>
                        <div className="border border-5 border-light border-top-0 p-4">
                             <h5 className="lh-base mb-0">Fast & Economical</h5>
                             <p className="text-primary fw-medium mb-2">Our automated crawlers and deep learning solutions are quicker and cheaper,our technology is designed to handle it.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.3s">
                    <div className="rounded overflow-hidden">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="./assests/images/service_2.jpg" alt=""/>
                            <div className="portfolio-overlay">
                                <a className="btn btn-square btn-outline-light mx-1" href="assests/img/portfolio-2.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                {/* <a className="btn btn-square btn-outline-light mx-1" href=""><i className="fa fa-link"></i></a> */}
                            </div>
                        </div>
                        <div className="border border-5 border-light border-top-0 p-4">
                             <h5 className="lh-base mb-0">Robust & Accurate</h5>
                             <p className="text-primary fw-medium mb-2">Verify infringements to ensure they are not from your official channel partners,our technology is designed to handle it.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.5s">
                    <div className="rounded overflow-hidden">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="./assests/images/service_3.jpg" height={300} alt=""/>
                            <div className="portfolio-overlay">
                                <a className="btn btn-square btn-outline-light mx-1" href="assests/img/portfolio-3.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                {/* <a className="btn btn-square btn-outline-light mx-1" href=""><i className="fa fa-link"></i></a> */}
                            </div>
                        </div>
                        <div className="border border-5 border-light border-top-0 p-4">
                              <h5 className="lh-base mb-0">Scalable</h5>
                             <p className="text-primary fw-medium mb-2">Regardless of the type, length or number of your content, our technology is designed to handle it.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.1s">
                    <div className="rounded overflow-hidden">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="./assests/images/service_4.jpg" alt=""/>
                            <div className="portfolio-overlay">
                                <a className="btn btn-square btn-outline-light mx-1" href="assests/img/portfolio-4.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                {/* <a className="btn btn-square btn-outline-light mx-1" href=""><i className="fa fa-link"></i></a> */}
                            </div>
                        </div>
                        <div className="border border-5 border-light border-top-0 p-4"> 
                             <h5 className="lh-base mb-0">Transparent</h5>
                             <p className="text-primary fw-medium mb-2">Our automated crawlers and deep learning solutions are quicker and cheaper.& legal operations enhancing their sales & scaling customer engagement.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.3s">
                    <div className="rounded overflow-hidden">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="./assests/images/service_5.webp" alt=""/>
                            <div className="portfolio-overlay">
                                <a className="btn btn-square btn-outline-light mx-1" href="assests/img/portfolio-5.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                {/* <a className="btn btn-square btn-outline-light mx-1" href=""><i className="fa fa-link"></i></a> */}
                            </div>
                        </div>
                        <div className="border border-5 border-light border-top-0 p-4">
                             <h5 className="lh-base mb-0">Market Intelligence</h5>
                             <p className="text-primary fw-medium mb-2">It helps clients Gain valuable insights into the potential market 
                             by removing copies and links to your original content.& scaling customer engagement.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.5s">
                    <div className="rounded overflow-hidden">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="./assests/images/service_6.jpg" alt=""/>
                            <div className="portfolio-overlay">
                                <a className="btn btn-square btn-outline-light mx-1" href="assests/img/portfolio-6.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                {/* <a className="btn btn-square btn-outline-light mx-1" href=""><i className="fa fa-link"></i></a> */}
                            </div>
                        </div>
                        <div className="border border-5 border-light border-top-0 p-4">
                             <h5 className="lh-base mb-0">Profitability</h5>
                             <p className="text-primary fw-medium mb-2">Our efficient & cost-effective services reduce the cost associated with technical & legal operations 
                             enhancing their sales & scaling customer engagement.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Services End --> */}


    {/* Use Cases start */}
   <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div className="container feature px-lg-0">
            <div className="row g-0 mx-lg-0">
                <div className="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.5s">
                    <div className="p-lg-5 ps-lg-0">
                        <div className="section-title text-start">
                            <h1 className="display-5 mb-4">Use Cases</h1>
                        </div>
                        {/* <p className="mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                         Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita 
                         duo justo erat amet</p> */}
                        <div className="row g-4 ms-5">
                            <div className="row-6">
                                <div className="usecase1 d-flex align-items-center">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" >
                                        <i className="fa fa-check fa-2x text-primary"></i>
                                    </div>
                                    <div className="ms-4">
                                    <h5 className="mb-0">EVIDENCE COLLECTION</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="row-6">
                                <div className="usecase2 d-flex align-items-center">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" >
                                        <i className="fa fa-check fa-2x text-primary"></i>
                                    </div>
                                    <div className="ms-4">
                                    <h5 className="mb-0">BACKGROUND CHECKS</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="row-6">
                                <div className="usecase3 d-flex align-items-center">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" >
                                        <i className="fa fa-check fa-2x text-primary"></i>
                                    </div>
                                    <div className="ms-4">
                                    <h5 className="mb-0">BLOCKCHAIN ANALYSIS</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="row-6">
                                <div className="usecase4 d-flex align-items-center">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" >
                                        <i className="fa fa-check fa-2x text-primary"></i>
                                    </div>
                                    <div className="ms-4">
                                    <h5 className="mb-0">ACCELERATED PROCESSES</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feature_img_div col-lg-6 pe-lg-8" >
                    <div className="position-relative h-100">
                        <img className="feature_img position-absolute img-fluid w-100 h-100" src="assests/images/usecases.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Use Cases end */}


{/* product & services start */}
<div className="container-fluid bg-light overflow-hidden  my-5 px-lg-0">
    <div className="container feature px-lg-0">
       <div className="row g-0 mx-lg-0">
          <div className="section-title text-start">
                <h1 className="display-5 mb-4">Products & services</h1>
          </div>
       
 <div className="col-lg-6 feature-text " data-wow-delay="0.5s">
            <div class="accordion" id="accordionExample">
                <div class="accordion-item ">
                   <h2 class="accordion-header" id="headingOne">
                   <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Pre-Piracy Soluctions
                   </button>
                   </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <p>It is a prevention phase that comes into play before publishing the content.
                        It helps creators to prevent their original content from piracy attacks and
                        publish authorized, encrypted, and original content. PrePiracy solutions include
                        watermarking and digital rights management, evaluating existing technologies for
                        loopholes, implementing extra measures to stop leakages within the team, etc.
                    </p>
                </div>
           </div>
         </div>
                 <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwo">
                     <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                       Post-Piracy Soluctions
                     </button>
                     </h2>
                 <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                 <div class="accordion-body">
                 <p>
                      It is a post leakage phase that comes into play after publishing content on the web.
                     Post-Piracy Solutions scrutinize website/content for piracy issues after the content has
                     been published. It monitors for content leakage and also backstops the content owners by 
                     retrieving their original content from authorized websites. Post-piracy solutions include 
                     web monitoring, e-commerce scanning, article protection, P2P monitoring, original text & 
                     image identifier, and password leakage identification.
                </p>
                </div>
            </div>
            </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Brand and Reputation Management
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Brand & Reputation Management is another service offered by us to succor our customers to protect their brands from 
            infringements & cataloging various products to maintain your brand reputation.</p>
      </div>
    </div>
  </div>
</div>
</div>


<div className="feature_img_div col-lg-6 pe-lg-8 " >
<div class="accordion" id="accordionExample">
   <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      Facial Recognition
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
        Biometrics based on machine learning, allowing the user to locate an individual across a 
        range of visual content even if the subject's image has changed
        </p>
      </div>
    </div>
  </div>
 <div class="accordion-item">
    <h2 class="accordion-header" id="headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      Object Detaction
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
        Image recognition algorithms which identify particular objects within an image, 
        such as weapons, flags, and other items crucial for the investigation
        </p>
      </div>
    </div>
  </div>
 <div class="accordion-item">
    <h2 class="accordion-header" id="headingSix">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
      DNA Profiling
      </button>
    </h2>
    <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
        Technology which mines genetic profile banks to establish genealogical links using both
         biological and digital identifiers
        </p>

      </div>
    </div>
  </div>
  </div>

 
 </div>
</div>
</div>
</div>
{/* product & services */}


   {/* <!-- Quote Start --> */}
    <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div className="container quote px-lg-0">
            <div className="row g-0 mx-lg-0">
                <div className="quote_img_div col-lg-6 ps-lg-0">
                    <div className="img position-relative h-100">
                    <img className="position-absolute img-fluid w-100 h-100" src="assests/images/quote.png"  alt=""/>                    </div>
                </div>
                <div className="col-lg-6 quote-text py-5 wow fadeIn" data-wow-delay="0.5s">
                    <div className="p-lg-5 pe-lg-0">
                        <div className="section-title text-start">
                            <h1 className="display-5 mb-4">Free Quote</h1>
                        </div>
                        <p className="mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. 
                        Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit 
                        clita duo justo erat amet</p>
                        <form>
                            <div className="row g-3">
                                <div className="form_input col-12 col-sm-6">
                                    <input type="text" className="form-control border-0" placeholder="Your Name" />
                                </div>
                                <div className="form_input col-12 col-sm-6">
                                    <input type="email" className="form-control border-0" placeholder="Your Email" />
                                </div>
                                <div className="form_input col-12 col-sm-6">
                                    <input type="text" className="form-control border-0" placeholder="Your Mobile"/>
                                </div>
                                <div className="form_input col-12 col-sm-6">
                                    <select className="form_input form-select border-0" >
                                        <option selected>Select A Service</option>
                                        <option value="1">Service 1</option>
                                        <option value="2">Service 2</option>
                                        <option value="3">Service 3</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control border-0" placeholder="Special Note"></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Quote End --> */}


    {/* <!-- Team Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="section-title text-center">
                <h1 className="display-5 mb-5">Team Members</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item">
                        <div className="overflow-hidden position-relative">
                            <img className="img-fluid" src="assests/img/team-1.jpg" alt=""/>
                            <div className="team-social">
                                <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="text-center border border-5 border-light border-top-0 p-4">
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item">
                        <div className="overflow-hidden position-relative">
                            <img className="img-fluid" src="assests/img/team-2.jpg" alt=""/>
                            <div className="team-social">
                                <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="text-center border border-5 border-light border-top-0 p-4">
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item">
                        <div className="overflow-hidden position-relative">
                            <img className="img-fluid" src="assests/img/team-3.jpg" alt=""/>
                            <div className="team-social">
                                <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="text-center border border-5 border-light border-top-0 p-4">
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="team-item">
                        <div className="overflow-hidden position-relative">
                            <img className="img-fluid" src="assests/img/team-4.jpg" alt=""/>
                            <div className="team-social">
                                <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="text-center border border-5 border-light border-top-0 p-4">
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Team End --> */}


    {/* <!-- Testimonial Start --> */}
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="section-title text-center">
                <h1 className="display-5 mb-5">Testimonial</h1>
            </div>
    <Carousel>
      <Carousel.Item>
                <div className="testimonial-item text-center">
                    <img className="img-fluid bg-light p-2 mx-auto mb-3" src="assests/img/testimonial-1.jpg" />
                     <div className="testimonial-text text-center p-4">
                     <p>Clita clita tempor justo dolor ipsum amet kasd amet duo<br/> justo duo duo labore sed sed.
                             Magna ut diam sit et amet stet eos<br/> sed clita erat magna elitr erat sit sit erat at 
                             rebum justo sea clita.</p>
                        <h5 className="mb-1">Sara Wilsson</h5>
                        <span className="fst-italic"> Designer</span>
                    </div>
                </div>
      </Carousel.Item>
      <Carousel.Item>
                <div className="testimonial-item text-center">
                    <img className="img-fluid bg-light p-2 mx-auto mb-3" src="assests/img/testimonial-2.jpg" />
                    <div className="testimonial-text text-center p-4">
                    <p>Clita clita tempor justo dolor ipsum amet kasd amet duo<br/> justo duo duo labore sed sed.
                             Magna ut diam sit et amet stet eos<br/> sed clita erat magna elitr erat sit sit erat at 
                             rebum justo sea clita.</p>
                        <h5 className="mb-1">Matt Brondon</h5>
                        <span className="fst-italic">Freelancer</span>
                    </div>
                </div>
      </Carousel.Item>
      <Carousel.Item>
                <div className="testimonial-item text-center">
                    <img className="img-fluid bg-light p-2 mx-auto mb-3" src="assests/img/testimonial-3.jpg" />
                    <div className="testimonial-text text-center p-4">
                        <p>Clita clita tempor justo dolor ipsum amet kasd amet duo<br/> justo duo duo labore sed sed.
                             Magna ut diam sit et amet stet eos<br/> sed clita erat magna elitr erat sit sit erat at 
                             rebum justo sea clita.</p>
                        <h5 className="mb-1">John Larson</h5>
                        <span className="fst-italic">Ceo & Founder</span>
                    </div>
                </div>
                </Carousel.Item>
      {/* Add more Carousel.Item elements for additional slides */}
    </Carousel>
    </div>
    </div>
    {/* <!-- Testimonial End --> */}



{/* our clients */}
<div className="section-title text-center">
                <h1 className="display-5 mb-5">Our Clients</h1>
                <h3>Trusted by 100+ COMPANIES</h3>
    </div>
       
 <div class="items"> 
 
  
                <div className="card">
                    <div className="card-body"> 
                        <img className="logo" src="https://img.icons8.com/color/100/000000/google-logo.png"/>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <img className="logo" src="https://img.icons8.com/color/100/000000/linkedin.png"/>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <img className="logo" src="https://img.icons8.com/color/100/000000/yahoo.png"/>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <img className="logo" src="https://img.icons8.com/color/100/000000/amazon.png"/>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <img className="logo" src="https://img.icons8.com/color/48/000000/netflix.png"/>
                    </div>
                </div>
               <div className="card">
                    <div className="card-body">
                        <img className="logo" src="https://img.icons8.com/ios-filled/100/000000/mac-os.png"/>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <img className="logo" src="https://img.icons8.com/color/48/000000/dell--v1.png"/>
                    </div>
                </div>
                 <div className="card">
                    <div className="card-body">
                        <img className="logo" src="https://img.icons8.com/color/100/000000/hp.png"/>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <img className="logo" src="https://img.icons8.com/color/100/000000/ebay.png"/>
                    </div>
                </div>

               {/* <!----> */}
               <div className="card">
                    <div className="card-body">
                        <img className="logo" src="https://img.icons8.com/color/100/000000/ibm.png"/>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <img className="logo" src="https://img.icons8.com/color/100/000000/sap.png"/>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <img className="logo" src="https://img.icons8.com/color/100/000000/ebay.png"/>
                    </div>
                </div>





             




         

</div>  
  



   </div>
    )
}
export default Home