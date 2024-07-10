import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import First from '../components/First';
import Testimonials from '../components/Testimonials';
import Safety from '../components/Safety';
import Contact from '../components/Contact';

export default function Home() {


    return (
        <>
            <div><Navbar /></div>
            <div>
                <Carousel />
            </div>
            <div>
                <First />
            </div>
            <div>
                <Testimonials />
            </div>
            <div>
                <Safety />
            </div>
            <div>
                <Contact />
            </div>
            <div><Footer /></div>
        </>
    )
}
