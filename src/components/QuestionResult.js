import React, { Component } from 'react'
import { connect } from 'react-redux'


class QuestionResult extends Component {
  render() {
    const { author, avatar, optionOneText, optionTwoText, optionOneVotes, optionTwoVotes, authedUserVote } = this.props
    let totalOfVotes = optionOneVotes + optionTwoVotes
    let opt1Style = {width: `calc(${optionOneVotes * 100 / totalOfVotes}%)`}
    let opt2Style = {width: `calc(${optionTwoVotes * 100 / totalOfVotes}%)`}

    return (
      <div className='quest-card quest-result card'>
				<div className='card-top'>
					<h5>Asked by {author}</h5>
				</div>

				<div className='card-content'>
					<div className='card-img'>
						<img src={avatar} alt="avatar" />
					</div>

					<span className='separator'></span>

					<div className='quest-votes'>
						<h3>Results:</h3>

						<div className={`opt1-result ${authedUserVote}`}>
              <span className='pin'></span>
							<span>{optionOneText}?</span>

              <div className='progress-bar'>
                <div className='opt1' style={opt1Style}>
                  {optionOneVotes !== 0
                    ? Number.parseFloat(optionOneVotes * 100 / totalOfVotes).toPrecision(3) + '%'
                    : null
                  }
                </div>
              </div>

							<span>
                {optionOneVotes} out of {totalOfVotes} votes
              </span>
						</div>

						<div className={`opt2-result ${authedUserVote}`}>
              <span className='pin'></span>
							<span>{optionTwoText}?</span>

              <div className='progress-bar'>
                <div className='opt2' style={opt2Style}>
                  {optionTwoVotes !== 0
                    ? Number.parseFloat(optionTwoVotes * 100 / totalOfVotes).toPrecision(3) + '%'
                    : null
                  }
                </div>
              </div>

              <span>
                {optionTwoVotes} out of {totalOfVotes} votes
              </span>							
						</div>
					
					</div>
				</div>
			</div>
    )
  }
}


export default connect()(QuestionResult)