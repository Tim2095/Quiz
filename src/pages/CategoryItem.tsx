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
          btnContent="Toys games"
          className={classes["category-btn"]}
          onClick={() => addCategoryHandler("toysgames")}
        />
      </div>
      <div className={classes["category-items"]}>
        <Button
          btnContent="Music"
          className={classes["category-btn"]}
          onClick={() => addCategoryHandler("music")}
        />
        <Button
          btnContent="Geography"
          className={classes["category-btn"]}
          onClick={() => addCategoryHandler("geography")}
        />
        <Button
          btnContent="Language"
          className={classes["category-btn"]}
          onClick={() => addCategoryHandler("language")}
        />
      </div>
    </>
  );
};

export default CategoryItem;
