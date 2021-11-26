import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../Styling/Signup.css'

function Signup({ setCurrentUser }) {
  const history = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [image, setImage] = useState('')
  const  [error, setError] = useState('')
  
  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
        image
      })
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            setCurrentUser(user)
            history('/')
          })
        } else {
          res.json().then(errors => {
            setError(errors.errors)
          })
        }
      })
  }
  return (
    <>
    <div className="authForm">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1 style={{marginBottom:"30px", marginTop:"50px", fontSize: "40px"}}>SIGNUP</h1>
            <p className="please-log">Please enter your login and password</p>

        <p>
          <label 
            htmlFor="username"
            style={{marginRight:"5px"}}
          >
            Username
          </label>
          <input
            type="text"
            className="entry"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </p>
        <p>
          <label 
            htmlFor="password"
            style={{marginRight:"5px"}}
          >
            Password
          </label>
          <input
            type="password"
            className="entry"
            placeholder="Password"
            name=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p>
          <label 
            htmlFor="image"
            style={{marginRight:"35px"}}
          >
            Image
          </label>
          <input
            type="text"
            className="entry"
            name=""
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </p>
        
        <div className="error">{error}</div>
        <p><button className="post-button" type="submit">SIGNUP</button></p>
        <p style={{marginTop:"89px"}}> Already have an account ? 
        <button className="no-account"><Link to="/login" className="no-account"><strong>Log In</strong></Link></button></p>
      </form>
    </div>
    
    </>
  )
}



export default Signup