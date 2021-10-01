import React from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import PropTypes from 'prop-types'

export const ResetPassword = ({handleOnChange, handleOnResetSubmit, formSwitcher, email }) => {
    

    
    return (
        <Container>
            <Row>
                <Col>
                <h2 className="text-info text-center">Reset Password</h2>
                <hr/>
                <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                        type= "email"
                        name="email"
                        value={email}
                        onChange={handleOnChange}
                        placeholder= "Enter Your Email"
                        required
                        />
                        
                        
                       
                    </Form.Group>
                    <Button type="submit">Reset Password</Button>
                </Form>
                <hr/>
                <Row>
                    <Col>
                    <a href="#!" onClick={()=>formSwitcher('login')}>Login Now</a>
                    
                    </Col>
                </Row>
                </Col>
            </Row>
             
        </Container>
    )
}

ResetPassword.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired
}

