import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./quiz-slice";


const store = configureStore({
  reducer: {quiz: quizSlice.reducer}
})

export default store