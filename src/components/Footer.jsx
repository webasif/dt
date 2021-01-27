import React from 'react'
import { Icon } from 'semantic-ui-react'
import styled from 'styled-components'

const Footer = () => (
    <div className='footer' style={{ height: '80px', backgroundColor: 'black', color: 'white' }}>
        <Span1>
            <Paragraph> © All rights reserved</Paragraph>
        </Span1>
        <Span2>
            <a href="www.facebook.com"><Icon style={{ padding: '0 20px 0 20px' }} name='facebook' /></a>
            <a href="twitter.com"><Icon style={{ padding: '0 20px 0 20px' }} name='twitter' /></a>
            <a href="instagram.com"><Icon style={{ padding: '0 20px 0 20px' }} name='instagram' /></a>
            <a href="skype.com"><Icon style={{ padding: '0 20px 0 20px' }} name='skype' /></a>
        </Span2>
    </div>

)

export default Footer
const Paragraph = styled.p``
const Span1 = styled.span`
float:left;
margin:30px 0 0 80px;
`
const Span2 = styled.span`
float:right;
margin:30px 80px 0 0px;
`