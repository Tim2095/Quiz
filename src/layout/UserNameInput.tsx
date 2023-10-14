import classes from "./UserNameInput.module.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { quizActions } from "../store/quiz-slice";
import Input from "../ui/Input";
import Button from "../ui/Button";

const UserNameInput: React.FC = () => {
  const dispatch = useDispatch();
  const userInput = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleStartClick = (event: React.FormEvent) => {
    event.preventDefault();
    const userName = userInput.current?.value;
    navigate("/category");
    dispatch(quizActions.getUserName(userName));
  };

  return (
    <form className={classes.form}>
      <Input label="Enter Your Name"
        ref={userInput}
        input={{
          type: "text",
          id: "name",
          placeholder: "Enter your name",
          className: classes["name-inp"],
        }}
      />
      <Button btnContent="Start" onClick={handleStartClick} className={classes['start-btn']} />
    </form>
  );
};

export default UserNameInput;
