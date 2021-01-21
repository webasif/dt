import React from 'react'
import styled from 'styled-components'
const Dept = () => {
    return (
        <div style={{ marginTop: '8rem' }}>
            <Paragraph><b>Our Department</b></Paragraph>
            <Span>
                <Button>
                    <Paragraph1>Lorem Ipsum</Paragraph1>
                    <Paragraph1>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </Paragraph1>
                </Button>
                <Button>
                    <Paragraph1>Lorem Ipsum</Paragraph1>
                    <Paragraph1>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </Paragraph1>
                </Button>
            </Span>
            <Span>
                <Button>
                    <Paragraph1>Lorem Ipsum</Paragraph1>
                    <Paragraph1>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </Paragraph1>
                </Button>
                <Button>
                    <Paragraph1>Lorem Ipsum</Paragraph1>
                    <Paragraph1>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </Paragraph1>
                </Button>
            </Span>
        </div>
    );
}

export default Dept
const Paragraph = styled.p`
font-size: 2.5rem;`

const Span = styled.span`
display:flex;
justify-content: center;
`
const Button = styled.button`
border: 1px solid #f1f1f1;
background-color:white;
width: 20rem;
height: 16rem;
margin: 30px;
transition: 0.3s;
&:hover {
    color: white;
    background-color: #03a9f4;

  }
`
const Paragraph1 = styled.p`
font-family: "Roboto", sans-serif;
    line-height: 1.929;
    font-size: 16px;
`




