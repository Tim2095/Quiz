import classes from './UserNameInput.module.css'

const UserNameInput = () => {
  return (
    <form className={classes.form}>
      <label htmlFor="text">Enter Your Name</label>
      <input type="text" id="text" placeholder='Your Name' className={classes['name-inp']} />
      <button className={classes['start-btn']}>Start</button>
    </form>
  )
}

export default UserNameInput