import { showLoading, hideLoading } from 'react-redux-loading'

import { getInitialData, saveQuestion, saveQuestionAnswer } from '../utils/api'

import { receiveUsers, addUsersQuestion, saveUsersAnswer } from './users'
import { receiveQuestions, addQuestion, saveAnswer } from './questions'


export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
      	dispatch(receiveUsers(users))
      	dispatch(receiveQuestions(questions))
        dispatch(hideLoading())
      })
  }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
      .then((question) => {
        dispatch(addQuestion(question))
        dispatch(addUsersQuestion({ authedUser, id: question.id }))
      })
      .finally(() => dispatch(hideLoading()))
  }
}

export function handleSaveAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    
    dispatch(showLoading())
    return saveQuestionAnswer({ authedUser: authedUser, qid, answer })
      .then(() => {
        dispatch(saveAnswer({ authedUser: authedUser, qid, answer }))
        dispatch(saveUsersAnswer({ authedUser: authedUser, qid, answer }))
      })
      .finally(() => dispatch(hideLoading()))
  }
}