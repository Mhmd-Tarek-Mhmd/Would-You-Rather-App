import React, { Component } from 'react'
import { connect } from 'react-redux'

import QuestionDetails from '../QuestionDetails'


class Question extends Component {
  render() {
    const { questions, users, history } = this.props
		let questionsIds = Object.keys(questions)
    let id = history.location.pathname.substr(11)
  
    return (
			!questionsIds.includes(id)
				?	<p className='not-found'>Question not found</p>
				: <QuestionDetails
						id={id}
						author={users[questions[id].author].name}
						avatar={users[questions[id].author].avatarURL}
						optionOneText={questions[id].optionOne.text}
						optionTwoText={questions[id].optionTwo.text}
					/>
    )
  }
}

function mapStateToProps({ questions, users }) {
	return {
		questions,
		users
	}
}


export default connect(mapStateToProps)(Question)