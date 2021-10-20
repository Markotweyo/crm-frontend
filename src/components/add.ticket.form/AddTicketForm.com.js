import React from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'

import PropTypes from 'prop-types'


import './add-ticket-form.style.css'

export const AddTicketForm = ({handleOnChange, handleOnSubmit, frmData, setFrmData, frmDataErro} ) => {
     console.log(frmData)

    return (
        <Container className='mt-3 add-new-ticket bg-light'>
            <Row>
                <Col>
                <h2 className="text-info text-center">Add New Ticket</h2>
                <hr/>
                <Form autoComplete="off" onSubmit={handleOnSubmit}>
                    <Form.Group as ={Row}>
                        <Form.Label column sm={3}>Subject</Form.Label>
                        <Col sm={9}>
                            <Form.Control 
                            name="subject"
                            value={frmData.subject}
                            onChange={handleOnChange}
                            placeholder= "Enter Subject"
                            required
                            />
                            <Form.Text className='text-danger'>
                                {frmDataErro.subject && "Subject is required" }
                            </Form.Text>
                        </Col>
                    </Form.Group>
                    <Form.Group as ={Row}>
                        <Form.Label column sm={3}>Issue Date</Form.Label>
                        <Col sm={9}>
                            <Form.Control 
                            type= "date"
                            name="issueDate"
                            value={frmData.issueDate}
                            onChange={handleOnChange}
                            required
                            />
                        </Col>
                   
                    </Form.Group>
                    <Form.Group as ={Row}>
                    
                        <Form.Label column sm={3}>Issue Found</Form.Label>
                        <Col sm={9}>
                            <Form.Control 
                            as= "textarea"
                            name="details"
                            rows="5"
                            value={frmData.details}
                            onChange={handleOnChange}
                            required
                            />
                        </Col>
                    </Form.Group>
                    
                    <Button type="submit" variant="info" >Submit</Button>
                </Form>
                
                </Col>
            </Row>
             
        </Container>
        
    )
}


AddTicketForm.propTypes= {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    frmData: PropTypes.object.isRequired,
    setFrmData: PropTypes.func.isRequired,
    frmDataErro: PropTypes.func.isRequired,
}