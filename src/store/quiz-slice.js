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

    getQuestionData(state, action) {
      const questionData = action.payload
      state.currentQuestion++
      const userAnswer = questionData.userAnswer.toLowerCase().replaceAll(' ', '')
      const rightAnswer = questionData.rightAnswer.toLowerCase().replaceAll(' ', '')
      console.log(state.currentQuestion)
    }
  }
})

export const quizActions = quizSlice.actions

export default quizSlice