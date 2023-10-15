import React, { useEffect, useState, useRef } from "react";
import classes from "./CategoryPage.module.css";
import { useSelector, useDispatch } from "react-redux";
import { quizActions } from "../store/quiz-slice";
import { useNavigate } from "react-router-dom";
import CategoryItem from "./CategoryItem";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Spinner from "../ui/Spinner";

const CategoryPage = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate();
  const [category, setCategory] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [questionData, setQuestionData] = useState<{
    question: string,
    answer: string;
  }[]>([]);

  const userAnswer = useRef<HTMLInputElement>(null);

  const goBackBtnHandler = () => {
    navigate("../");
  };

  const [question, setQuestion] = useState<string>("");

  useEffect(() => {
    const fetchCategory = async (category: string) => {
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
      const categories = await response.json();
      setQuestionData(categories);
      categories.map((category: { question: string }) => {
        setQuestion(category.question);
      });
      setIsLoading(false);
    };
    if (category) {
      fetchCategory(category);
    } else {
      return;
    }
  }, [category]);

  interface RootState {
    quiz: {
      userName: string;
    };
  }

  const userName = useSelector((state: RootState) => state.quiz.userName);

  const ToggleCategoryVisibility = () => {
    return (
      <>
        {!category ? (
          <h3>Hello {userName} Choose your Category</h3>
        ) : (
          <h3>Chosen category is {category}</h3>
        )}
      </>
    );
  };

  const checkCat = (cat: string) => {
    setCategory(cat);
  };
  
  const submitAnswerHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let questionAnswer = {}; // You can define the structure of this object as needed.
    questionData.map(qus => {
      questionAnswer = {
        question: qus.question,
        rightAnswer: qus.answer,
        userAnswer: userAnswer.current?.value
      }
    })

    dispatch(quizActions.getQuestionData(questionAnswer))
    setCategory('')
  };

  return (
    <div className={classes["category-main"]}>
      <div className={classes["category-cnt"]}>
        <div>
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
              <div className={classes["question-cnt"]}>
                {isLoading ? (
                  <Spinner />
                ) : (
                  <h2 className={classes.question}>{question}</h2>
                )}
              </div>
              <form onSubmit={submitAnswerHandler} className={classes.answer}>
                <Input
                  ref={userAnswer}
                  input={{
                    type: "text",
                    id: "answer",
                    placeholder: "Type your answer",
                    className: classes["answer-inp"],
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
