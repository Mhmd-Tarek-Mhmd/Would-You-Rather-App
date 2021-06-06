import React, { Component } from 'react'
import { connect } from 'react-redux'
import $ from 'jquery'
import Swal from 'sweetalert2'

import { handleAddNewUser } from '../../actions/users'


class SignUp extends Component {
	handleIconClick = () => $('.options').slideToggle()

	handleOptionSelect = () => {
		$('.options > div').on('click', function() {
			let clone = $(this).clone()
			$('.selected div').remove()
			$('.selected').append(clone)
	
			$('.options').slideUp()
			$('.username').css({position: 'relative', bottom: '9px'})
			$('.icon').addClass('icon-adjustment')
		})
	}

	handleSignup = () => {
		const { userIds, dispatch, history } = this.props
		let name = $('.signup-card .name').val()
		let username = $('.signup-card .username').val()
		let avatar = $('.signup-card .selected img').attr('src')


		if ( name !== '' && username !== '' && avatar !== undefined && !userIds.includes(username.toLowerCase()) ) {
			dispatch(handleAddNewUser(name[0].toUpperCase() + name.slice(1), username.toLowerCase(), avatar))
			history.push('/login')
		}
		else if (userIds.includes(username.toLowerCase())) {
			Swal.fire({
				title: 'Error',
				icon: 'error',
				text: 'Username is already exist. Try another one.'
			})
		}
		else {
			Swal.fire({
				title: 'Error',
				icon: 'error',
				text: 'Fill all the slots to continue'
			})
		}
	}
  
	render() {	
		return (	
			<div className='signup-card card'>
				<div className='card-top'>
					<h3>Welcome to the Would You Rather App!</h3>
					<p>Please sign up to continue</p>
				</div>

				<div className='card-img'>
					<img src='/img/login.png' alt='logo' />
				</div>

				<div className='card-content'>
					<h2>Sign up</h2>

          <input type='text' className='name' placeholder='Enter Your Name' />

					<div className="custom-select sm">
						<div className='selected'>
							<div className='placeholder'>Select Your Avatar</div>
							<span className='icon' onClick={this.handleIconClick}></span>
						</div>

						<div className='options bottom'>
              <div className="option"  onClick={this.handleOptionSelect}>
                <img src='/img/avatar/male0.svg' alt='avatar'/>
              </div>

              <div className="option"  onClick={this.handleOptionSelect}>
                <img src='/img/avatar/female0.svg' alt='avatar'/>
              </div>

              <div className="option"  onClick={this.handleOptionSelect}>
                <img src='/img/avatar/male1.svg' alt='avatar'/>
              </div>

							<div className="option"  onClick={this.handleOptionSelect}>
                <img src='/img/avatar/female1.svg' alt='avatar'/>
              </div>
						</div>						
					</div>

					<input type='text' className='username' placeholder='Enter Your Username' />

					<button className='btn' onClick={this.handleSignup}>→</button>
				</div>
			</div>
		)
	}
}

function mapStateToProps({ users }) {
	return{
		userIds: Object.keys(users)
	}
}


export default connect(mapStateToProps)(SignUp)