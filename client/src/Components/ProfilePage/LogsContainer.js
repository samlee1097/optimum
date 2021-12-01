import React from 'react';
import LogCard from './LogCard';

function LogsContainer({logs}) {
    return (
       <div>
           {logs ? logs.map((log) => <LogCard key={log.id} log={log}/>) : null}
       </div>
    );
}

export default LogsContainer;
