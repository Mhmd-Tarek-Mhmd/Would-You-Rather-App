import React, { Component } from 'react'
import { connect } from 'react-redux'
import $ from 'jquery'
import Swal from 'sweetalert2'

import { handleAddQuestion } from '../../actions/shared'


class NewQuestion extends Component {
	handleSubmit = () => {
		let optionOneText = $('.option-one-text').val()[0].toUpperCase() + $('.option-one-text').val().slice(1)
		let optionTwoText = $('.option-two-text').val()[0].toUpperCase() + $('.option-two-text').val().slice(1)

		if (optionOneText.toLowerCase() === optionTwoText.toLowerCase()) {
			Swal.fire({
				title: 'Error!',
				text: 'Please enter the two options to continue',
				icon: 'error'
			})
		}

		if (optionOneText !== '' && optionTwoText!== '' && optionOneText.toLowerCase() !== optionTwoText.toLowerCase()) {
			this.props.dispatch(handleAddQuestion(optionOneText, optionTwoText))
			this.props.history.push('/home')
		}
		else {
			Swal.fire({
				title: 'Error!',
				text: 'Please enter the two options to continue',
				icon: 'error'
			})
		}
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