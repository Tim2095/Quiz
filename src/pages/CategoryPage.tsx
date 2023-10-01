import classes from "./Category.module.css";
import { useSelector } from "react-redux";



const CategoryPage = () => {
  interface RootState {
    quiz: {
      userName: string
    }
  }

  // const dispatch = useDispatch()
  const userName = useSelector((state: RootState) => state.quiz.userName)
  console.log(userName)

  return (
    <div className={classes["category-main"]}>
      <div className={classes["category-cnt"]}>
        <div>
          <button>back</button>
        </div>
        <div className={classes.category}>
          <h3>Choose your category</h3>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
