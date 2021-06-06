import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
  _addUser
} from './_DATA.js'


export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

export function saveQuestion (info) {
  return _saveQuestion(info)
}

export function saveQuestionAnswer (info) {
  return _saveQuestionAnswer(info)
}

export function addUser (info) {
  return _addUser(info)
}