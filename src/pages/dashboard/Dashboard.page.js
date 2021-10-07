import React from 'react'
import {Col, Container, Row, Button} from 'react-bootstrap'
import { TicketTable } from '../../components/ticket-table/TicketTable.comp'
import tickets from '../../assets/data/dummy.ticket.json'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.com'

export const Dashboard = () => {
    return (
        <Container>
            <Row>
                <Col>
                <PageBreadcrumb page="Dashboard"/>
                </Col>
            </Row>
            <Row>
                <Col className='text-center mt-5 mb-2'>
                <Button 
                    variant="info"
                    style={{ fontsize: "3 rem", padding: "10px 10px"}}>
                        Add a New Ticket
                </Button>
                </Col>
            </Row>

            <Row>
                <Col className='text-center mt-5 mb-2'>
                <div className="div">Total Tickets: 50</div>
                <div className="div">Pending Tickets: 5</div>
                </Col>
            </Row>
            <Row>
                <Col className='mb-2'> Recently Added Tickets
                
                </Col>
            </Row>
            <Row>
                <Col className='recent-ticket'>
                    <TicketTable tickets={tickets}/>
                </Col>
            </Row>
            
            
        </Container>
    )
}
