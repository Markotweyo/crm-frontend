import React from 'react';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.com';
import {Container, Row, Col, Button} from 'react-bootstrap'
import tickets from '../../assets/data/dummy.ticket.json'
import MessageHistory from '../../components/messagehistory/MessageHistory';

const ticket=tickets[0]

const Ticket = () => {
    return (
        <Container>
            <Row>
                <Col>
                <PageBreadcrumb page="Ticket"/>
                </Col>
            </Row>
            <Row>
                <Col className="text-weight-bolder text-secondary">
                <div className="subject">Subject: {ticket.subject}</div>
                <div className="date">Date: {ticket.addedDate}</div>
                <div className="status">Status: {ticket.status}</div>
                </Col>
                <Col className="text-right">
                <Button variant='outline-info'>Close Ticket</Button>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                <MessageHistory msg={ticket.history}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Ticket
