import React from 'react'
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaGoogle, FaLinkedin  } from 'react-icons/fa';


export default function Footer() {
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-md-4 m-auto col-12" style={{ display: "flex" }}>
          <div className="nav-item">

            <a className="nav-link" href="#" style={{ color: "black", fontSize: "12px" }}> <FaPhone color="black" style={{ marginRight: '10px', fontSize: "12px" }} /> +91 9646776180 </a>
          </div>
          <div className="nav-item">

            <a className="nav-link" href="#" style={{ color: "black", fontSize: "12px" }}><FaEnvelope color="black" style={{ marginRight: '20px', fontSize: "12px" }} /> info@hrjlion06@gmail.com</a>
          </div>
        </div>
        <div className=" col-md-4 col-12 mt-3 mb-3">

          <div className="text-muted" style={{ color: "black", textAlign: "center" }}>info hrjlion06@gmail.com </div>
          <div className="text-muted" style={{ color: "black", textAlign: "center" }}>Copyright © 2024 Jlion Security Pvt. Ltd. All Rights Reserved</div>

        </div>
        <div className="setfooterlast col-md-4 m-auto col-12" style={{ display: "flex" }} >
          <div className="nav-item">
            <a className="nav-link" href="https://www.facebook.com/profile.php?id=100088487151865" style={{ color: "black", fontSize: "12px" }}><FaFacebook style={{ marginRight: '20px', fontSize: "22px" }} /></a>
          </div>
          <div className="nav-item">
            <a className="nav-link" href="https://www.instagram.com/jlion4groupsecuritypunjab/" style={{ color: "black", fontSize: "12px" }}><FaInstagram style={{ marginRight: '20px', fontSize: "22px" }} /></a>
          </div>
          <div className="nav-item">
            <a className="nav-link" href="#" style={{ color: "black", fontSize: "12px" }}><FaGoogle style={{ marginRight: '20px', fontSize: "22px" }} /></a>
          </div>
          <div className="nav-item">
            <a className="nav-link" href="#" style={{ color: "black", fontSize: "12px" }}><FaLinkedin  style={{ marginRight: '20px', fontSize: "22px" }} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
