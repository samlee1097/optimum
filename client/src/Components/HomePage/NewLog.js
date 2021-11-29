import {useState} from 'react'
import { useNavigate} from 'react-router-dom'
import Calendar from 'react-calendar';
import '../../Styling/NewLog.css'

function NewLog({addNewLog, currentUser}){

  const history = useNavigate();
  const [showCalendar, setShowCalendar]= useState(false)
  const [activityType, setActivityType] = useState('')
  const [notes, setNotes] = useState('')
  const [duration, setDuration] = useState(null)
  const [date, setDate] = useState('')
  const [dateEntry, setDateEntry] = useState('')
  const [happiness, setHappiness] = useState(null)
  const [weight, setWeight] = useState(null)
  const [error, setError] = useState('')

  const newLog = {
    user_id: currentUser?.id,
    activityType,
    duration,
    dateEntry,
    weight,
    happiness,
    notes,
    likes: 0
  };

  function handleDate(date){
    const newDate = String(date).split(" ").slice(1,4).join(' ')
    setDate(date)
    setDateEntry(newDate)
    setShowCalendar(false)

  }

  const configObj = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newLog),
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    fetch("/posts", configObj)
    .then(res => {
      if (res.ok) {
          res.json().then(post => {
          addNewLog(post);
          history("/")
          })
      } else {
          res.json().then(errors => {
          setError(errors.errors)
          })
      }
      })
  };

  return (
    <div className="authForm">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1 style={{marginBottom:"30px", marginTop:"50px", fontSize: "40px"}}>FITNESS TRACKER</h1>
            <p className="please-log">Please enter in the details of your activity</p>

        <p>
          <label 
            htmlFor="activity_type"
            style={{marginRight:"5px"}}
          >
            Activity
          </label>
          <input
            type="text"
            className="signup-entry"
            name="activity_type"
            placeholder="Activity"
            value={activityType}
            onChange={(e) => setActivityType(e.target.value)}
          />
        </p>

        <p>
          <label 
            htmlFor="duration"
            style={{marginLeft:"-155px"}}
          >
            Duration
          </label>
          <input
            type="number"
            min="0"
            max="99"
            className="signup-entry-age"
            name="Duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
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
        <p className="date">Date
          <input
            type="text"
            className="signup-entry-date"
            name="date"
            value={dateEntry}
            onChange={(e) => setDate(e.target.value)}
          />
        </p>
          { showCalendar ? <> <Calendar
            className="calendar"
            onChange={(date)=>handleDate(date)}
            value={date}
          /> <p className="exit-calendar" onClick={()=>setShowCalendar(false)}>✖️</p> </> : <p className="calendar-show" onClick={()=>setShowCalendar(true)}>📅</p>}

        <p style={{marginTop:"-50px"}}> Happiness
          <input
            type="radio"
            label="😣"
            className="signup-entry-happy1"
            name="gender"
            value="1"
            onChange={(e) => setHappiness(e.target.value)}
          />
          <input
            type="radio"
            label="😟"
            className="signup-entry-happy2"
            name="gender"
            value= "2"
            onChange={(e) => setHappiness(e.target.value)}
          />
          <input
            type="radio"
            label="😐"
            className="signup-entry-happy3"
            name="gender"
            value= "3"
            onChange={(e) => setHappiness(e.target.value)}
          />
          <input
            type="radio"
            label="🙂"
            className="signup-entry-happy4"
            name="gender"
            value="4"
            onChange={(e) => setHappiness(e.target.value)}
          />
          <input
            type="radio"
            label="😁"
            className="signup-entry-happy5"
            name="gender"
            value="5"
            onChange={(e) => setHappiness(e.target.value)}
          />
        </p>

        <p>
          <label 
            htmlFor="password"
            style={{marginRight:"10px"}}
          >
          Notes
          </label>
          <input
            type="text"
            className="signup-entry"
            placeholder="Notes"
            name=""
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </p>

        <div className="error">{error}</div>
        <p><button className="post-button" type="submit">SUBMIT</button></p>
      </form>
  </div>
  );

}

export default NewLog