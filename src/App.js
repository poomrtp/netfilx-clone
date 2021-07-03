import React from 'react'
import './App.css'
import Row from './Row'
import Banner from './Banner'
import requests from './request'

function App() {
  return (
    <div className="App">
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
