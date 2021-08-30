// Change API URL

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function CatDetail() {

    const [cats, setCats] = useState( [] );
    const { id } = useParams();

    useEffect(() => {
        const fetchCats = async () => {
            // API call for Heroku
            const result = await axios(`https://boiling-castle-06366.herokuapp.com/api/cat/${id}`);

            // API call for localhost
            //const result = await axios(`http://localhost:3500/api/cat/${id}`);

            setCats(result.data);
            console.log(result.data);
        };
        fetchCats();
    },[id]);
    

    return(
        <Container className="my-2">
            <div className="container row">
                        
                <div className="col-lg-6 bg-dark"> 
                    <p className="lead" color="white"> pic goes here </p>  
                </div>

                <div className="col-md-6 bg-light"> 
                    <p className="lead" color="white"> {cats.cat_name} </p> 
                    <p> {cats.cat_detail} </p>
                </div>
                        
            </div>
        </Container>
        
    );
}

export default CatDetail;