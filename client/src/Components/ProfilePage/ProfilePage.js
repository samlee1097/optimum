import React, {useEffect} from 'react';
import {useNavigate } from 'react-router-dom'
import Details from './Details';
import Graphs from './Graphs';
import LogsContainer from './LogsContainer';
import edit from '../../Assets/edit.png'
import '../../Styling/ProfilePage.css'

function ProfilePage({ setCurrentUser, currentUser, logs}) {
    
    useEffect(() => {
    fetch('/me', {
        credentials: 'include'
    })
        .then(res => {
        if (res.ok) {
            res.json().then((user) => {
            setCurrentUser(user)
            })
        }
        })
    }, [])

    const filteredList = logs.filter((log) => log.user.username === currentUser.username)
    const history = useNavigate()
    return (
       <div>
           {currentUser && (<>
            {currentUser.avatar !== null ? <img className="avatar" src={currentUser.avatar.image} alt="avatar"/> : null }
            <img className="edit-avatar-button" src={edit} alt="avatar-edit" onClick={()=> history('/avatar')}></img>
            <h1 className="details">@{currentUser.username}</h1></>) }
           <Details currentUser={currentUser}/>
           <Graphs filteredList={filteredList}/>
           <LogsContainer filteredList={filteredList}/>
       </div>
    );
}

export default ProfilePage;
