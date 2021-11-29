import React from 'react';
import {useNavigate } from 'react-router-dom'
import Details from './Details';
import Graphs from './Graphs';
import LogsContainer from './LogsContainer';
import edit from '../../Assets/edit.png'
import '../../Styling/ProfilePage.css'

function ProfilePage({currentUser, logs, profileImage}) {

    const filteredList = logs.filter((log) => log.user.username === currentUser.username)
    const history = useNavigate()
    return (
       <div>
           {currentUser && ProfilePage ? <> 
            <img className="avatar" src={profileImage} alt="avatar"/>
            <img className="edit-avatar-button" src={edit} alt="avatar-edit" onClick={()=> history('/avatar')}></img>
            <h1 className="details">@{currentUser.username}</h1></> : null} 

           <Details currentUser={currentUser}/>
           <Graphs filteredList={filteredList}/>
           <LogsContainer filteredList={filteredList}/>
       </div>
    );
}

export default ProfilePage;
