import React, { Component } from 'react'
import { connect } from 'react-redux'


class QuestionResult extends Component {
  render() {
    const { author, avatar, optionOneText, optionTwoText, optionOneVotes, optionTwoVotes, usersLength, authedUserVote, authedUserName } = this.props
    let opt1Style = {width: `calc(${optionOneVotes * 100 / usersLength}%)`}
    let opt2Style = {width: `calc(${optionTwoVotes * 100 / usersLength}%)`}

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
                {authedUserName === author
                  ? <div className='opt1' style={{width: `calc(${optionOneVotes * 100 / (usersLength-1)}%)`}}>
                      {optionOneVotes !== 0
                        ? Number.parseFloat(optionOneVotes * 100 / (usersLength-1)).toPrecision(3) + '%'
                        : null
                      }
                    </div>

                  : <div className='opt1' style={opt1Style}>
                      {optionOneVotes !== 0
                        ? Number.parseFloat(optionOneVotes * 100 / usersLength).toPrecision(3) + '%'
                        : null
                      }
                    </div>
                }
              </div>

							<span>
                {authedUserName === author
                  ? `${optionOneVotes} out of ${usersLength - 1} votes`
                  : `${optionOneVotes} out of ${usersLength} votes`
                }
              </span>
						</div>

						<div className={`opt2-result ${authedUserVote}`}>
              <span className='pin'></span>
							<span>{optionTwoText}?</span>

              <div className='progress-bar'>
                {authedUserName === author
                  ? <div className='opt2' style={{width: `calc(${optionTwoVotes * 100 / (usersLength-1)}%)`}}>
                      {optionTwoVotes !== 0
                        ? Number.parseFloat(optionTwoVotes * 100 / (usersLength-1)).toPrecision(3) + '%'
                        : null
                      }
                    </div>

                  : <div className='opt2' style={opt2Style}>
                      {optionTwoVotes !== 0
                        ? Number.parseFloat(optionTwoVotes * 100 / usersLength).toPrecision(3) + '%'
                        : null
                      }
                    </div>
                }
              </div>

              <span>
                {authedUserName === author
                  ? `${optionTwoVotes} out of ${usersLength - 1} votes`
                  : `${optionTwoVotes} out of ${usersLength} votes`
                }
              </span>							
						</div>
					
					</div>
				</div>
			</div>
    )
  }
}


export default connect()(QuestionResult)