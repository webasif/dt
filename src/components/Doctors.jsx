import React from 'react'
import styled from 'styled-components'
//import { Image } from 'semantic-ui-react'
const Doctors = () => {
    return (
        <div className='doctors' style={{ margin: '70px 0 140px 0' }}>
            <Paragraph1><b>Experienced Doctors</b></Paragraph1>
            <Paragraph2><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore</b></Paragraph2>
            <Span>
                <Span1>
                    <Image style={{ margin: '0 20px 0 20px' }} src='/images/doc-profile.png' />
                    <Paragraph3>John Doe</Paragraph3>
                    <Paragraph4>Heart Specialist</Paragraph4>
                </Span1>
                <Span2>
                    <Image style={{ margin: '0 20px 0 20px' }} src='/images/doc-profile.png' />
                    <Paragraph3>John Doe</Paragraph3>
                    <Paragraph4>Heart Specialist</Paragraph4>
                </Span2>
                <Span3>
                    <Image style={{ margin: '0 20px 0 20px' }} src='/images/doc-profile.png' />
                    <Paragraph3>John Doe</Paragraph3>
                    <Paragraph4>Heart Specialist</Paragraph4>
                </Span3>
            </Span>

        </div>
    );
}

export default Doctors
const Paragraph1 = styled.p`
font-size: 40px;
margin-bottom: 15px;
`
const Paragraph2 = styled.p`
margin:20px 0 80px 0;

`
const Paragraph3 = styled.p`
margin: 27px 0 10px 0;
font-size: 25px;
`
const Paragraph4 = styled.p`
margin-bottom: 55px;
font-size: 15px;
`
const Span = styled.span`
display:flex;
justify-content: center;
`
const Span1 = styled.span`
display:flex;
flex-direction:column;
`
const Span2 = styled.span`
display:flex;
flex-direction:column;
`
const Span3 = styled.span`
display:flex;
flex-direction:column;
`
const Image = styled.img`
width:190px;
height:250px;`
