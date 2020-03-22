import React, {useEffect, useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import MovieCard from './components/MovieCard'
import Footer from './components/Footer'

let apiKey = "9b49a09820c155187af9b47bf7400b7d";

function App() {
  let [movies,setMovies] = useState(null)
  let CurrentPlaying = async () => {
    console.log("Api Key",apiKey);
    let url = ` https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
    let data = await fetch(url);
    let dataResult = await data.json(); 
    console.log("Data is ",dataResult);
    setMovies(dataResult.results)
  }
  useEffect(CurrentPlaying,[]);
  if (movies == null) {
    return (
      <Spinner animation="border" role="status">
  <span className="sr-only">Loading...</span>
</Spinner>
    );
  } return (
    //Start Website
    <div className="App">

      {/* Navigation Bar */}
      <div className="container-fluid top-nav">
      <NavBar />
      </div>
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
          <Col xs={12} md={8}>

            {/* Movie Category Name */}
            <h1 className="category-name">Movies Category</h1>

            
            {/* Movie Card */}
            <MovieCard movieList = {movies && movies} />
            

          </Col>

          <Col xs={6} md={4}>
            <SideBar/>
          </Col>

        </Row>
      </Container>
      {/* End Main-Content */}
    
    <div className="container-fluid footer">
      <Footer/>      
      </div>
    </div>
    // End Website
  );
}

export default App;
