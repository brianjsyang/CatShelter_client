import axios from 'axios';
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function CatDelete(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        window.location.reload();
    };

    const handleDelete = async (e) => {
        e.preventDefault();

        const response = await axios.delete(`http://localhost:3500/api/cat/${props.id}` );

        if(response.status === 200) {
            setShow(true);
        }
    }
    

    return(
        <>
            <Button variant="primary" className="btn btn-sm btn-outline-secondary" onClick={handleDelete}>
                Delete
            </Button>

            <Modal animation="false" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Cat, no more :(</Modal.Title>
                </Modal.Header>
                <Modal.Body>Cat has been successfully removed from the Shelter</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CatDelete;