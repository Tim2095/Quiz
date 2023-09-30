import MainHeader from "../layout/MainHeader";
import UserNameInput from "../layout/UserNameInput";
import classes from "./HomaPage.module.css";

const HomePage = () => {
  return (
    <main className={classes.main}>
      <MainHeader />
      <UserNameInput />
    </main>
  );
};

export default HomePage;
