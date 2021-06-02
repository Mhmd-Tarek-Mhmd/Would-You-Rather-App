import React, { Component } from 'react'
import { connect } from 'react-redux'
import $ from 'jquery'

import { handleAddQuestion } from '../../actions/shared'


class NewQuestion extends Component {
	handleSubmit = () => {
		let optionOneText = $('.option-one-text').val()
		let optionTwoText = $('.option-two-text').val()

		this.props.dispatch(handleAddQuestion(optionOneText, optionTwoText))
		this.props.history.push('/home')
	}

	render() {
		return (
			<div className='new-question-card card'>
				<div className='card-top'>
					<h2>Create New Question</h2>
				</div>

				<div className='card-content'>
					<p>Complete the question:</p>
			
					<h3>Would you rather ...</h3>
					
					<input type='text' className='option-one-text' placeholder='Enter option one text' />
					<p>OR</p>
					<input type='text' className='option-two-text' placeholder='Enter option two text' />
				
					<input type='submit' className='btn' onClick={this.handleSubmit}/>				
				</div>
			</div>
		)
	}
}


export default connect()(NewQuestion)