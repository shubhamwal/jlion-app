import React from 'react'
import "./first.css";


export default function First() {
  return (
    <div className='container-fluid'>
      <div className='row setFirst'>
        <div className='col-md-6 col-12'>
          <h1 className="assuranceText">Assurance of Total Security</h1>
          <p className="assurancePara">Our Guards receive the highest quality ongoing training to execute their job with professionalism, alertness, &amp; punctuality. On top of that we use latest technology solutions to make sure they execute their job with perfection and to our customer's satisfaction.</p>
          <p className="assurancePara">With the combination of best Manpower and latest Technology, you have our Assurance of Total security.</p>
        </div>
        <div className='col-md-6 col-12'>
          <div className="innerImage">
            <img className="companyImage" src="../images/PICTURE.jpeg" alt="First Image" />
          </div>
        </div>
      </div>
    </div>
  )
}
