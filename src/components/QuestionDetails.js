import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import $ from 'jquery'

import { handleSaveAnswer } from '../actions/shared'


class QuestionDetails extends Component {
	toResult = (e, id) => {
		let option = $('input[type="radio"]:checked').attr('value');
		e.preventDefault();

		this.props.dispatch(handleSaveAnswer(id, option))
		this.props.history.push(`/result/${id}`)
	}

	render() {
		const { author, avatar, optionOneText, optionTwoText, id } = this.props

		return (
			<div className='quest-card quest-detail card'>
				<div className='card-top'>
					<h5>{author} asks:</h5>
				</div>

				<div className='card-content'>
					<div className='card-img'>
						<img src={avatar} alt="avatar" />
					</div>

					<span className='separator'></span>

					<div className='quest-options'>
						<h3>Would You Rather ...</h3>

						<div className='opt'>
							<input type='radio' id='opt1' name='option' defaultChecked value='optionOne' />
							<label htmlFor='opt1'>{optionOneText}</label>
						</div>

						<div className='opt'>
							<input type='radio' id='opt2' name='option' value='optionTwo' />
							<label htmlFor='opt2'>{optionTwoText}</label>
						</div>
					
						<input type='submit' className='btn' onClick={(e) => this.toResult(e, id)} />
					</div>
				</div>
			</div>
		)
	}
}


export default withRouter(connect()(QuestionDetails))