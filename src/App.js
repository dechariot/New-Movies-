import React from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Card, Button } from 'react-bootstrap'

export default function App() {
  return (
    //Start Website
    <div className="App">

      {/* Movie Card */}
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.</Card.Text>
          <Button variant="secondary">Go somewhere</Button>
        </Card.Body>
      </Card>
      {/* Movie Card */}


    </div>
    // End Website
  );
}

