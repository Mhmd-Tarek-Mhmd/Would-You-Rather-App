import { RECEIVE_USERS, ADD_USERS_QUESTION, ADD_NEW_USER } from '../actions/users'
import { SAVE_ANSWER } from '../actions/questions'


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

		case SAVE_ANSWER :
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

		case ADD_NEW_USER :
			return {
				...state,
				[action.user.id]: action.user
			}
			
		default :
			return state
	}
}