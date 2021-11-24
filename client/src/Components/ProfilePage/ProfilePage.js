import React from 'react';
import Details from './Details';
import Graphs from './Graphs';
import LogsContainer from './LogsContainer';

function ProfilePage() {
    return (
       <div>
           <Details/>
           <Graphs/>
           <LogsContainer/>
       </div>
    );
}

export default ProfilePage;
