import React from 'react';
import { Container,ContainerFluid, Row, Col, Nav , Navbar, Form, FormControl, Button } from 'react-bootstrap';

export default function NavBar() {
    return (
        <Container className="TopBar">
            
            <Navbar expand="md">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
   
        </Container>
    );
}