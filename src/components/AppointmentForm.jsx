import React from 'react'
import { Input, Form, TextArea, Button, Select } from 'semantic-ui-react'
import styled from 'styled-components'

const serviceOptions = [
  { key: 'n', text: 'Name of the service', value: 'Name of the service' },
  { key: 'o', text: 'Name of the service', value: 'Name of the service' },
  { key: 't', text: 'Other', value: 'other' },
]
const timeOptions = [
  { key: 'n', text: 'Name of the service', value: 'Name of the service' },
  { key: 'o', text: 'Name of the service', value: 'Name of the service' },
  { key: 't', text: 'Other', value: 'other' },
]

const AppointmentForm = () => (
  <div style={{
    marginBottom: '150px',
    display: 'flex', backgroundImage: `url("/images/kb.jpg")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
  }}>
    <Form style={{
      width: '60%', margin: '0 0 100px 80px', padding: '100px 70px 10px 70px'
    }}>
      <Form.Group widths='equal'>
        <Form.Field
          id='form-input-control-first-name'
          control={Input}
          label='First name'
          placeholder='First name'
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Last name'
          placeholder='Last name'
        />
        <Form.Field
          control={Select}
          options={serviceOptions}
          label={{ children: 'Service', htmlFor: 'form-select-control-service' }}
          placeholder=' Select Service'
          search
          searchInput={{ id: 'form-select-control-service' }}
        />
        <Form.Field
          control={Select}
          options={timeOptions}
          label={{ children: 'Time', htmlFor: 'form-select-control-time' }}
          placeholder='Select time'
          search
          searchInput={{ id: 'form-select-control-time' }}
        />
      </Form.Group>
      <Form.Field
        id='form-textarea-control-opinion'
        control={TextArea}
        label='Opinion'
        placeholder='Opinion'
      />
      <Form.Field
        id='form-input-control-error-email'
        control={Input}
        label='Email'
        placeholder='joe@schmoe.com'
        error={{
          content: 'Please enter a valid email address',
          pointing: 'below',
        }}
      />
      <Form.Field
        id='form-button-control-public'
        control={Button}
        content='MAKE AN APPOINTMENT'
        label=''
      />
    </Form>
    <Image src='/images/pres.png' />
  </div>

)

export default AppointmentForm
const Image = styled.img`
width:40%;
height:120%;
`