import MainHeader from "../layout/MainHeader";
import UserNameInput from "../layout/UserNameInput";
import classes from "./HomaPage.module.css";
import { useSelector } from "react-redux";

interface QUIZ {
  quiz: {
    userName: string
  }
}

const HomePage = () => {
  const quizUserName = useSelector((state: QUIZ) => state.quiz.userName)
  console.log(quizUserName)
  return (
    <main className={classes.main}>
      <MainHeader />
      <UserNameInput />
    </main>
  );
};

export default HomePage;
