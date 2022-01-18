import {
  GET_USERS,
  ADD_USER,
  SAVE_USER_QUESTION,
  ANSWER_QUESTION,
} from "../actions/users";

export default function users(state = {}, action) {
  const { users, user, id, qid } = action;

  switch (action.type) {
    case GET_USERS:
      return { ...state, ...users };

    case ADD_USER:
      return { ...state, [user.id]: user };

    case SAVE_USER_QUESTION:
      return {
        ...state,
        [id]: {
          ...state[id],
          questions: [...state[id].questions, qid],
        },
      };

    case ANSWER_QUESTION:
      return {
        ...state,
        [id]: {
          ...state[id],
          answers: {
            ...state[id].answers,
            [qid]: action.answer,
          },
        },
      };

    default:
      return state;
  }
}
