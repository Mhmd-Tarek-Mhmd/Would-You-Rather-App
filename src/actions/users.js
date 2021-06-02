export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USERS_QUESTION = 'ADD_USERS_QUESTION'
export const SAVE_USERS_ANSWER = 'SAVE_USERS_ANSWER'


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