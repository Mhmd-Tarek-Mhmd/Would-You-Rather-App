import { getInitialData, saveQuestion, saveQuestionAnswer } from '../utils/api'

import { receiveUsers, addUsersQuestion, saveUsersAnswer } from './users'
import { receiveQuestions, addQuestion, saveAnswer } from './questions'


export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
      	dispatch(receiveUsers(users))
      	dispatch(receiveQuestions(questions))
      })
  }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
      .then((question) => {
        dispatch(addQuestion(question))
        dispatch(addUsersQuestion({ authedUser, id: question.id }))
      })
  }
}

export function handleSaveAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    
    return saveQuestionAnswer({ authedUser: authedUser, qid, answer })
      .then(() => {
        dispatch(saveAnswer({ authedUser: authedUser, qid, answer }))
        dispatch(saveUsersAnswer({ authedUser: authedUser, qid, answer }))
      })
  }
}