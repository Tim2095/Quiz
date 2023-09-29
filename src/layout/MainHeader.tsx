import QuizLogo from '../assets/img/QUIZ.png'
import Khelo from '../assets/img/Khelo.png'
import classes from './MainLayout.module.css'

const MainHeader = () => {
  return (
    <header>
      <nav className={classes.nav}>
        <img src={QuizLogo} alt="Logo" />
        <img src={Khelo} alt='Logo' />
      </nav>
    </header>
  )
}

export default MainHeader