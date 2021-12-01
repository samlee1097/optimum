import React from 'react';
import LogCard from './LogCard';

function LogsContainer({logs}) {
    return (
       <div>
           {logs.map((log) => <LogCard log={log}/>)}
       </div>
    );
}

export default LogsContainer;
