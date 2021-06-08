import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'


class QuestionInfo extends Component {
	toQuestion = (e, id) => {
		e.preventDefault()
		this.props.history.push(`/questions/${id}`)
	}

	render() {
		const { author, avatar, id, optionOneText, optionTwoText } = this.props

		return (
			<Link to={`/questions/${id}`} className='question-info'>
				<div className='quest-card card'>
					<div className='card-top'>
						<h5>{author} asks:</h5>
					</div>

					<div className='card-content'>
						<div className='card-img'>
							<img src={avatar} alt="avatar" />
						</div>

						<span className='separator'></span>

						<div className='quest-info'>
							<h3>Would You Rather</h3>

              <div>..{optionOneText}-{optionTwoText}...</div>
  
							<button className='btn' onClick={(e) => this.toQuestion(e, id)}>View Poll</button>
						</div>
					</div>
				</div>
			</Link>
		)
	}
}


export default withRouter(connect()(QuestionInfo))