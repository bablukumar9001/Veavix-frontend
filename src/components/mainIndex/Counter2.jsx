import React from 'react'
import "/public/css/newstyle.css"
import CountUp from 'react-countup';

const Counter2 = () => {
  return (
   <>


<section className="indexabout mt-5" >
        <div className="container">
            <div className="row">
               
                <div className="col-lg-6  ">
                    <div className="aboutveavixset" data-aos="fade-right">
                    <h2 className="titleveavix1 second-color "><span className=" first-color text-bold "   >veavix - </span>  Your partner in developing fantastic digital experiences in terms of strategy.</h2>
                    <p style={{  textAlign: 'justify' }}>
                        The Veavix team consists of idealists and forward-thinking individuals. We know how to make the best decisions and can utilise our knowledge to your benefit. Radical honesty is one of our basic values that guides our interactions with consumers</p>
                    <p style={{       textAlign: 'justify' }}>
                         Our company is made up of highly qualified IT specialists whose goal is to provide SMEs excellent yet affordable solutions. We are experts in creating websites and applications that are specifically tailored for each industry. Therefore, if there is a specific demand, we will satisfy it by customising the app to suit your requirements.
                        </p>               
                </div>
                                            <div className="mt40 aboutquation">
                            <h3 className="mb-30 mt-30 second-color" style={{ fontSize: '26px',
        fontWeight: 600 }} >Let's build something amazing togather</h3>
                            <a className="mt_btn_yellow  mb-30"  href="#">Contact Us</a>
                </div>
                   </div>
                <div className="col-lg-6 ">
                
  
                <div className="funfact">
                       <div className="row">
                       {/* <div className="col-lg-4 col-sm-6 col-12  " data-aos="zoom-in">
							<div className="funfct srcl1"><img src="startup.svg" data-aos="fade-up" data-aos-delay="600" alt="niwax app development template"/><span className="js-counter services-cuntr" data-number="2"  >2</span><span className="services-cuntr" >+</span>
								<p>Years<br/> Experience</p>
							</div>
						</div> */}

                     <div className="col-lg-4 col-sm-6 col-12" data-aos="zoom-in">
                                    <div className="funfct srcl1">
                                        <img src="startup.svg" alt="niwax app development template" data-aos="fade-up" data-aos-delay="600" />
                                        
                                        <span className="services-cuntr"><CountUp start={0} end={100} duration={5} decimals={0}  />+</span>
                                        <p>Years<br />Experience</p>
                                    </div>
                                    </div>
                                    
                     <div className="col-lg-4 col-sm-6 col-12" data-aos="zoom-in">
                                    <div className="funfct srcl2">
                                        <img src="team.svg" alt="niwax app development template" data-aos="fade-up" data-aos-delay="600" />
                                        
                                        <span className="services-cuntr"><CountUp start={0} end={80} duration={5} decimals={0}  />+</span>
                                        <p>Years<br />Experience</p>
                                    </div>
                                    </div>

                     <div className="col-lg-4 col-sm-6 col-12" data-aos="zoom-in">
                                    <div className="funfct srcl3">
                                        <img src="deal.svg" alt="niwax app development template" data-aos="fade-up" data-aos-delay="600" />
                                        
                                        <span className="services-cuntr"><CountUp start={0} end={150} duration={5} decimals={0}  />M</span>
                                        <p>Years<br />Experience</p>
                                    </div>
                     </div>

                     <div className="col-lg-4 col-sm-6 col-12" data-aos="zoom-in">
                                    <div className="funfct srcl2">
                                        <img src="computers.svg" alt="niwax app development template" data-aos="fade-up" data-aos-delay="600" />
                                        
                                        <span className="services-cuntr"><CountUp start={0} end={20} duration={5} decimals={0}  />+</span>
                                        <p>Years<br />Experience</p>
                                    </div>
                     </div>

                     <div className="col-lg-4 col-sm-6 col-12" data-aos="zoom-in">
                                    <div className="funfct srcl3">
                                        <img src="world.svg" alt="niwax app development template" data-aos="fade-up" data-aos-delay="600" />
                                        
                                        <span className="services-cuntr"><CountUp start={0} end={500} duration={5} decimals={0}  />M</span>
                                        <p>Years<br />Experience</p>
                                    </div>
                     </div>

                     <div className="col-lg-4 col-sm-6 col-12" data-aos="zoom-in">
                                    <div className="funfct srcl1">
                                        <img src="mobile.svg" alt="niwax app development template" data-aos="fade-up" data-aos-delay="600" />
                                        
                                        <span className="services-cuntr"><CountUp start={0} end={100} duration={5} decimals={0}  />%</span>
                                        <p>Years<br />Experience</p>
                                    </div>
                     </div>


                   
                 
                       </div>
                  </div>
                   
                </div>
            </div>
        </div>
    </section>


   </>
  )
}

export default Counter2