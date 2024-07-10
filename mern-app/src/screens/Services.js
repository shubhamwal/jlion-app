import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Service from '../components/Service'

export default function Services() {
    return (
        <div>
            <div><Navbar /></div>
            <div style={{ marginTop: "80px" }}>
                <Service />
            </div>
            <div><Footer /></div>


        </div>
    )
}
