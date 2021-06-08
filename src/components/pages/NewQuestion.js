import React, { Component } from 'react'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'

import { handleAddQuestion } from '../../actions/shared'


class NewQuestion extends Component {
	constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.optionOne = React.createRef()
    this.optionTwo = React.createRef()
  }

	handleSubmit = () => {
		let optionOneText = this.optionOne.current.value
		let optionTwoText = this.optionTwo.current.value

		if (optionOneText.toLowerCase() === optionTwoText.toLowerCase()) {
			Swal.fire({
				title: 'Error!',
				text: 'Please enter the two options to continue',
				icon: 'error'
			})
		}

		if (optionOneText !== '' && optionTwoText!== '' && optionOneText.toLowerCase() !== optionTwoText.toLowerCase()) {
			this.props.handleAddQuestion(optionOneText[0].toUpperCase() + optionOneText.slice(1), optionTwoText[0].toUpperCase() + optionTwoText.slice(1))
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
					
					<input type='text' className='option-one-text' placeholder='Enter option one text' ref={this.optionOne} />
					<p>OR</p>
					<input type='text' className='option-two-text' placeholder='Enter option two text' ref={this.optionTwo} />
				
					<input type='submit' className='btn' onClick={this.handleSubmit}/>				
				</div>
			</div>
		)
	}
}


export default connect(null, { handleAddQuestion })(NewQuestion)