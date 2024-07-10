import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Contacts() {
    return (
        <div>
            <div><Navbar /></div>
            <div style={{ marginTop: "80px" }}>
                <Contact />
            </div>
            <div><Footer /></div>


        </div>
    )
}
