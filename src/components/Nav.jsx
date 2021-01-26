import React from 'react'
import './../App.css'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <ul class="nav-links">
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/about' >
                    <li>About</li>
                </Link>
                <Link to='/doctors'  >
                    <li>Doctors</li>
                </Link>
                <Link to='/services'  >
                    <li>Services</li>
                </Link>
                <Link to='/department'  >
                    <li>Department</li>
                </Link>
                <Link to='/contact'  >
                    <li>Contact</li>
                </Link>

            </ul>
        </nav>
    );
}

export default Nav