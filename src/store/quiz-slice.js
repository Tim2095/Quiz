import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    userName: '',
    currentQuestion: 0,
    rightAnswers: 0,
    wrongAnswers: 0
  },
  reducers: {
    getUserName(state, action) {
      state.userName = action.payload
    },

    getQuestionResult(state, result) {
      
    }
  }
})

export const quizActions = quizSlice.actions

export default quizSlice