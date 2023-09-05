import { Carousel } from 'react-bootstrap';


const ServicesComponent =()=>{
    return(
      <>
        {/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
            <h1 className="display-5 text-white mb-3 animated slideInDown">Service</h1>
            {/* <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                    <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                    <li className="breadcrumb-item text-white active" aria-current="page">Service</li>
                </ol>
            </nav> */}
        </div>
    </div>
    {/* <!-- Page Header End --> */}


    {/* <!-- Service Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="section-title text-center">
                <h1 className="display-5 mb-5">Our Services</h1>
            </div>
            <div className="row g-4">
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item">
                        <div className="overflow-hidden">
                        <img className="img-fluid w-100" src="./assests/images/service_1.jpg" alt=""/>
                       </div>
                        <div className="p-4 text-center border border-5 border-light border-top-0">
                            <h5 className="lh-base mb-0">Fast & Economical</h5>
                            <p className="text-primary fw-medium mb-2">Our automated crawlers and deep learning solutions are quicker 
                            and cheaper,our technology is designed to handle it.</p>
                            <a className="fw-medium" href="">Read More<i className="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item">
                        <div className="overflow-hidden">
                        <img className="img-fluid w-100" src="./assests/images/service_2.jpg" alt=""/>
                        </div>
                        <div className="p-4 text-center border border-5 border-light border-top-0">
                        <h5 className="lh-base mb-0">Robust & Accurate</h5>
                             <p className="text-primary fw-medium mb-2">Verify infringements to ensure they are not
                              from your official channel partners,our technology is designed to handle it.</p>
                            <a className="fw-medium" href="">Read More<i className="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item">
                        <div className="overflow-hidden">
                        <img className="img-fluid w-100" src="./assests/images/service_3.jpg" height={300} alt=""/>
                        </div>
                        <div className="p-4 text-center border border-5 border-light border-top-0">
                        <h5 className="lh-base mb-0">Scalable</h5>
                             <p className="text-primary fw-medium mb-2">Regardless of the type, length or number of your content, our technology is designed to handle it.</p>
                            <a className="fw-medium" href="">Read More<i className="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item">
                        <div className="overflow-hidden">
                        <img className="img-fluid w-100" src="./assests/images/service_1.jpg" alt=""/>
                        </div>
                        <div className="p-4 text-center border border-5 border-light border-top-0">
                        <h5 className="lh-base mb-0">Transparent</h5>
                             <p className="text-primary fw-medium mb-2">Our automated crawlers and deep learning 
                             solutions are quicker and cheaper.& legal operations enhancing their sales & scaling customer engagement.</p>
                            <a className="fw-medium" href="">Read More<i className="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item">
                        <div className="overflow-hidden">
                        <img className="img-fluid w-100" src="./assests/images/service_5.webp" alt=""/>
                        </div>
                        <div className="p-4 text-center border border-5 border-light border-top-0">
                        <h5 className="lh-base mb-0">Market Intelligence</h5>
                             <p className="text-primary fw-medium mb-2">It helps clients Gain valuable
                              insights into the potential market by removing copies and links to your original content.
                              & scaling customer engagement.</p>
                            <a className="fw-medium" href="">Read More<i className="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item">
                        <div className="overflow-hidden">
                        <img className="img-fluid w-100" src="./assests/images/service_6.jpg" alt=""/>
                        </div>
                        <div className="p-4 text-center border border-5 border-light border-top-0">
                        <h5 className="lh-base mb-0">Profitability</h5>
                             <p className="text-primary fw-medium mb-2">Our efficient & cost-effective services reduce the cost associated with technical & legal operations 
                             enhancing their sales & scaling customer engagement.</p>
                            <a className="fw-medium" href="">Read More<i className="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Service End --> */}


    {/* <!-- Quote Start --> */}
    <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div className="container quote px-lg-0">
            <div className="row g-0 mx-lg-0">
                <div className="col-lg-6 ps-lg-0" >
                    <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src="assests/images/quote.png"  alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 quote-text py-5 wow fadeIn" data-wow-delay="0.5s">
                    <div className="p-lg-5 pe-lg-0">
                        <div className="section-title text-start">
                            <h1 className="display-5 mb-4">Free Quote</h1>
                        </div>
                        <p className="mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. 
                        Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                        <form>
                            <div className="row g-3">
                                <div className="col-12 col-sm-6">
                                    <input type="text" className="form-control border-0" placeholder="Your Name" />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="email" className="form-control border-0" placeholder="Your Email" />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="text" className="form-control border-0" placeholder="Your Mobile" />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <select className="form-select border-0">
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
                        <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed.<br/>
                             Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at 
                             rebum justo sea clita.</p>
                        <h5 className="mb-1">Client Name</h5>
                        <span className="fst-italic">Profession</span>
                    </div>
                </div>
      </Carousel.Item>
      <Carousel.Item>
                <div className="testimonial-item text-center">
                    <img className="img-fluid bg-light p-2 mx-auto mb-3" src="assests/img/testimonial-2.jpg" />
                    <div className="testimonial-text text-center p-4">
                        <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed.<br/>
                             Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at
                              rebum justo sea clita.</p>
                        <h5 className="mb-1">Client Name</h5>
                        <span className="fst-italic">Profession</span>
                    </div>
                </div>
      </Carousel.Item>
      <Carousel.Item>
                <div className="testimonial-item text-center">
                    <img className="img-fluid bg-light p-2 mx-auto mb-3" src="assests/img/testimonial-3.jpg" />
                    <div className="testimonial-text text-center p-4">
                        <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed.<br/>
                             Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at 
                             rebum justo sea clita.</p>
                        <h5 className="mb-1">Client Name</h5>
                        <span className="fst-italic">Profession</span>
                    </div>
                </div>
                </Carousel.Item>
      {/* Add more Carousel.Item elements for additional slides */}
    </Carousel>
    </div>
    </div>
    {/* <!-- Testimonial End --> */}

        

  
      </>
    )
}
export default ServicesComponent