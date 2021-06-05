import React, { Component } from 'react'
import { connect } from 'react-redux'


class LeaderBoard extends Component {
	render() {
		const { users, userIds } = this.props
		

		return (
			userIds.map(id =>
				<div className='leaderboard-card card' key={id}>
					<div className='card-img'>
						<img src={users[id].avatarURL} alt='avatar' />
					</div>

					<span className='separator'></span>

					<div className='card-content'>
						<h2>{users[id].name}</h2>

						<div className='answered-questions'>
							<span>Answered questions</span> <span>{Object.keys(users[id].answers).length}</span>
						</div>

						<hr />

						<div className='created-questions'>
							<span>Created questions</span> <span>{users[id].questions.length}</span>
						</div>

					</div>

					<span className='separator'></span>

					<div className='score'>
						<div>Score</div>
						<div><span>{(Object.keys(users[id].answers).length) + (users[id].questions.length)}</span></div>
					</div>
				</div>
			)
		)
	}
}

function mapStateToProps({ users }) {
	let userIds = Object.keys(users).sort((a, b) => (users[b].questions.length + Object.keys(users[b].answers).length) - (users[a].questions.length + Object.keys(users[a].answers).length))

	return {
		users,
		userIds
	}
}


export default connect(mapStateToProps)(LeaderBoard)