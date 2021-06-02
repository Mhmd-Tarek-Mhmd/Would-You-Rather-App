import React, { Component } from 'react'
import { connect } from 'react-redux'

import LoginCard from '../LoginCard'


class Login extends Component {
	render() {		
		return (	
			<LoginCard
				pathname='/home'
			/>
		)
	}
}


export default connect()(Login)