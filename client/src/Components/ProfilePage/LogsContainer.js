import React, {useState} from 'react';
import LogCard from './LogCard';
import '../../Styling/LogContainer.css'

function LogsContainer({logs}) {

    const [attribute, setAttribute] = useState("date");
    const [displayLogs, setDisplayLogs] = useState(0)

    let newList = [...logs].sort((a,b) => {
        if (attribute === 'duration'){
                return b.activity_duration - a.activity_duration
        } else if(attribute === 'date'){
                return new Date(a.date) - new Date(b.date)
        } else {
                return a.activity_type.localeCompare(b.activity_type) 
        }
    }).map((log) => <LogCard key={log.id} log={log}/>)

    return (
       <div className="log-controller">
           <h2>Your Logs ({logs.length})</h2>
           <select className="select-filter" onChange={(e)=>setAttribute(e.target.value)} name="sort" id="sort">
                <option selected="true" disabled="disabled">Sort by...</option>    
                <option value="date">Date</option>
                <option value="duration">Duration</option>
                <option value="activity">Activity</option>
            </select>
            <div className="logs-container-div">
                {logs ? newList.slice(displayLogs, displayLogs + 4) : null}
            </div>
       </div>
    );
}

export default LogsContainer;
