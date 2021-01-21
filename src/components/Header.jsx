import React from 'react'
import styled from 'styled-components'
const Header = () => {
    return (
        <div>
            <Span>
                <p>Logo</p>
                <p>Home</p>
                <p>About</p>
                <p>Doctors</p>
                <p>Services</p>
                <p>Department</p>
                <p>Contact</p>
            </Span>
        </div>
    );
}

export default Header
const Span = styled.span`
    display:flex;
    align-items: stretch;
    justify-content: space-evenly;
    margin:0rem;
    padding:2rem;
    position: fixed;
    top: 3rem;
    left: 0;
    bottom: 0;
    right: 0;
    background-color:white;
    height:5rem;
    box-shadow: 0 0 20px -20px currentcolor;
    z-index: 1;
`