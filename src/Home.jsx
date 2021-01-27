import React from 'react'
import './App.css'
//import Social from './components/Social'
//import Nav from './components/Nav'
import Intro from './components/Intro'
import About from './components/About'
import Services from './components/Services'
import Dept from './components/Dept'
import Doctors from './components/Doctors'
import AppointmentForm from './components/AppointmentForm'
import Media from './components/Media'
import Address from './components/Address'
import Footer from './components/Footer'


const Home = () => {
    return (
        <div className="Home">
            <Intro />
            <About />
            <Services />
            <Dept />
            <Doctors />
            <AppointmentForm />
            <Media />
            <Address />
            <Footer />
        </div>
    )

}

export default Home