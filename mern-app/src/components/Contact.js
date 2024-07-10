import React from 'react'

export default function Contact() {
  return (
    <div>
      <div className='container-fluid testimonials'>
        <div className=' setTestimonial ' style={{ paddingBottom: "30px" }}>
          <div>
            <h1 className="ContactText">Contact Us</h1>
          </div>
          <p className="ContactPara">For inquiries or to request our services, please get in touch with us.</p>
          <p className="ContactPara">+91 9646776180 (Gurjeet Singh)</p>
          <p className="ContactPara">+91 9814731717 (Rocky Singh)</p>
          <p className="ContactPara">+91 9216717782 (Biroja Pandey)</p>
          <p className="ContactPara">+91 6280167816 (Amarjeet Singh)</p>

          <div className="contactImage">
            <img className="contactInnerImage" src="../images/logo.jpeg" alt="First Image" />
          </div>
        </div>
      </div>

    </div>
  )
}
