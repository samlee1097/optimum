import React, {useState} from 'react';
import "../../Styling/LogCard.css"

function LogCard({log, setDisplayDetail}) {

    const [liked, setLiked] = useState(false)
    const [message, setMessage] = useState(false)
    return (
       <div className="log-container">
           <div class='card'>
                <div class='info'>
                    <span className="log-details">
                        <h1 class='title'>{log.activity_type}</h1>
                        <span className="log-more-details">  
                            <p style={{marginLeft:"-12px"}}>|| {log.activity_duration} <em>min</em> ||</p>
                            <p style={{marginLeft:"-20px"}}>{log.date}</p>
                        </span>
                        <div className="extra-details">
                            {message ? <p className="respond" onClick={()=>setMessage(false)}>💬</p> : <p onClick={()=>setMessage(true)}>💬</p>}
                            {liked ? <p onClick={()=>setLiked(false)}>❤️</p> : <p onClick={()=>setLiked(true)}>🤍</p>}
                            <p onClick={()=> setDisplayDetail(log)} className="see-details">See More...</p>
                        </div>
                    </span>
                </div>
            </div>
       </div>
    );
}

export default LogCard;
