import React from 'react';
import { ButtonGroup, Card, Nav, Button } from 'react-bootstrap';
import CatDelete from './CatDelete';


function CatItem(props) {
    

    return(
        <>
            <Card style={{ width: '18rem' }} className="my-2">
                <Card.Img variant="top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22208%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20208%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17af97fc3ce%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A11pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17af97fc3ce%22%3E%3Crect%20width%3D%22208%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2266.9453125%22%20y%3D%22117.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"/>
                <Card.Body>
                    <Card.Title> {props.cat.cat_name} </Card.Title>
                    <Card.Text>
                        {props.cat.cat_comment}
                    </Card.Text>

                    <ButtonGroup className="justify-content-md-center">

                        <Button as={Nav} variant="secondary">
                            <Nav.Link style={{color: 'white'}} href={"/" + props.cat._id}> View </Nav.Link>
                        </Button>

                        <Button as={Nav} variant="secondary">
                            <Nav.Link style={{color: 'white'}} href={"/update/" + props.cat._id}> Edit </Nav.Link>
                        </Button>
                        
                        <CatDelete id={props.cat._id} />

                    </ButtonGroup>

                    
                </Card.Body>
            </Card>
        </>
    );
}

export default CatItem;