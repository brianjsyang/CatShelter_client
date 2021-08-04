import React from 'react';

function Layout(props) {
    return(     
        <div className="container mb-5">
                {props.children}
        </div> 
    );
}

export default Layout;