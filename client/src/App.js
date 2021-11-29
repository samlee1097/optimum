import React, {useState, Fragment, useEffect} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './Components/NavBar';
import HomePage from "./Components/HomePage/HomePage";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Loading from "./Components/Loading";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import NewLog from "./Components/HomePage/NewLog";
import Avatar from "./Components/Avatar/Avatar";
import './Styling/App.css'

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [logs, setLogs] = useState([])
 
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

  useEffect(()=> {
    fetch("/logs")
    .then((r) => r.json())
    .then((all_logs) => setLogs(all_logs))
  }, [])
  
    return (
      <>
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
        <Router>
          <Fragment>
           <NavBar  currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            <Routes>
              <Route exact path="/signup" element={<Signup setCurrentUser= {setCurrentUser}/>}/>
              <Route exact path="/profile" element={<ProfilePage logs={logs} currentUser={currentUser} />}/>
              <Route exact path="/login" element={<Login setCurrentUser= {setCurrentUser}/>}/>
              <Route exact path="/new-log" element={<NewLog currentUser={currentUser} setCurrentUser= {setCurrentUser}/>}/>
              {currentUser ? <Route exact path="/avatar" element={<Avatar currentUser={currentUser}/>}/> : <Route exact path="/loading" element={<Loading/>}/>}
              <Route exact path="/" element={<HomePage currentUser={currentUser} setCurrentUser= {setCurrentUser}/>}/>
            </Routes>
          </Fragment>
        </Router>
    </>
    );
}

export default App;
