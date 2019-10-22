import React from "react";
import HelmetUtils from "../../Helpers/HelmetUtils";

export default function Home() {
    return (
        <React.Fragment>
            <HelmetUtils/>
            <section className="bg-home-1" id="home">
                <div className="home-bg-overlay"></div>
                <div className="home-center">
                    <div className="home-desc-center">
                        <div className="container">
                            <div className="row vertical-content">
                                <div className="col-lg-6">
                                    <div className="home-content">
                                        <h3 className="home-title">Creating neo-age financial solutions just for you</h3>
                                        {/* <p className="home-desc line-height_1_8 mt-4 text-white-50">A digital web design
                                            studio creating modern & engaging online experiences</p> */}
                                        <div className="mt-5">
                                            <a href="" className="btn btn-white btn-round">Get Started <i
                                                className="mdi mdi-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="home-img mt-4">
                                        <img src="assets/images/features/img-1.png" className="img-fluid" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container-fluid">
                            <div className="row">
                                <div className="home-shape mt-4">
                                    <img src="assets/images/shape-1.png" alt="" className="img-fluid mx-auto d-block"/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="section bg-light" id="services">
                <div className="container">
                    <div className="row vertical-content">
                        <div className="col-lg-4">
                            <div className="mt-4">
                                <h4 className="services-title line-height_1_4">IIIANA STUDIOS will soon introduce you to -</h4>
                                {/* <p className="text-muted mt-3 line-height_1_8 f-15">Contrary to popular belief not
                                    simply random text It has piece</p> */}
                                <div className="mt-5">
                                    <a href="" className="btn btn-custom btn-round">Know More <i
                                        className="mdi mdi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="services-box p-5 btn-round mt-4 shadow" style={{background: 'linear-gradient(to bottom, #f37335, #fdc830)'}}>
                                <div className="services-icon">
                                    <img src="assets/logo/hornbill-colored.svg" className="img-fluid" alt="" style={{objectFit: 'cover', width: '100%'}}/>
                                </div>
                                <div className='d-flex flex-row justify-content-center align-content-center align-items-center'>
                                    <h5 className="mt-4 pt-2">Payment Gateway</h5>
                                </div>
                                {/* <p className="text-muted mt-4 mb-0">Passage you need sure there anything embarrassing
                                    hidden all the generators is Internet repeat predefined open chunks necesary making
                                    first Internet.</p> */}
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="services-box p-5 btn-round mt-4" style={{background: 'linear-gradient(to right, #5e02f5, #3e0b91)'}}>
                                <div className="services-icon">
                                <img src="assets/logo/hornbill-dark-bg.svg" className="img-fluid" alt="" style={{objectFit: 'cover', width: '100%'}}/>
                                </div>
                                <div className='d-flex flex-row justify-content-center align-content-center align-items-center'>
                                    <h5 className="mt-4 pt-2 text-white">Digital Wallet</h5>
                                </div>
                            
                                {/* <p className="text-muted mt-4 mb-0">Vestibullum pretium conggue Morrfrbi quam commodo
                                    justo at viverra viverra orrci Pellentesque habitant morbi tristique senectus et
                                    netus et malesuada.</p> */}
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="section counter">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="title-heading text-center text-white">Build your dream business application today</h1>
                            <h3 className='title-desc text-center text-capitalize text-white-50' style={{textTransform: 'uppercase'}}>TRANSFORM YOUR BUSINESS FOR THE DIGITAL AGE</h3>
                            <p className="title-desc text-center text-white-50 mt-4">
                                Throw away paper forms, no more email approvals, stop chasing people, get insights and reports at your fingertip by building apps to solve your everyday operational challenges in business.
                            </p>
                        </div>
                    </div>

                    <div className="row mt-5" id="counter">
                        <div className="col-lg-3">
                            <div className="counter-box text-center mt-5">
                                <div className="counter-icon">
                                    <i className="mdi mdi-check-circle-outline"></i>
                                </div>
                                <span className=" mt-3 text-white" style={{fontSize: 20, fontWeight: 600}}>Get the BEST BUSINESS SOLUTION from our solution consultant</span>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="counter-box text-center mt-5">
                                <div className="counter-icon">
                                    <i className="mdi mdi-forum-outline"></i>
                                </div>
                                <span className=" mt-3 text-white" style={{fontSize: 20, fontWeight: 600}}>Get the BEST CUSTOMER EXPERIENCE with our transparent CX model</span>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="counter-box text-center mt-5">
                                <div className="counter-icon">
                                    <i className="mdi mdi-star-outline"></i>
                                </div>
                                <span className=" mt-3 text-white" style={{fontSize: 20, fontWeight: 600}}>Get QUALITY TESTED delivery of products</span>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="counter-box text-center mt-5">
                                <div className="counter-icon">
                                    <i className="mdi mdi-heart-outline"></i>
                                </div>
                                <span className=" mt-3 text-white" style={{fontSize: 20, fontWeight: 600}}>We aim to add you to our HAPPY list of customers</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            <section className="section" id="features">
                <div className="container">
                    <div className="row vertical-content">
                        <div className="col-lg-6">
                            <div className="features-img mt-4">
                                <img src="assets/images/features/img-2.png" className="img-fluid" alt=""/>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="features-content mt-4">
                                <h4 className="title-heading line-height_1_4">We help startups launch their
                                    products</h4>
                                <p className="text-muted mt-4"> - Have an exciting business idea, but unsure about market validation?</p>
                                <p className="text-muted mt-4"> - Have a business that you want to scale using technology, but lack the expertise?</p>
                                <p className="text-muted mt-4"> - Technology would scale your business, but maintaining an in-house tech team is
expensive?</p>
                                <div className="mt-5">
                                    <a href="" className="btn btn-custom  btn-round">Connect with us <i
                                        className="mdi mdi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* <section className="section bg-light" id="pricing">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="title-heading text-center">Our Pricing</h1>
                            <p className="title-desc text-center text-muted mt-4">It is a long established fact that a
                                reader will be distracted by the readable content of a page when looking at its
                                layout.</p>
                        </div>
                    </div>

                    <div className="row mt-4">

                        <div className="col-lg-4">
                            <div className="pricing-box text-center p-5 mt-5">
                                <h4 className="pricing-plan text-uppercase">Economy plan</h4>
                                <h2 className="pricing-price mt-5 mb-0">Free</h2>
                                <p className="pricing-month mt-1">Per Month</p>
                                <div className="plan-features mt-5">
                                    <p>Bandwidth: <b>1GB</b></p>
                                    <p>Onlinespace: <b>50MB</b></p>
                                    <p>Support: <b>No</b></p>
                                    <p><b>1</b> Domain</p>
                                    <p><b>No</b> Hidden Fees</p>
                                </div>
                                <div className="mt-5">
                                    <a href="" className="btn btn-secondary btn-sm btn-round">Join Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="pricing-box-active text-center bg-white p-5 mt-5">
                                <h4 className="pricing-plan text-uppercase">Deluxe Plan</h4>
                                <h2 className="pricing-price mt-5 mb-0">$19.00</h2>
                                <p className="pricing-month mt-1">Per Month</p>
                                <div className="plan-features mt-5">
                                    <p>Bandwidth: <b>1GB</b></p>
                                    <p>Onlinespace: <b>50MB</b></p>
                                    <p>Support: <b>No</b></p>
                                    <p><b>1</b> Domain</p>
                                    <p><b>No</b> Hidden Fees</p>
                                </div>
                                <div className="mt-5">
                                    <a href="" className="btn btn-custom btn-sm btn-round">Join Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="pricing-box text-center p-5 mt-5">
                                <h4 className="pricing-plan text-uppercase">Ultimate Plan</h4>
                                <h2 className="pricing-price mt-5 mb-0">$29.00 <span></span></h2>
                                <p className="pricing-month mt-1">Per Month</p>
                                <div className="plan-features mt-5">
                                    <p>Bandwidth: <b>1GB</b></p>
                                    <p>Onlinespace: <b>50MB</b></p>
                                    <p>Support: <b>No</b></p>
                                    <p><b>1</b> Domain</p>
                                    <p><b>No</b> Hidden Fees</p>
                                </div>
                                <div className="mt-5">
                                    <a href="" className="btn btn-secondary btn-sm btn-round">Join Now</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section> */}

            {/* <section className="section bg-client" id="clients">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="title-heading text-center">What they've said</h1>
                            <p className="title-desc text-center text-muted mt-4">In an ideal world this website
                                wouldn’t exist, a client would acknowledge the importance of having web copy before the
                                design starts.</p>
                        </div>
                    </div>

                    <div className="row mt-5 justify-content-center">
                        <div className="col-lg-8">
                            <div id="owl-demo">

                                <div className="client-content text-center mt-4">
                                    <div className="clinet-img">
                                        <img src="assets/images/users/img-1.jpg" className="img-fluid rounded-circle" alt=""/>
                                    </div>
                                    <h5 className="mt-4">Raymond Sloan</h5>
                                    <p className="f-12">Web Developer</p>
                                    <p className="f-16 client-desc">"Aenean vehicula neque turpis at dictum purus
                                        malesuada Aenean risus ex sollicitudin nec pharetra in cursus aliquet."</p>
                                </div>

                                <div className="client-content text-center mt-4">
                                    <div className="clinet-img">
                                        <img src="assets/images/users/img-2.jpg" className="img-fluid rounded-circle" alt=""/>
                                    </div>
                                    <h5 className="mt-4">Mary Shriner</h5>
                                    <p className="f-12">Web Designer</p>
                                    <p className="f-16 client-desc">"Aenean vehicula neque turpis at dictum purus
                                        malesuada Aenean risus ex sollicitudin nec pharetra in cursus aliquet."</p>
                                </div>

                                <div className="client-content text-center mt-4">
                                    <div className="clinet-img">
                                        <img src="assets/images/users/img-3.jpg" className="img-fluid rounded-circle" alt=""/>
                                    </div>
                                    <h5 className="mt-4">Robert Garrett</h5>
                                    <p className="f-12">Web Developer</p>
                                    <p className="f-16 client-desc">"Aenean vehicula neque turpis at dictum purus
                                        malesuada Aenean risus ex sollicitudin nec pharetra in cursus aliquet."</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="client-logo pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="client-images">
                                <img src="assets/images/clients/1.png" alt="logo-img" className="mx-auto img-fluid d-block"/>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="client-images">
                                <img src="assets/images/clients/2.png" alt="logo-img" className="mx-auto img-fluid d-block"/>
                            </div>
                        </div>
                        <div className="col-lg-3 ">
                            <div className="client-images">
                                <img src="assets/images/clients/3.png" alt="logo-img" className="mx-auto img-fluid d-block"/>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="client-images">
                                <img src="assets/images/clients/4.png" alt="logo-img" className="mx-auto img-fluid d-block"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="section" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="title-heading text-center">Contact Us</h1>
                            {/* <p className="title-desc text-center text-muted mt-4">Tentesque habitant morbi tristique
                                senectus et netus malesuada fames turpis egestas quisque congue felis euismod Vestibulum
                                ac vitae fringilla.</p> */}
                        </div>
                    </div>

                    <div className="row justify-content-center mt-5">
                        <div className="col-lg-10">
                            <div className="custom-form mt-3">
                                <div id="message"></div>
                                <div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group mt-2">
                                                <input name="name" id="name" className="form-control" placeholder="Name"
                                                       type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group mt-2">
                                                <input name="email" id="email" className="form-control"
                                                       placeholder="Email" type="email"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group mt-2">
                                                <input className="form-control" id="subject" placeholder="Subject"
                                                       type="text"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group mt-2">
                                                <textarea name="comments" id="comments"
                                                          className="form-control" placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 mt-3 text-center">
                                            <input id="submit" name="send"
                                                   className="submitBnt btn btn-custom btn-round" value="Send Message"
                                                   type="submit"/>
                                                <div id="simple-msg"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="footer">
                <div className="footer-bg-overlay"></div>
                <div className="container">

                    <div className="footer-content">
                        <div className="d-flex flex-row justify-content-center align-content-center align-items-center">
                            <img src="assets/logo/logo-dark.png" alt="" height="50"/>
                        </div>

                        {/* <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-3">
                                    <h5 className="f-18 text-white">Home</h5>
                                    <ul className="list-unstyled footer-link mt-3">
                                        <li><a href="">About us</a></li>
                                        <li><a href="">Careers</a></li>
                                        <li><a href="">Contact us</a></li>
                                    </ul>
                                </div>

                                <div className="col-lg-3">
                                    <h5 className="f-18 text-white">Services</h5>
                                    <ul className="list-unstyled footer-link mt-3">
                                        <li><a href="">Terms & Condition</a></li>
                                        <li><a href="">Jobs</a></li>
                                    </ul>
                                </div>

                                <div className="col-lg-3">
                                    <h5 className="f-18 text-white">Pricing</h5>
                                    <ul className="list-unstyled footer-link mt-3">
                                        <li><a href="">Business</a></li>
                                        <li><a href="">Bookmarks</a></li>
                                        <li><a href="">Contact</a></li>
                                    </ul>
                                </div>

                                <div className="col-lg-3">
                                    <h5 className="f-18 text-white">Contact</h5>
                                    <ul className="list-unstyled footer-link mt-3">
                                        <li><a href="">123-4556-789</a></li>
                                        <li><a href="">Your@mail.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-12">
                            <p className="footer-alt text-center text-white-50 mb-0">2019 © IIIana. Design by
                                IIIANA STUDIO</p>
                        </div>
                    </div>

                </div>

            </section>

        </React.Fragment>
    )
}