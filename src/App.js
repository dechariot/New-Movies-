import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { Container, Row, Col } from 'react-bootstrap'
import NavBar from './components/NavBar'
import MovieCard from './components/MovieCard'
import Footer from './components/Footer'


export default function App() {
  return (
    //Start Website
    <div className="App">

      {/* Navigation Bar */}
      <NavBar />
      {/* Navigation Bar */}

      {/* Start Main-Content */}
      <Container className="main-content">
        {/* Stack the columns on mobile by making one full-width and the other half-width */}

        {/* Filter */}
        <Container>
          Hello This is Filter
        </Container>
        {/* Filter */}

        <Row>
          <Col xs={12} md={9}>

            {/* Movie Category Name */}
            <h1>Movies Category</h1>

            {/* Movie Card */}
            <MovieCard />

          </Col>

          <Col xs={6} md={3}>
            SideBar
          </Col>

        </Row>
      </Container>
      {/* End Main-Content */}

      <Footer/>      

    </div>
    // End Website
  );
}

