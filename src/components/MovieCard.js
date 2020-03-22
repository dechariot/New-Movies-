import React from 'react'
import { Card, Container, Row, Col, Tabs, Tab } from 'react-bootstrap'

export default function MovieCard(props) {
    let htmlMovies = props.movieList.map((movies) => {
        return (
            <Col md={4} sm={5}>
                {/* Movie Card */}
                <Card>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movies.poster_path}`} />
                    <Card.Body>
                <Card.Title>{movies.title}</Card.Title>
                    </Card.Body>
                </Card>
                {/* Movie Card */}
            </Col>
        )
    })
    return (
        <Container>
            <Row>

                {htmlMovies}

            </Row>
        </Container>
    );
}