import React from "react";
import classes from "./CategoryItem.module.css";
import Button from "../ui/Button";

const CategoryItem: React.FC<{
  selectedCategory: (category: string) => void;
}> = (props) => {
  const addCategoryHandler = (selectedCategory: string) => {
    const chosenCategory = selectedCategory;
    props.selectedCategory(chosenCategory);
  };

  return (
    <>
      <div className={classes["category-items"]}>
        <Button
          btnContent="General"
          className={classes["category-btn"]}
          onClick={() => addCategoryHandler("general")}
        />
        <Button
          btnContent="Entertainment"
          className={classes["category-btn"]}
          onClick={() => addCategoryHandler("entertainment")}
        />
        <Button
          btnContent="toysgames"
          className={classes["category-btn"]}
          onClick={() => addCategoryHandler("toysgames")}
        />
      </div>
      <div className={classes["category-items"]}>
        <Button
          btnContent="music"
          className={classes["category-btn"]}
          onClick={() => addCategoryHandler("music")}
        />
        <Button
          btnContent="geography"
          className={classes["category-btn"]}
          onClick={() => addCategoryHandler("geography")}
        />
        <Button
          btnContent="Science nature"
          className={classes["category-btn"]}
          onClick={() => addCategoryHandler("sciencenature")}
        />
      </div>
    </>
  );
};

export default CategoryItem;
