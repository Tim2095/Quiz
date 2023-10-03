import classes from './UserNameInput.module.css'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { quizActions } from '../store/quiz-slice'
const UserNameInput: React.FC = () => {
  const dispatch = useDispatch()
  const userInput = useRef<HTMLInputElement>(null)

  const navigate = useNavigate()

  const handleStartClick = (event: React.FormEvent) => {
    event.preventDefault()
    const userName = userInput.current?.value 
    navigate('/category')
    dispatch(quizActions.getUserName(userName))
  }

  return (
    <form className={classes.form} onSubmit={handleStartClick}>
      <label htmlFor="text">Enter Your Name</label>
      <input type="text" ref={userInput} id="text" placeholder='Your Name' className={classes['name-inp']}  />
      <button className={classes['start-btn']}>Start</button>
    </form>
  )
}

export default UserNameInput