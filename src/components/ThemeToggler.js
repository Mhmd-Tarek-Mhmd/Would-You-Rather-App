import React from 'react'
import $ from 'jquery'


class ThemeToggler extends React.Component {
	render() {
		return (
			<div className='theme-toggler-container'>
				<span className='theme-icon' onClick={() => $('html').toggleClass('light dark')}></span>
				<span className='gear' onClick={() => $('.theme-toggler-container').toggleClass('opened')}></span>
			</div>
		)
	}
}


export default ThemeToggler