import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    currentQuestion: 0,
    rightAnswers: 0,
    wrongAnswers: 0
  },
  reducer: {
    getQuestionResult(result) {

    }
  }
})

export const quizActions = quizSlice.actions

export default quizSlice