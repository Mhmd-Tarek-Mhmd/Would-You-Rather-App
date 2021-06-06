import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import $ from 'jquery'
import Swal from 'sweetalert2'

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
			$('.icon').addClass('icon-adjustment')
		})
	}

	handleLogin = () => {
		let authedUser = $('.selected .option').attr('value')
		
		if (authedUser!==undefined) {
			this.props.dispatch(setAuthedUser(authedUser))
			this.setState({isLoggedIn: true})

			if (window.location.pathname === '/login') {
				Swal.fire({
					title: 'Welcome in <br> Would You Rather App',
					html:
						`<p style='margin: 30px 0; font-weight: 300'>A competitive game made by react & redux</p>
						<div style='text-align: left'>
							<h5 style='border-bottom: 1px solid; display: inline-block'>Notes:</h5>
							<ul style='list-style-type: disc; margin: 5px 0 0 30px; font-size: 14px'>
								<li>Use the nav bar to navigate between pages of the site.</li>
								<li>Do not refresh the page or use the address bar of the browser.</li>
								<li>If you try doing any of the above note, you will be asked to re-login.</li>
							</ul>
						</div>`
				})
			}
			
		}
		else {
			Swal.fire({
				title: 'Error!',
				text: 'Please sign in to continue',
				icon: 'error'
			})
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

					<div className="custom-select">
						<div className='selected'>
							<div className='placeholder'>Select User</div>
							<span className='icon' onClick={this.handleIconClick}></span>
						</div>

						<div className='options full-width top'>
							{names.map((name, index) =>
								<div className="option" key={ids[index]} value={ids[index]} onClick={this.handleOptionSelect}>
									<img src={avatarURLs[index]} alt='avatar'/>
									<span className="label">{name}</span>
								</div>
							)}
						</div>						
					</div>

					<button className='btn' onClick={this.handleLogin}>→</button>
					{window.location.pathname === '/login' &&
						<div>
							<span>OR</span>
							<Link to='/signup' className='btn signup' >Sign Up</Link>
						</div>
					}
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