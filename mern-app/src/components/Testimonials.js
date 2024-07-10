import React from 'react'
import "./first.css";


export default function Testimonials() {
    return (
        <div className='container-fluid testimonials'>
            <div className='row  setTestimonial '>
                <div>
                    <h1 className="testimonialText">Testimonials</h1>
                </div>
                <div className='col-md-6 col-12'>

                    <div className="testimonialMain">

                        <p className="testimonialPara">Jlion Security has provided exceptional security services for our company. Highly recommended.</p>
                    </div>
                    <div className="testimonialMain">

                        <p className="testimonialPara">The guards from Jlion Security are professional, punctual, and always alert. Very satisfied with their service.</p>
                    </div>
                </div>


                <div className='col-md-6 col-12'>
                    <div className="testimonialMain">

                        <p className="testimonialPara">We feel much safer knowing that Jlion Security is protecting our premises. Excellent service.</p>
                    </div>
                    <div className="testimonialMain">

                        <p className="testimonialPara">Prompt and efficient service from Jlion Security. They ensure that our property is secure at all times.</p>
                    </div>


                </div>
            </div>
        </div>
    )
}
