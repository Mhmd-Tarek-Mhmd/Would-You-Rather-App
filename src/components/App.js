import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Nav from './Nav'
import Home from './pages/Home'
import Login from './pages/Login'
import NewQuestion from './pages/NewQuestion'
import LeaderBoard from './pages/LeaderBoard'
import Question from './pages/Question'
import Result from './pages/Result'
import LoginCard from './LoginCard'


class App extends Component {
	render() {
		const { authedUser } = this.props
		let path = window.location.pathname
		let paths = ['/', '/login', '/home', '/leaderboard']
		
	  return (
	    <Router className="App">
				{path === '/' && <Redirect to='/login' />}

				<Fragment>
					<LoadingBar />
					<div className='container'>
						{authedUser !== null && <Nav />}
						
						<Route path='/login' component={Login} />
						{authedUser === null && path !== '/login' && path !== '/' ? <LoginCard pathname={path} />
							:	<Switch>
									<Route path='/home' component={Home} />
									<Route path='/add' component={NewQuestion} />
									<Route path='/leaderboard' component={LeaderBoard} />
									<Route path='/question/:id' component={Question} />
									<Route path='/result/:id' component={Result} />
									{!paths.includes(path) && <p className='not-found'>Page not found</p>}
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