import React, { Component } from 'react'
import { connect } from 'react-redux'


class LeaderBoard extends Component {
	render() {
		const { users, userIds } = this.props
		

		return (
			<table className='leader-board' border='1'>
				<caption>Leader Board</caption>

				<thead>
					<tr>
						<th>User</th>
						<th>Answered Questions</th>
						<th>Created Questions</th>
						<th>Total</th>
					</tr>
				</thead>
				
				<tbody>
					{userIds.map(id =>
						<tr key={id}>
							<td className='user'><img src={users[id].avatarURL} alt='avatar' /> <span>{users[id].name}</span></td>
							<td>{Object.keys(users[id].answers).length}</td>
							<td>{users[id].questions.length}</td>
							<td>{(Object.keys(users[id].answers).length) + (users[id].questions.length)}</td>
						</tr>
					)}
				</tbody>
			</table>
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