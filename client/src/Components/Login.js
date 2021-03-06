import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import login from '../Assets/login.jpg'
import '../Styling/Login.css'

function Login({ setCurrentUser }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const  [error, setError] = useState('')

    const handleSubmit = (event) => {
    event.preventDefault()
    fetch('/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    })
        .then(res => {
        if (res.ok) {
            res.json().then(user => {
            setCurrentUser(user)
            window.location.assign("/profile")
            })
        } else {
            res.json().then(errors => {
            setError(errors.error)
            })
        }
        })
    }

    return (
        <div className="authForm">
            <form onSubmit={handleSubmit} className="login-form">
                <h1 style={{marginBottom:"30px", marginTop:"65px", fontSize: "35px"}}>LOGIN</h1>
                <p className="please-log">Please enter your login and password</p>
                <p>
                    <label htmlFor="username" style={{marginRight:"5px"}}/>
                    <input
                        type="text"
                        name="username"
                        className="entry"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        autoComplete="off"/>
                        
                </p>
                <p>
                    <label htmlFor="password" style={{marginRight:"5px"}}/>
                    <input
                    type="password"
                    name=""
                    placeholder="Password"
                    className="entry"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{marginBottom:"8px"}}
                    autoComplete="off"
                    />
                </p>
                <div className="error-login">{error}</div>
                <p><button className="post-button" type="submit" >LOGIN</button></p>
                <p style={{marginTop:"150px"}}> Don't have an account ? 
                <button className="no-account"><Link to="/signup" className="no-account"><strong>Sign Up</strong></Link></button></p>
                <img className="login-image" src={login} alt="login"/>
            </form>
        </div>
    )
}

export default Login