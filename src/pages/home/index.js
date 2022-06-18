import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Homepage.scss'

const HomePage = () => {
    return (
        <Container fluid className='homepage'>
            <Row>
                <Col xs={12} md={4}>
                   <Link to='/products'>
                       <h6>مدیریت محصولات</h6>
                       <p>مدیریت محصولات با امکان فیلتر، تغییر ترتیب و جستجو</p>
                   </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage
