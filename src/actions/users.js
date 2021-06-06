import { showLoading, hideLoading } from 'react-redux-loading'

import { addUser } from '../utils/api'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USERS_QUESTION = 'ADD_USERS_QUESTION'
export const SAVE_USERS_ANSWER = 'SAVE_USERS_ANSWER'
export const ADD_NEW_USER = 'ADD_NEW_USER'


export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function addUsersQuestion({ authedUser, id }) {
  return {
    type: ADD_USERS_QUESTION,
    authedUser,
    id
  }
}

export function saveUsersAnswer({ authedUser, qid, answer }) {
  return {
    type: SAVE_USERS_ANSWER,
    authedUser,
    qid,
    answer
  }
}

function addNewUser(user) {
  return {
    type: ADD_NEW_USER,
    user
  }
}

export function handleAddNewUser(name, username, avatar, answers={}, questions=[]) {
  let user = {
    id: username,
    name,
    avatarURL: avatar,
    answers,
    questions
  }

  return (dispatch) => {
    dispatch(showLoading())
    return addUser(user)
      .then(() => dispatch(addNewUser(user)))
      .finally(() => dispatch(hideLoading()))
  }  
}