import React from 'react'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'

const Social = () => {
    return (
        <div>
            <Span>
                <Span1>
                    <Icon name='facebook square' size='big' />
                    <Icon name='twitter' size='big' />
                    <Icon name='youtube' size='big' />
                    <Icon name='linkedin' size='big' />
                </Span1>
                <Span2>
                    <Paragraph><Icon name='phone' size='large' />12345 <Icon style={{ marginLeft: '1rem' }} name='mail' size='large' />info@demohospital.com</Paragraph>

                </Span2>


            </Span>
        </div>
    )
}

export default Social

const Span = styled.span`
display:flex;
justify-content: space-evenly;
margin: 0;
padding:.7rem;
position: fixed;
left: 0;
right: 0;
top: 0;
background-color:#e3f2fd;
z-index: 1;
`
const Span1 = styled.span`
display:flex;
`
const Span2 = styled.span``

const Paragraph = styled.p``