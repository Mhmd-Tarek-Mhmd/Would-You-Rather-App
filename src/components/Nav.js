import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { unsetAuthedUser } from '../actions/authedUser'


class Nav extends Component {
	handleClick = () => {
		this.props.dispatch(unsetAuthedUser())
	}

	render() {
		const { users, authedUser } = this.props

		return (
			<nav className='nav'>
				<ul>
					<li>
						<NavLink to='/home' activeClassName='active'>
							Home
						</NavLink>
					</li>

					<li>
						<NavLink to='/add' activeClassName='active'>
							New Question
						</NavLink>
					</li>

					<li>
						<NavLink to='/leaderboard' activeClassName='active'>
							Leader Board
						</NavLink>
					</li>
				</ul>

				<ul>
					<li>Hello, {users[authedUser].name} </li> <img src={users[authedUser].avatarURL} alt="avatar" />
					
					<li>
						<NavLink to='/login' activeClassName='active' onClick={this.handleClick}>
							Logout
						</NavLink>
					</li>				
				</ul>
			</nav>
		)
	}
}

function mapStateToProps({ users, authedUser }) {
	return {
		users,
		authedUser
	}
}


export default connect(mapStateToProps)(Nav)