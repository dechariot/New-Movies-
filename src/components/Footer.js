import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

export default function Footer() {
    return (
        <Container>
            <Row>
                <Col md={4}>First, but unordered</Col>
                <Col md={4}>Second, but last</Col>
                <Col md={4}>Third, but second</Col>
            </Row>
        </Container>
    )
}
