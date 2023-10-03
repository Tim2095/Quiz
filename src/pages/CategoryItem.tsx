import React from "react";
import classes from './CategoryItem.module.css'

const CategoryItem: React.FC<{selectedCategory: (category: string) => void}> = (props) => {
  
  const addCategoryHandler = (selectedCategory: string) => {
    const chosenCategory = selectedCategory;
    props.selectedCategory(chosenCategory)
  };

  return (
    <>
      <div className={classes["category-items"]}>
        <button
          onClick={() => addCategoryHandler("general")}
          className={classes["category-btn"]}
        >
          General
        </button>
        <button
          onClick={() => addCategoryHandler("entertainment")}
          className={classes["category-btn"]}
        >
          Entertainment
        </button>
        <button
          onClick={() => addCategoryHandler("toysgames")}
          className={classes["category-btn"]}
        >
          Toys games
        </button>
      </div>
      <div className={classes["category-items"]}>
        <button
          onClick={() => addCategoryHandler("music")}
          className={classes["category-btn"]}
        >
          Music
        </button>
        <button
          onClick={() => addCategoryHandler("geography")}
          className={classes["category-btn"]}
        >
          Geography
        </button>
        <button
          onClick={() => addCategoryHandler("sciencenature")}
          className={classes["category-btn"]}
        >
          Science nature
        </button>
      </div>
    </>
  );
};

export default CategoryItem;
