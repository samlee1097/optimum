import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../Styling/Signup.css'

function Signup({ setCurrentUser }) {
  
  const history = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [age, setAge] = useState(0)
  const [gender, setGender] = useState("")
  const [weight, setWeight] = useState(0)
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
        age,
        weight,
        gender
      })
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            setCurrentUser(user)
            history('/avatar')
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
            className="signup-entry"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </p>
        <p>
          <label 
            htmlFor="password"
            style={{marginRight:"10px"}}
          >
            Password
          </label>
          <input
            type="password"
            className="signup-entry"
            placeholder="Password"
            name=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p>
          <label 
            htmlFor="age"
            style={{marginLeft:"-155px"}}
          >
            Age
          </label>
          <input
            type="number"
            min="0"
            max="99"
            className="signup-entry-age"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </p>
        
        <p style={{position:"relative", top:"-68px", left:"310px", width: "150px"}}>
          <label 
            htmlFor="weight"
          >
            Weight
          </label>
          <input
            type="number"
            min="0"
            max="999"
            className="signup-entry-weight"
            name="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </p>

        <p style={{marginTop:"-50px"}}>
          <input
            type="radio"
            label="Male"
            className="signup-entry-gender"
            name="gender"
            value="Male"
            onChange={(e) => setGender(e.target.value)}
          />
          <input
            type="radio"
            label="Female"
            className="signup-entry-gender"
            name="gender"
            value="Female"
            onChange={(e) => setGender(e.target.value)}
          />
          <input
            type="radio"
            label="Other"
            className="signup-entry-gender"
            name="gender"
            value="Other"
            onChange={(e) => setGender(e.target.value)}
          />
        </p>

        <div className="error">{error}</div>
        <p><button className="post-button" type="submit">SIGNUP</button></p>
        <p style={{marginTop:"49px"}}> Already have an account ? 
        <button className="no-account"><Link to="/login" className="no-account"><strong>Log In</strong></Link></button></p>
      </form>
    </div>
    
    </>
  )
}



export default Signup