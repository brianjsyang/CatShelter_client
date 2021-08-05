import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CatItem from './CatItem';
//fetch("http://localhost:3500/api/cat/")

function Home() {
  const [cats, setCats] = useState( [] );

  useEffect(() => {
    const fetchCats = async () => {
      const result = await axios('https://boiling-castle-06366.herokuapp.com/cat/');

      setCats(result.data);
    };
    fetchCats();
  }, []);

  
  
  return(
      <div>
        <div className="row">

          {cats.map(data => (<div className="col-md-4" key={data._id} > <CatItem cat={data} /> </div>) )}

        </div>
      </div>
    )
  
}



export default Home;