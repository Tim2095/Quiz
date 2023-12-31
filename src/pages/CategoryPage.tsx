import React, { useEffect, useState } from "react";
import classes from "./CategoryPage.module.css";
import { useSelector, useDispatch } from "react-redux";
import { quizActions } from "../store/quiz-slice";
import { useNavigate } from "react-router-dom";
import CategoryItem from "./CategoryItem";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Spinner from "../ui/Spinner";

const CategoryPage = () => {
  interface RootState {
    quiz: {
      userName: string;
      currentQuestion: number;
    };
  }

  const questionCounter = useSelector((state: RootState) => state.quiz.currentQuestion );
  

  const userName = useSelector((state: RootState) => state.quiz.userName);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [category, setCategory] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [answerIsValid, setAnswerIsValid] = useState<boolean>(true);
  const [questionData, setQuestionData] = useState<
    {
      question: string;
      answer: string;
    }[]
  >([]);

  const [userAnswer, setUserAnswer] = useState<string>("");

  const goBackBtnHandler = () => {
    navigate("../");
  };

  const [question, setQuestion] = useState<string>("");

  useEffect(() => {
    if(questionCounter > 3) navigate('/result')

    const fetchCategory = async (category: string) => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.api-ninjas.com/v1/trivia?category=${category}`,
          {
            method: "GET",
            headers: {
              "X-Api-Key": "3wwFSMii/FYDHZNimyzw1A==uILn0RI9vfPalTwD",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Error! Status: " + response.status);
        }
        const categories = await response.json();
        console.log(categories);
        setQuestionData(categories);
        categories.map((category: { question: string }) => {
          setQuestion(category.question);
          return undefined
        });
        setIsLoading(false);
      } catch (Err) {
        console.log("Error " + Err);
        throw Err;
      }
    };
    if (category) {
      fetchCategory(category);
    } else {
      return;
    }
  }, [category, userAnswer, navigate, questionCounter]);

  const ToggleCategoryVisibility = () => {
    return (
      <>
        {!category ? (
          <h3 className={classes['category-heading']}>Hello {userName} Choose your Category</h3>
        ) : (
          <div>
            <h3 className={classes.counter}>{questionCounter}/3</h3>

            {questionCounter <= 3 ? <h3 className={classes['category-heading']}>Chosen category is {category}</h3> : <h3>Result: </h3>}          
          </div>
        )}
      </>
    );
  };

  const checkCat = (cat: string) => {
    setCategory(cat);
  };

  const submitAnswerHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const userInput = form.elements.namedItem("user-inp") as HTMLInputElement;

    if (userInput.value === "") {
      setAnswerIsValid(false);
      return;
    } else {
      setAnswerIsValid(true);
    }

    if (userAnswer === userInput.value) {
      setUserAnswer("");
    } else {
      setUserAnswer(userInput.value);
    }

    let questionAnswer = {}; // You can define the structure of this object as needed.
    questionData.map((qus) => {
      questionAnswer = {
        question: qus.question,
        rightAnswer: qus.answer,
        userAnswer: userInput.value,
      };
      return undefined
    });

    dispatch(quizActions.getQuestionData(questionAnswer));
    // setCategory('')
    userInput.value = "";
  };

  return (
    <div className={classes["category-main"]}>
      <div className={classes["category-cnt"]}>
        <div className={classes['back-btn-cnt']}>
          <button className={classes["back-btn"]} onClick={goBackBtnHandler}>
            Go back
          </button>
        </div>
        <div className={classes.category}>
          <ToggleCategoryVisibility />
          {!category ? (
            <CategoryItem selectedCategory={checkCat} />
          ) : (
            <>
              {questionCounter <= 3 && <div className={classes["question-cnt"]}>
                {isLoading ? (
                  <Spinner />
                ) : (
                  <h2 className={classes.question}>{question}</h2>
                )}
              </div>}
              <form onSubmit={submitAnswerHandler} className={classes.answer}>
                <Input
                  input={{
                    type: "text",
                    id: "answer",
                    placeholder: "Type your answer",
                    className: `${classes["answer-inp"]} ${
                      !answerIsValid ? classes.invalid : ""
                    }`,
                    name: "user-inp",
                  }}
                />
                <Button btnContent="Submit" className={classes["answer-btn"]} />
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
