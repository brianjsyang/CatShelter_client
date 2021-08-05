import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function CreateCat() {
    const [formData, setFormData] = useState({
        cat_name: '',
        cat_pic: ' ',
        cat_breed: '',
        cat_age: 0,
        cat_comment: '',
        cat_detail: '',
        cat_adopted: false,
    });

    const history = useHistory();


    const handleSubmit = async (e) => {
        e.preventDefault();

        const { cat_name, cat_pic, cat_breed, cat_age, cat_comment, cat_detail } = formData;
        const cat = { cat_name, cat_pic, cat_breed, cat_age, cat_comment, cat_detail };

        const response = await axios.post('https://boiling-castle-06366.herokuapp.com/cat/add', cat);

        console.log(response);

        // get response from server on success, redirect.
        if(response.status === 200){
            history.push("/");
        } 
    };

    const handleChange = cat_name => e => {
        setFormData({ ...formData, [cat_name]: e.target.value });
    };


    return(
        <div className="container">
        <h1 className="lead"> Add a New Cat to the Shelter </h1>
        <form onSubmit={handleSubmit} style={{width: '50%'}}>
            <div className="form-group">
                <label htmlFor="CatName">Cat Name</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="CatName" 
                    placeholder="Cat Name Here" 
                    required
                    value={formData.cat_name} 
                    onChange={handleChange('cat_name')} 
                />
            </div>

            <div className="form-group">
                <label htmlFor="CatBreed">Breed</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="CatBreed" 
                    placeholder="Ex: Bengal. If unknow: N/A"
                    required
                    value={formData.cat_breed}
                    onChange={handleChange('cat_breed')}
                />
            </div>

            <div className="form-group">
                <label htmlFor="CatAge">Age</label>
                <input 
                    type="number" 
                    className="form-control" 
                    id="CatAge"
                    value={formData.cat_age}
                    onChange={handleChange('cat_age')}
                />
            </div>

            <div className="form-group">
                <label htmlFor="CatComment">Comment</label>
                <textarea 
                    type="text" 
                    className="form-control" 
                    id="CatName" 
                    row="3" 
                    placeholder="This will be shown along with the Thumnail" 
                    value={formData.cat_comment}
                    onChange={handleChange('cat_comment')}
                />
            </div>

            <div className="form-group">
                <label htmlFor="CatDetails">More Details</label>
                <textarea 
                    type="text" 
                    className="form-control" 
                    id="CatName" row="10" 
                    placeholder="More details about the cat. Ex: vaccination/medical history" 
                    value={formData.cat_detail}
                    onChange={handleChange('cat_detail')}
                />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        </div>
    );
}

export default CreateCat;