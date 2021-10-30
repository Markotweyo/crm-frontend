import React, {useState, useEffect} from 'react'
import {Container, Row, Col, Button } from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.com'
import SearchForm from '../../components/searchform/SearchForm'
import { TicketTable } from '../../components/ticket-table/TicketTable.comp'
import tickets from '../../assets/data/dummy.ticket.json'


const TicketLists = () => {

    const [str, setStr] = useState("");
    const [displayTicket, setDisplayTicket] = useState(tickets)
    
    
    useEffect(() => {
        
    }, [str, displayTicket])

    
    
    const handleOnChange= (e)=>{
        const {value} = e.target
        console.log(value)
        setStr(value)
        SearchTicket(value)
    }

    const SearchTicket= (sttr)=> {
        const displayTickets = tickets.filter((row) => 
            row.subject.toLowerCase().includes(sttr.toLowerCase())
            
        );
            
        console.log(displayTickets)
        setDisplayTicket(displayTickets)
    }

    return (
        <Container>
            <Row>
                <Col>
                <PageBreadcrumb page='Ticket List'/>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                <Button variant='info'>Add New Ticket</Button>
                </Col>
                <Col className='text-right'>
                <SearchForm
                handleOnChange={handleOnChange}
                str={str}/>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col>
                <TicketTable tickets={displayTicket}/>
                </Col>
            </Row>
            
        </Container>
    )
}

export default TicketLists



