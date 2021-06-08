import { showLoading, hideLoading } from 'react-redux-loading'

import { getInitialData, saveQuestion } from '../utils/api'

import { receiveUsers, addUsersQuestion } from './users'
import { receiveQuestions, addQuestion } from './questions'


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