import { RECEIVE_USERS, ADD_USERS_QUESTION, SAVE_USERS_ANSWER } from '../actions/users'


export default function users(state = {}, action) {
	const { id, authedUser, qid, answer } = action

	switch(action.type) {
		case RECEIVE_USERS :
			return {
				...state,
				...action.users
			}

		case ADD_USERS_QUESTION :
			return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          questions: state[authedUser].questions.concat([id])
        }
			}

		case SAVE_USERS_ANSWER :
			return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
			}
			
		default :
			return state
	}
}