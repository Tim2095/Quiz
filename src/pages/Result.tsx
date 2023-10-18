import Button from "../ui/Button";
import classes from "./Result.module.css";
import { useSelector } from "react-redux";

const Result = () => {
  interface RootState {
    quiz: {
      rightAnswers: number;
      wrongAnswers: number;
    };
  }

  const rightAnswers = useSelector(
    (state: RootState) => state.quiz.rightAnswers
  );
  const wrongAnswers = useSelector(
    (state: RootState) => state.quiz.wrongAnswers
  );

  return (
    <div className={classes["result-section"]}>
      <div className={classes["result-section-cnt"]}>
        <div className={classes["result-heading"]}>
          <h1 className={classes.result}>Result</h1>
        </div>
        <div className={classes["result-cnt"]}>
          <div>
            <h2>Right Answers</h2>
            <p className={classes.right}>{rightAnswers}</p>
          </div>
          <div>
            <h2>Wrong Answers</h2>
            <p className={classes.wrong}>{wrongAnswers}</p>
          </div>
        </div>
        <div className={classes["play-btn-cnt"]}>
          <a href="/">
            <Button btnContent="Play Again" className={classes['btn-play-again']} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Result;
