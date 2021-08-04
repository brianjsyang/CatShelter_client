import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import styled from 'styled-components';
import catBanner from '../images/cat-banner.jpg'; // https://www.pexels.com/photo/photo-of-white-and-black-kitten-1120049/

// change css

const Styles = styled.div`
  .banner {
    background: url(${catBanner}) no-repeat fixed top;
    background-size: cover;
    color: #efefef;
    height: 500px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

function Banner() {
    return(
        <Styles>
            <Jumbotron fluid className="banner text-center">
            <div className="overlay"></div>
                <Container>
                    <h1 className="display-4">Welcome</h1>
                    
                    <p className="lead">Give your partner a new life</p>
                </Container>
            </Jumbotron>
        </Styles>
    );
}

export default Banner;