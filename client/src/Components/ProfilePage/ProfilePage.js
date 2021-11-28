import React from 'react';
import Details from './Details';
import Graphs from './Graphs';
import LogsContainer from './LogsContainer';
import {useEffect} from 'react'

function ProfilePage({currentUser, logs}) {

    const filteredList = logs.filter((log) => log.user.username === currentUser.username)

    return (
       <div>
           {currentUser ? <><img style={{width: "100%", maxHeight: "600px", objectFit:"cover", borderBottom:"10px solid white", opacity: "0.8"}} src={currentUser.image} alt="image"/>
            <img style={{display:"block", marginLeft:"auto", marginRight:"auto", position: "relative", marginTop:"-125px",width: "250px", height: "250px", borderRadius: "50%", border:"10px solid white", objectFit:"cover"}} src={currentUser.image} alt="image"/>
            <h1 style={{display:"block", marginLeft:"auto", marginRight:"auto", textAlign: "center"}}>@{currentUser.username}</h1></>: null} 
           <Details/>
           <Graphs/>
           <LogsContainer/>
       </div>
    );
}

export default ProfilePage;
