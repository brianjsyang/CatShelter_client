import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import CatItem from './CatItem';
//fetch("http://localhost:3500/api/cat/")

function Home() {
  const [cats, setCats] = useState( [] );

  useEffect(() => {
    const fetchCats = async () => {

      // API call for Heroku
      const result = await axios('https://boiling-castle-06366.herokuapp.com/api/cat/');

      // API call for localhost
      //const result = await axios('http://localhost:3500/api/cat/');


      setCats(result.data);
    };
    fetchCats();
  }, []);

  
  
  return(
      <Container>
        <Row>

          {cats.map(data => (<Col md key={data._id} > <CatItem cat={data} /> </Col>) )}

        </Row>
      </Container>
    )
  
}



export default Home;