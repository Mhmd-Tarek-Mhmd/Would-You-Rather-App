import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import $ from 'jquery'

import { setAuthedUser } from '../actions/authedUser'


class LoginCard extends Component {
	state = {
		isLoggedIn : false
	}

	handleIconClick = () => $('.options').slideToggle()

	handleOptionSelect = () => {
		$('.options > div').on('click', function() {
			let clone = $(this).clone()
			$('.selected div').remove()
			$('.selected').append(clone)
	
			$('.options').slideUp()
			$('.options').addClass('options-adjustment')
			$('.icon').addClass('icon-adjustment')
		})
	}

	handleLogin = () => {
		let authedUser = $('.selected .option').attr('value')
		
		if (authedUser!==undefined) {
			this.props.dispatch(setAuthedUser(authedUser))
			this.setState({isLoggedIn: true})
		}
	}


	render() {
		const { names, avatarURLs, ids, pathname } = this.props
    if (this.state.isLoggedIn === true) {return <Redirect to={pathname} />}
		
		return (	
			<div className='login-card card'>
				<div className='card-top'>
					<h3>Welcome to the Would You Rather App!</h3>
					<p>Please sign in to continue</p>
				</div>

				<div className='card-img'>
					<img src='/img/login.png' alt="logo" />
				</div>

				<div className='card-content'>
					<h2>Sign in</h2>

					<div className="select">
						<div className='selected'>
							<div className='placeholder'>Select User</div>
							<span className='icon' onClick={this.handleIconClick}>∨</span>
						</div>

						<div className='options'>
							{names.map((name, index) =>
								<div className="option" key={ids[index]} value={ids[index]} onClick={this.handleOptionSelect}>
									<img src={avatarURLs[index]} alt='avatar'/>
									<span className="label">{name}</span>
								</div>
							)}
						</div>						
					</div>

					<button className='btn' onClick={this.handleLogin}>→</button>
				</div>
			</div>
		)
	}
}

function mapStateToProps({ users }) {
	return {
		users,
		names: Object.values(users).map(user => user.name),
		ids: Object.keys(users),
		avatarURLs: Object.values(users).map(user => user.avatarURL)
	}
}


export default connect(mapStateToProps)(LoginCard)