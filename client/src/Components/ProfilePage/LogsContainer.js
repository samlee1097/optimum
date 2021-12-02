import React, {useState} from 'react';
import LogCard from './LogCard';
import '../../Styling/LogContainer.css'

function LogsContainer({logs}) {

    const [attribute, setAttribute] = useState("date")

    let newList = [...logs].sort((a,b) => {
        if (attribute === 'duration'){
                return b.activity_duration - a.activity_duration
        } else if(attribute === 'date'){
                return a.date - b.date
        } else {
                return a.activity_type.localeCompare(b.activity_type) 
        }
    }).map((log) => <LogCard key={log.id} log={log}/>)

    return (
       <div className="log-controller">
           <h2>Your Logs</h2>
           <select className="select-filter" onChange={(e)=>setAttribute(e.target.value)} name="sort" id="sort">
                <option selected="true" disabled="disabled">Sort by...</option>    
                <option value="date">Date</option>
                <option value="duration">Duration</option>
                <option value="activity">Activity</option>
            </select>
           {logs ? newList : null}
       </div>
    );
}

export default LogsContainer;
