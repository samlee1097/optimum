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
    fontFamily: "'Kanit', sans-serif",
    height: "20px"
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
                window.location.reload();
                setCurrentUser(" ");
            }
        })
    }
    return (
       <div id="navbar">
            <NavLink to="/" exact> 
                <a href="/"><img style={{height:"48px"}} onClick={()=>handleClick()} src={logo} alt="logo"/></a>
            </NavLink>

            {currentUser && (
            <div className="logged-in-nav">
                <div className="greeting">
                    <p>logged in as <strong>{currentUser.username}</strong></p>
                </div>
                <a href="/my-profile "><img className="user-icon" src={currentUser.image} alt=" " ></img> </a>
                <NavLink
                    className="login-button"
                    to="/new-post"
                    exact
                    style={linkStyles}
                    > + post 
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
            )}

            {currentUser === null && (
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

                </div>)}
       </div>
    );
}

export default NavBar;
