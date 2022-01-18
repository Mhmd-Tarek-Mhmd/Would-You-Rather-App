export const GET_USERS = "GET_USERS";
export const ADD_USER = "ADD_USER";
export const SAVE_USER_QUESTION = "SAVE_USER_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

export function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}

export function addNewUser(user) {
  return {
    type: ADD_USER,
    user,
  };
}

export function saveUserQuestion(id, qid) {
  return {
    type: SAVE_USER_QUESTION,
    id,
    qid,
  };
}
