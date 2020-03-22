import React from 'react'
import { Card, Button, Container, Row, Col, Tabs, Tab } from 'react-bootstrap'

export default function MovieCard() {
    return (
        <Container className="MovieCard">
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row>
                <Col xs={12} md={4} sm={6}>
                    {/* Movie Card */}
                    <Card style={{ width: '210px' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body style={{ height: '249.893px' }}>
                            <Tabs defaultActiveKey="profile">
                                <Tab eventKey="home" title="Content" style={{ height: '144px' }}>
                                    <div>
                                        <h3>Title</h3>
                                        <p>Content</p>
                                    </div>
                                </Tab>
                                <Tab eventKey="profile" title="Rating" style={{ height: '144px' }}>
                                    <div>IMDB Rating</div>
                                </Tab>
                            </Tabs>
                            <Button variant="secondary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    {/* Movie Card */}
                </Col>
                <Col xs={12} md={4} sm={6}>
                    {/* Movie Card */}
                    <Card style={{ width: '210px' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="secondary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    {/* Movie Card */}
                </Col>
                <Col xs={12} md={4} sm={6}>
                    {/* Movie Card */}
                    <Card style={{ width: '210px' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="secondary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    {/* Movie Card */}
                </Col>

            </Row>
        </Container>
    );
}