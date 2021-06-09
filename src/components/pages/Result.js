import React, { Component } from 'react'
import { connect } from 'react-redux'

import QuestionResult from '../QuestionResult'


class Result extends Component {
  render() {
    const { questions, users, authedUser, history } = this.props
    let questionsIds = Object.keys(questions)
    let id = history.location.pathname.substr(8)
    
    return (
			questionsIds.includes(id) 
				? <QuestionResult
						id={id}
						author={users[questions[id].author].name}
						avatar={users[questions[id].author].avatarURL}

						optionOneText={questions[id].optionOne.text}
						optionTwoText={questions[id].optionTwo.text}

            optionOneVotes={questions[id].optionOne.votes.length}
            optionTwoVotes={questions[id].optionTwo.votes.length}
    
            authedUserVote={users[authedUser].answers[id]}
					/>
        : <p className='not-found'>Result not found</p>
    )
  }
}

function mapStateToProps({ questions, users, authedUser }) {
	return {
		authedUser,
		questions,
		users
	}
}


export default connect(mapStateToProps)(Result)