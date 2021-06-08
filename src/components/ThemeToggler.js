import React from 'react'
import $ from 'jquery'


class ThemeToggler extends React.Component {
	handleToggle = () => {
		const darkTheme = '<link rel="stylesheet" href="css/dark.css">'
		const lightTheme = '<link rel="stylesheet" href="css/light.css">'
		let theme = $('link[rel="stylesheet"]')

		theme.attr('href') === 'css/light.css' && theme.replaceWith(darkTheme)
		theme.attr('href') === 'css/dark.css' && theme.replaceWith(lightTheme)		
	}

	render() {
		return (
			<div className='theme-toggler-container'>
				<span className='theme-icon' onClick={this.handleToggle}></span>
				<span className='gear' onClick={() => $('.theme-toggler-container').toggleClass('opened')}></span>
			</div>
		)
	}
}


export default ThemeToggler