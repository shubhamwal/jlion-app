import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div>
      <div><Navbar /></div>
      <div style={{ marginTop: "80px" }}>
        <div className='container-fluid' style={{background:"ffc800"}}>
          <div className='row setFirst  ' >
            <div className='col-md-6 col-12'>
              <h1 className="assuranceText">About Us</h1>
              <h1 className="overviewText">Company oerview</h1>

              <p className="assurancePara">JLion Pvt Ltd, the flagship company , was established in 2010 by Tejpal Singh (“MD”) as a firm in Kharrar(Punjab).  

</p>
              <p className="assurancePara">JLion  provides 360 degree Security Solutions, Specialised Training, Security audit, Bullion and Cash Management Services, Facility Management Services .</p>
              <p className="assurancePara">To provide this diversified portfolio of security-related products under one brand, JLion, different entities have been created, as each has its own set of regulatory and business requirement.

</p>
            
            </div>


            <div className='col-md-6 col-12'>
              <div className="innerImage">
                <img className="companyImage" src="../images/Tejpal.jpeg" alt="First Image"  />
                <h1 style={{textAlign:"center", marginTop:"20px"}}>Tejpal Singh (MD)</h1>
              </div>
              {/* <div className="innerImage">
                <img className="companyImage" src="../images/PICTURE.jpeg" alt="First Image" />
              </div> */}


            </div>
          </div>
        </div>

      </div>
      <div><Footer /></div>


    </div>
  )
}
