import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import $ from 'jquery'

import Nav from './Nav'
import Home from './pages/Home'
import Login from './pages/Login'
import NewQuestion from './pages/NewQuestion'
import LeaderBoard from './pages/LeaderBoard'
import Question from './pages/Question'
import Result from './pages/Result'
import SignUp from './pages/SignUp'
import LoginCard from './LoginCard'
import ThemeToggler from './ThemeToggler'


class App extends Component {
	render() {
		const { authedUser } = this.props
		let path = window.location.pathname
		let paths = ['/', '/login', '/signup']
		if (window.history && window.history.pushState) {$(window).on('popstate', () => window.location.reload())}
		
	  return (
	    <Router className="App">
				{path === '/' && <Redirect to='/login' />}
				
				<Fragment>
					<LoadingBar />
					{authedUser !== null && <Nav />}
					<ThemeToggler />
					
					<div className='container'>
						{authedUser === null && !paths.includes(path) ? <LoginCard pathname={path} />
							:	<Switch>
									<Route path='/login' component={Login} />
									<Route path='/signup' component={SignUp} />
									<Route path='/home' component={Home} />
									<Route path='/add' component={NewQuestion} />
									<Route path='/leaderboard' component={LeaderBoard} />
									<Route path='/questions/:id' component={Question} />
									<Route path='/result/:id' component={Result} />
									<Route render={() => <p className='not-found'>Page not found</p>} />
								</Switch>
						}
					</div>
				</Fragment>
	    </Router>
	  )
  }
}

function mapStateToProps ({ authedUser }) {
	return {authedUser}
}


export default connect(mapStateToProps)(App)