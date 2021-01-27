import React from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'
import styled from 'styled-components'

const Media = () => (
    <div className='blog' >
        <Paragraph><b>Our Blog</b></Paragraph>
        <Grid style={{ margin: '0 190px 100px 190px' }} stackable columns={2}>
            <Grid.Column>
                <Segment>
                    <Image src='/images/file.jpg' />
                </Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment>
                    <Image src='/images/fruit.jpg' />
                </Segment>
            </Grid.Column>
        </Grid>
    </div>

)

export default Media
const Paragraph = styled.p`
font-size:50px;
`