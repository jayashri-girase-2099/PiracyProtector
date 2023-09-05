import React from 'react'

const ProductsComponent = () => {
  return (
    <>
    
    {/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
            <h1 className="display-5 text-white mb-3 animated slideInDown">Products</h1>
            {/* <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                    <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                    <li className="breadcrumb-item text-white active" aria-current="page">Products</li>
                </ol>
            </nav> */}
        </div>
    </div>
    {/* <!-- Page Header End --> */}


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
              </div>
        </div>
    </div>
    {/* <!--Products End --> */}

    </>
  )
}

export default ProductsComponent