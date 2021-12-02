import React from 'react';
import "../../Styling/Details.css"

function Details({currentUser}) {
    return (
       <div className="user-details">
           <h3>About Me</h3>
           <p>Logs: {currentUser.logs.length}</p>
           <p>Created on: {currentUser.created_at.split("T")[0]}</p>
       </div>
    );
}

export default Details;
