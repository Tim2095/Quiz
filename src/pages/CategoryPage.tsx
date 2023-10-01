import React from "react";
import classes from "./Category.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



const CategoryPage: React.FC = () => {
  const navigate = useNavigate()  
  
  
  const goBackBtnHandler = () => {
    navigate('../')
  }

  interface RootState {
    quiz: {
      userName: string
    }
  }

  const userName = useSelector((state: RootState) => state.quiz.userName)
  console.log(userName)

  return (
    <div className={classes["category-main"]}>
      <div className={classes["category-cnt"]}>
        <div>
          <button className={classes['back-btn']} onClick={goBackBtnHandler}>Go back</button>
        </div>
        <div className={classes.category}>
          <h3>Choose your category</h3>
          <div className={classes['category-items']}>
            <button className={classes['category-btn']}>General</button>
            <button className={classes['category-btn']}>Entertainment</button>
            <button className={classes['category-btn']}>Toys games</button>
          </div>
          <div className={classes['category-items']}>
            <button className={classes['category-btn']}>Music</button>
            <button className={classes['category-btn']}>Geography</button>
            <button className={classes['category-btn']}>Science nature</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
