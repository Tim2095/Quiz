import classes from './UserNameInput.module.css'

const UserNameInput = () => {
  return (
    <form className={classes.form}>
      <label htmlFor="text">Enter Your Name</label>
      <input type="text" id="text" />
    </form>
  )
}

export default UserNameInput