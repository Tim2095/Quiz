import classes from './UserNameInput.module.css'
import { useNavigate } from 'react-router-dom'

const UserNameInput = () => {
  const navigate = useNavigate()

  const handleStartClick = () => {
    navigate('/quiz')
  }

  return (
    <form className={classes.form}>
      <label htmlFor="text">Enter Your Name</label>
      <input type="text" id="text" placeholder='Your Name' className={classes['name-inp']} />
      <button className={classes['start-btn']} onClick={handleStartClick}>Start</button>
    </form>
  )
}

export default UserNameInput