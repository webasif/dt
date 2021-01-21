import React from 'react'
import styled from 'styled-components'

const Intro = () => {
    return (
        <div>
            <Span>
                <Span1>
                    <Paragraph1><b>We are here for your care</b></Paragraph1>
                    <Paragraph2>Best care & <br></br> Better Doctor</Paragraph2>
                    <Paragraph3><b>Lorem ipsum dolor sit amet, consectetur adipiscing<br></br> elit sed do eiusmod tempor incididunt ut <br></br>labore et dolore magna aliqua.</b></Paragraph3>
                    <Button>MAKE AN APPOINTMENT</Button>
                </Span1>
                <Span2>
                    <img src="/images/intro.png" alt="intro" />

                </Span2>
            </Span>
        </div>
    );
}

export default Intro
const Span = styled.span`
display: flex;
justify-content:space-around;
text-align: start;
margin-top:15rem;
`
const Paragraph1 = styled.p`
font-size:1.2rem;
margin:0;
`
const Paragraph2 = styled.p`
font-size:4rem;
margin:0;
`
const Paragraph3 = styled.p`
`
const Span1 = styled.span`
padding: 8rem 0 0 5rem;`

const Span2 = styled.span`
padding-right:4.5rem;`

const Button = styled.button`
margin: 1.5rem 0 0 0;
padding: 1.2rem 2.5rem 1.2rem 2.5rem;
border-radius:.8rem;
background-color:#0070fa;
border:none;
color:white;
`

