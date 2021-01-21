import React from 'react'
import styled from 'styled-components'
import { Grid, Segment, Image, Icon } from 'semantic-ui-react'


const About = () => {
    return (
        <div>
            <Span>
                <Span1>
                    <Image style={{ zIndex: '-1' }} src='images/about-us.png' size='big' />
                </Span1>

                <Span2>
                    <Heading>About Us</Heading>
                    <Paragraph1>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed <br></br> do eiusmod tempor incididunt
                    ut <br></br> labore et dolore magna aliqua Quis <br></br>ipsum suspendisse ultrices gravida. Risus<br></br> cmodo viverra maecenas
                         accumsan lacus vel</Paragraph1>
                    <Button>LEARN MORE</Button>

                    <Grid stackable columns={3}>
                        <Grid.Column style={{ zIndex: '-1' }}>
                            <Segment>
                                <p><Icon name='emergency' size='huge' /><br></br>Demo Icon </p>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column style={{ zIndex: '-1' }}>
                            <Segment>
                                <p> <Icon name='doctor' size='huge' /><br></br>Demo Icon </p>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column style={{ zIndex: '-1' }}>
                            <Segment>
                                <p> <Icon name='wheelchair' size='huge' /><br></br>Demo Icon </p>
                            </Segment>
                        </Grid.Column>
                    </Grid>

                </Span2>
            </Span>
        </div>
    )
}

export default About
const Span = styled.span`
display:flex;
justify-content:space-evenly;
margin-top:10rem;
text-align:left;
`

const Span1 = styled.span``

const Span2 = styled.span`
padding-top:8rem`

const Heading = styled.h1``

const Paragraph1 = styled.p``

const Button = styled.button`
margin: 3rem 0 1.4rem 0;
padding: 1.2rem 2.5rem 1.2rem 2.5rem;
border-radius:.8rem;
background-color:#651fff;
border:none;
color:white;`

