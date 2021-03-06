import React from 'react';
import { NavLink } from "react-router-dom";
import {useNavigate } from 'react-router-dom'
import logo from '../Assets/logo.png'
import '../Styling/NavBar.css'

const linkStyles = {
    display: "inline-block",
    width: "fit-content",
    padding: "2px 12px 7px 12px",
    margin: "6px",
    background: "white",
    textDecoration: "none",
    color: "black",
    borderRadius: "20px",
    textAlign: "center",
    border: "transparent",
    height: "fit-content",
};

function NavBar({setCurrentUser, currentUser}) {

    const history = useNavigate()

    function handleClick() {
        history("/")
        window.location.reload();
    }

    function logout (){
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setCurrentUser(null);
                window.location.assign('/')
            }
        })
    }
    return (
       <div id="navbar">
            <NavLink to="/" exact> 
                <a href="/"><img style={{height:"55px"}} onClick={()=>handleClick()} src={logo} alt="logo"/></a>
            </NavLink>

            {currentUser ? (
                
            <div className="logged-in-nav">
                <div className="greeting">
                <p className="logged">logged in as <strong>{currentUser.username}</strong></p> 
                </div>
                  <a href="/profile "><img className="nav-icon" src={currentUser.avatar !== null ? currentUser?.avatar?.image : null} alt="icon" ></img></a>
                <NavLink
                    className="login-button"
                    to="/new-log"
                    exact
                    style={linkStyles}
                    > + log 
                </NavLink>

                <NavLink
                    className="login-button"
                    onClick={logout}
                    to="/"
                    exact
                    style={linkStyles}
                    > logout
                </NavLink>
            </div>
            ): null}

            {currentUser  !== null ? (
                <div className="buttons">
                    <NavLink
                        className="login-button"
                        to="/login"
                        exact
                        style={linkStyles}
                        > Login 
                    </NavLink>

                    <NavLink 
                        className="signup-button"
                        to="/signup"
                        exact
                        style={linkStyles}
                        > Signup 
                    </NavLink> 

                </div>) : null}
       </div>
    );
}

export default NavBar;