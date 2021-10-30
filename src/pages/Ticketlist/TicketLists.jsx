import React, {useState, useEffect} from 'react'
import {Container, Row, Col, Button } from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.com'
import SearchForm from '../../components/searchform/SearchForm'

const TicketLists = () => {

    const [str, setStr] = useState("");

    useEffect(() => {}, [str])

    const handleOnChange= (e)=>{
        setStr(e.target.value)
    }
    return (
        <Container>
            <Row>
                <Col>
                <PageBreadcrumb page='Ticket List'/>
                </Col>
            </Row>
            <Row>
                <Col>
                <Button variant='info'>Add New Ticket</Button>
                </Col>
            </Row>
            <Row>
                <Col className='text-right'>
                <SearchForm
                handleOnChange={handleOnChange}
                str={str}/>
                </Col>
            </Row>
            <hr/>
            
        </Container>
    )
}

export default TicketLists



