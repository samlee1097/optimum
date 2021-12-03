import React from 'react';
import Graphs from './Graphs'
import "../../Styling/Details.css"

function Details({currentUser}) {
    return (
        currentUser ? <><div className="user-details">
           <h3>About Me</h3>
           <p>Logs: {currentUser.logs.length}</p>
           <p>Created on: {currentUser.created_at.split("T")[0]}</p>
           <Graphs currentUser={currentUser}/>
       </div></> : null
    );
}

export default Details;
