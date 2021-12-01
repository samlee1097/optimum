import React from 'react';
import "../../Styling/LogCard.css"

function LogCard({log}) {
    return (
       <div className="log-container">
           <div class='card'>
                <div class='info'>
                    <h1 class='title'>{log.activity_type}</h1>
                    <p class='description'>
                        <p>Duration: {log.activity_duration} minutes</p>
                        <p>Date: {log.date}</p>
                    </p>
                </div>
            </div>
       </div>
    );
}

export default LogCard;
