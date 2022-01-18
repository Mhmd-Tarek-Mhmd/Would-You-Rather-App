import {
  GET_QUESTIONS,
  ADD_QUESTION,
  ANSWER_QUESTION,
} from "../actions/questions";

export default function questions(state = {}, action) {
  const { questions, question, qid, id, answer } = action;

  switch (action.type) {
    case GET_QUESTIONS:
      return { ...state, ...questions };

    case ADD_QUESTION:
      return { ...state, [question.id]: question };

    case ANSWER_QUESTION:
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([id]),
          },
        },
      };

    default:
      return state;
  }
}
