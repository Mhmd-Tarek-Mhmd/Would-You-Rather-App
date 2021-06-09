import React, { Component } from 'react'
import { connect } from 'react-redux'
import $ from 'jquery'

import QuestionInfo from '../QuestionInfo'
import QuestionResult from '../QuestionResult'


class Home extends Component {
	handleUnansweredClick = () => {
		$('.answered').removeClass('toggle-show')
		$('.unanswered').addClass('toggle-show')

		$('.tabs span').last().removeClass('active')
		$('.tabs span').first().addClass('active')
	}

	handleAnsweredClick = () => {
		$('.unanswered').removeClass('toggle-show')
		$('.answered').addClass('toggle-show')

		$('.tabs span').first().removeClass('active')
		$('.tabs span').last().addClass('active')
	}


	render() {	
		const { questions, questionIds, users, authedUser, authedUserAnswers } = this.props
		let unansweredIds = questionIds.filter(id => !authedUserAnswers.includes(id))
			
		return (
			<div className='quest-list'>
				<div className='tabs'>
					<span className='active' onClick={this.handleUnansweredClick}>Unanswered Questions</span>
					<span className='separator'></span>
					<span onClick={this.handleAnsweredClick}>Answered Questions</span>
				</div>

				<div className='unanswered toggle-show'>
					{unansweredIds.length === 0 && (<p>No questions found. What about making a new one?!</p>)}
					{unansweredIds.map(id => 
						<QuestionInfo
							key={id}
							id={id}

							author={users[questions[id].author].name}
							avatar={users[questions[id].author].avatarURL}
							
							optionOneText={questions[id].optionOne.text}
							optionTwoText={questions[id].optionTwo.text}
						/>
					)}		
				</div>

				<div className='answered'>
					{authedUserAnswers.length === 0 && (<p>No results found. What about answering a question?!</p>)}
					{authedUserAnswers.map(id => 
						<QuestionResult
							key={id}
							author={users[questions[id].author].name}
							avatar={users[questions[id].author].avatarURL}

							optionOneText={questions[id].optionOne.text}
							optionTwoText={questions[id].optionTwo.text}

							optionOneVotes={questions[id].optionOne.votes.length}
							optionTwoVotes={questions[id].optionTwo.votes.length}

							authedUserVote={users[authedUser].answers[id]}
							
						/>
					)}	
				</div>
			</div>
		)
	}
}

function mapStateToProps({ questions, users, authedUser }) {
	return {
		authedUser,
		questions,
		users,
		questionIds: Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp),
		authedUserAnswers: Object.keys(users[authedUser].answers)
	}
}


export default connect(mapStateToProps)(Home)