import { showLoading, hideLoading } from 'react-redux-loading'

import { saveQuestionAnswer } from '../utils/api'

export const RECEIVE_QUESTION =  'RECEIVE_QUESTION'
export const ADD_QUESTION =  'ADD_QUESTION'
export const SAVE_ANSWER =  'SAVE_ANSWER'


export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTION,
    questions
  }
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function saveAnswer({ authedUser, qid, answer }) {
  return {
    type: SAVE_ANSWER,
    authedUser,
    qid,
    answer
  }
}

export function handleSaveAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    
    dispatch(showLoading())
    return saveQuestionAnswer({ authedUser: authedUser, qid, answer })
      .then(() => dispatch(saveAnswer({ authedUser: authedUser, qid, answer })))
      .finally(() => dispatch(hideLoading()))
  }
}