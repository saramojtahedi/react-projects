import React from 'react'
import './Wrapper.scss'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Wrapper = (props) => {
    return (
        <Container className='main-wrapper p-4'>
            <div className='breadcrumb'>
                <Link to="/">صفحه اصلی / </Link>
                <span>{props.linkTitle}</span>
            </div>
            {props.children}
        </Container>
    )
}

export default Wrapper
