import React, {useState, Fragment} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './Components/NavBar';
import HomePage from "./Components/HomePage/HomePage";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import './Styling/App.css'

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  
    return (
      <>
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
        <Router>
          <Fragment>
           <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            <Routes>
              <Route exact path="/signup" element={<Signup setCurrentUser= {setCurrentUser}/>}/>
              <Route exact path="/profile" element={<ProfilePage/>}/>
              <Route exact path="/signup" element={<Signup setCurrentUser= {setCurrentUser}/>}/>
              <Route exact path="/login" element={<Login setCurrentUser= {setCurrentUser}/>}/>
              <Route exact path="/" element={<HomePage setCurrentUser= {setCurrentUser}/>}/>
            </Routes>
          </Fragment>
        </Router>
    </>
    );
}

export default App;
