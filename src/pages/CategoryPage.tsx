import React, { useEffect, useState } from "react";
import classes from "./Category.module.css";
import { useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";
import CategoryItem from "./CategoryItem";

const CategoryPage = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState<string>("");
  console.log(category)

  const goBackBtnHandler = () => {
    navigate("../");
  };

  const [question, setQuestion] = useState<string>('')

  useEffect(() => {
    const fetchCategory = async (category: string) => {
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
      categories.map((category: any) => {
        setQuestion(category.question)
        console.log(question)
      })
    };
    fetchCategory(category)
  }, [])

 
  interface RootState {
    quiz: {
      userName: string;
    };
  }

  const userName = useSelector((state: RootState) => state.quiz.userName);

  const ToggleCategoryVisibility = () => {
    return <>
      {category ? <h3>Chosen category is {category}</h3> : <h3>Hello {userName} Choose your Category</h3>}
    </>
  }

  const checkCat = (cat: string) => {
    setCategory(cat)
  }
  

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
          {!category ? <CategoryItem selectedCategory={checkCat} /> : <h1>{question}</h1>}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
