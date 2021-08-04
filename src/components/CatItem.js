import React from 'react';
import CatDelete from './CatDelete';


function CatItem(props) {
    

    return(
        <div className="border rounded">
            <img  className="rounded mx-auto d-block"
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22208%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20208%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17af97fc3ce%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A11pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17af97fc3ce%22%3E%3Crect%20width%3D%22208%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2266.9453125%22%20y%3D%22117.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" 
                alt="Thumnail"
                style={{height: '225px', width : '225px'}}
            />
            <div className="card-body">
                <p className="lead">{props.cat.cat_name}</p>
                <p>{props.cat.cat_comment}</p>

                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <a
                            href={"/" + props.cat._id}
                            className="btn btn-sm btn-outline-secondary"
                        >
                            View
                        </a>

                        <a 
                            href={"/update/" + props.cat._id}
                            className="btn btn-sm btn-outline-secondary"
                        >
                            Edit
                        </a>

                        <> 
                        <CatDelete id={props.cat._id} />
                        </>
                            
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CatItem;