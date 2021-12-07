import React, {useState} from 'react';
import LogCard from './LogCard';
import '../../Styling/LogContainer.css'

function LogsContainer({logs}) {

    const [attribute, setAttribute] = useState("date");
    const [displayDetail, setDisplayDetail] = useState(null)
    const [displayLogs, setDisplayLogs] = useState(0)
    const [page, setPage] = useState(1)

    let newList = [...logs].sort((a,b) => {
        if (attribute === 'duration'){
                return b.activity_duration - a.activity_duration
        } else if(attribute === 'date'){
                return new Date(a.date) - new Date(b.date)
        } else {
                return a.activity_type.localeCompare(b.activity_type) 
        }
    }).map((log) => <LogCard setDisplayDetail={setDisplayDetail} key={log.id} log={log}/>)

    function start(){
        setDisplayLogs(0)
        setPage(1)
    }

    function handleLeft(){
        if (displayLogs - 4 < 0){
            setDisplayLogs(0)
            setPage(1)
        } else{
            setDisplayLogs(displayLogs - 4)
            setPage(page - 1)
        }
    }

    function handleRight(){
        if (displayLogs + 4 >= logs.length){
            setDisplayLogs(Math.floor(logs.length / 4) * 4)
            setPage(Math.ceil(logs.length / 4))
        } else{
            setDisplayLogs(displayLogs + 4)
            setPage(page + 1)
        }
    }

    function end(){
        setDisplayLogs(Math.floor(logs.length / 4) * 4)
        setPage(Math.ceil(logs.length / 4))
    }

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
            <div className="next-page-logs">
                <div className="left-page-div">
                    <button onClick={start}>&#60;&#60;</button>
                    <button onClick={handleLeft}>&#60;</button>
                </div>
                <p className="page-number">{page}</p>
                <div className="right-page-div">
                    <button onClick={handleRight}>&#62;</button>
                    <button onClick={end}>&#62;&#62;</button>
                </div>
            <div className="activity-details">
                {displayDetail ? <div className="display-details-active">
                    <h1>{displayDetail.activity_type}</h1>
                    <p className="date-details">{displayDetail.date} | {displayDetail.activity_duration} min</p>
                    <p className="happiness-details">Happiness: <br/><strong>{displayDetail.happiness}/5</strong></p>
                    <p className="weight-details">Weight: <br/><strong>{displayDetail.weight}lbs</strong></p>
                    {displayDetail.notes !=="" ? <p className="notes-details">Note: {displayDetail.notes}</p>
                    
                    : null} </div> :
                    <div className="display-empty"></div>}
            </div>
            </div>
       </div>
    );
}

export default LogsContainer;
