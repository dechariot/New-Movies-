import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

export default function Footer() {
    return (
        <Container className="Footer">
            <Row>
                <Col md={4}><ul>
                    <li><a>Hello</a></li>
                    <li><a>Hello</a></li>
                    <li><a>Hello</a></li>
                    <li><a>Hello</a></li>
                    </ul></Col>
                <Col md={4}><ul>
                <li><a>Hello</a></li>
                <li><a>Hello</a></li>
                <li><a>Hello</a></li>
                <li><a>Hello</a></li>
                    </ul></Col>
                <Col md={4}><ul>
                <li><a>Hello</a></li>
                <li><a>Hello</a></li>
                <li><a>Hello</a></li>
                <li><a>Hello</a></li>
                    </ul></Col>
            </Row>
        </Container>
    )
}
