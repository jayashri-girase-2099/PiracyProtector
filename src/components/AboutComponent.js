import React from "react";
const AboutComponent = ()=>{
    return(
        <>
     {/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
            <h1 className="display-5 text-white mb-3 animated slideInDown">About</h1>
        </div>
    </div>
    {/* <!-- Page Header End --> */}


    {/* <!-- Feature Start --> */}
    {/* <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <div className="d-flex align-items-center justify-content-center bg-light" >
                            <i className="fa fa-user-check fa-2x text-primary"></i>
                        </div>
                        <h1 className="display-1 text-light mb-0">15</h1>
                    </div>
                    <h5>Hard Workers</h5>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <div className="d-flex align-items-center justify-content-center bg-light" >
                            <i className="fa fa-check fa-2x text-primary"></i>
                        </div>
                        <h1 className="display-1 text-light mb-0">521</h1>
                    </div>
                    <h5>Our Projects</h5>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <div className="d-flex align-items-center justify-content-center bg-light">
                            <i className="fa fa-drafting-compass fa-2x text-primary"></i>
                        </div>
                        <h1 className="display-1 text-light mb-0">232</h1>
                    </div>
                    <h5>Happy Clients</h5>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <div className="d-flex align-items-center justify-content-center bg-light" >
                            <i className="fa fa-headphones fa-2x text-primary"></i>
                        </div>
                        <h1 className="display-1 text-light mb-0">1463</h1>
                    </div>
                    <h5>Hours Of Support</h5>
                </div>
            </div>
        </div>
    </div> */}
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
                            picture for streamlining data-driven investigations.</p>
                        <div className="row g-4 mb-4 pb-2">
                            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" >
                                        <i className="fa fa-users fa-2x text-primary"></i>
                                    </div>
                                    <div className="ms-3">
                                        <h2 className="text-primary mb-1" data-toggle="counter-up">232</h2>
                                        <p className="fw-medium mb-0">Happy Clients</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" >
                                        <i className="fa fa-check fa-2x text-primary"></i>
                                    </div>
                                    <div className="ms-3">
                                        <h2 className="text-primary mb-1" data-toggle="counter-up">521</h2>
                                        <p className="fw-medium mb-0">Projects Done</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="" className="btn btn-primary py-3 px-5">Explore More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About End --> */}


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
        
 </>
    )
}
export default AboutComponent