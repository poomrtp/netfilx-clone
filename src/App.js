import React from 'react'
import './App.css'
import Row from './components/Row'
import Banner from './components/Banner'
import requests from './request'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      {/* <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar> */}
          
      <Banner >
        
      </Banner>
      <Row title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}>
      </Row>
      <Row title="Trainding Now"
        fetchUrl={requests.fetchTrending}>
      </Row>
      <Row title="Top Rated"
        fetchUrl={requests.fetchTopRated}>
      </Row>
      <Row title="Action Movies"
        fetchUrl={requests.fetchActionMovies}>
      </Row>
      <Row title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}>
      </Row>
      <Row title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}>
      </Row>
      <Row title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}>
      </Row>
      <Row title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}>
      </Row>
      <Row title="Animations"
        fetchUrl={requests.fetchAnimations}>
      </Row>
    </div>
  );
}

export default App;
