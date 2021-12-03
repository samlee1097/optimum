import React from 'react';
import "../../Styling/LogCard.css"

function LogCard({log}) {
    console.log(log)
    return (
       <div className="log-container">
           <div class='card'>
                <div class='info'>
                    <span className="log-details">
                        <h1 class='title'>{log.activity_type}</h1>
                        <span className="log-details">  
                            <p>Duration: {log.activity_duration} minutes</p>
                            <p>Date: {log.date}</p>
                        </span>
                        <div className="extra-details">
                            <p>Happiness: {log.happiness}/5</p>
                            <p>Weight: {log.weight}lbs</p>
                            {log.notes !=="" ? <p>Note: {log.notes}</p> : null}
                        </div>
                    </span>
                </div>
            </div>
       </div>
    );
}

export default LogCard;
