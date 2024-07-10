import React from 'react'
import "./first.css";


export default function Service() {
    return (
        <div className='container-fluid testimonials'>
            <div className='row  setTestimonial '>
                <div>
                    <h1 className="testimonialText">Services</h1>
                </div>
                <div className='col-md-6 col-12'>

                    <div className="testimonialMain">
                        <h2 className="serviceText">Guard Services</h2>
                        <p className="testimonialPara">Highly trained armed guards to ensure the safety and security of your premises while adhering to the guidelines and maintaining professionalism.</p>
                    </div>
                    <div className="testimonialMain">
                        <h2 className="serviceText">Residential Security</h2>
                        <p className="testimonialPara">Professional and trained guards to know the difference between guests and intruders. Protecting Your Home and Family. </p>
                    </div>
                    <div className="testimonialMain">
                        <h2 className="serviceText">VIP Protection</h2>
                        <p className="testimonialPara">The most experienced and most trained personnel, professional, courteous and quick to action while having a mind of an investigator at the same time. They are mostly ex-servicemen. Keeping High-Profile Individuals Safe.</p>
                    </div>
                    <div className="testimonialMain">
                        <h2 className="serviceText">Industrial Security
                        </h2>
                        <p className="testimonialPara">Securing Industrial Complexes and Facilities, also keeping in mind work area safety, fire safety and having up-to date knowledge of First-Aid.</p>
                    </div>
                </div>


                <div className='col-md-6 col-12'>
                    <div className="testimonialMain">
                        <h2 className="serviceText">Event Security</h2>

                        <p className="testimonialPara">Professional security personnel to manage and secure events of all sizes. Ensuring a Safe and Secure Event.</p>
                    </div>
                    <div className="testimonialMain">
                        <h2 className="serviceText">Retail Security</h2>
                        <p className="testimonialPara">Guards are trained to have an eye for detail to Safeguarding Your Business and Customers</p>
                    </div>
                    <div className="testimonialMain">
                        <h2 className="serviceText">Patrolling Service                    </h2>

                        <p className="testimonialPara">Mobile patrol units to provide rapid response and surveillance for maximum security. We patrol the area on requirement basis or on demand to double check our security & provide double the safety to our clients.
                        </p>
                    </div>
                    <div className="testimonialMain">
                        <h2 className="serviceText">Comprehensive CCTV Services
                        </h2>

                        <p className="testimonialPara">We not only monitor your CCTV onsite but also monitor them off-site from our head-office to give you peace of mind and we also provide CCTV installation and maintenance services, on demand or complimentary.
                        </p>
                    </div>


                </div>
            </div>
        </div>
    )
}
