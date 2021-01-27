import React from 'react'
import { Grid, Image, Icon } from 'semantic-ui-react'
import styled from 'styled-components'
const Services = () => {
    return (
        <div className="services" style={{ marginTop: '10rem' }}>
            <Paragraph1><b>Our Services</b></Paragraph1>
            <Grid container columns={3}>
                <Grid.Column>
                    <Span>
                        <Span1>
                            <Paragraph> <Icon name='bed' size='huge' /> lorem ipsum lorem ipsum </Paragraph>
                            <Paragraph2>Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod tempor incididunt ut labore </Paragraph2>
                        </Span1>
                        <Span2>
                            <Paragraph> <Icon name='bed' size='huge' /> lorem ipsum lorem ipsum </Paragraph>
                            <Paragraph2>Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod tempor incididunt ut labore </Paragraph2>
                        </Span2>
                    </Span>

                </Grid.Column>

                <Grid.Column>
                    <Span>
                        <Image src='/images/services.png' />
                    </Span>

                </Grid.Column>

                <Grid.Column>
                    <Span>
                        <Span3>
                            <Paragraph> <Icon name='heartbeat' size='huge' /> lorem ipsum lorem ipsum </Paragraph>
                            <Paragraph3>Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod tempor incididunt ut labore </Paragraph3>
                        </Span3>
                        <Span4>
                            <Paragraph>  <Icon name='heartbeat' size='huge' /> lorem ipsum lorem ipsum </Paragraph>
                            <Paragraph3>Lorem ipsum dolor sit amet,    adipiscing elit sed do eiusmod tempor incididunt ut labore </Paragraph3>
                        </Span4>
                    </Span>
                </Grid.Column>
            </Grid >

        </div >
    );
}

export default Services
const Paragraph = styled.p`

`
const Paragraph1 = styled.p`
font-size:2.5rem;`
const Paragraph2 = styled.p`
width: 14rem;
margin-left: 3.7rem;
`
const Paragraph3 = styled.p`
width: 14rem;
margin-left: 3.7rem;
`
const Span = styled.span`
display:flex;
flex-direction: column;
margin-top:2.5rem;
`
const Span1 = styled.span`
margin-top: 4rem;
`
const Span2 = styled.span`
margin-top: 8rem;
`
const Span3 = styled.span`
margin-top: 4rem;
`
const Span4 = styled.span`
margin-top: 8rem;
`