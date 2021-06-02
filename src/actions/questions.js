export const RECEIVE_QUESTION =  'RECEIVE_QUESTION'
export const ADD_QUESTION =  'ADD_QUESTION'
export const SAVE_QUESTION_ANSWER =  'SAVE_QUESTION_ANSWER'


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
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer
  }
}