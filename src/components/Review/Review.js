import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Review extends Component {
  state = {
    submitted: false
  }

  sendFeedback = () => {
    this.setState({ submitted: true });
  }

  render() {
    return (
      <>
        <p>Review</p>
        { this.state.submitted === false
          ? <button className="button" onClick={this.sendFeedback}>Submit Feedback</button>
          : <>
          <label>Success!</label><br /><button className="button" onClick={() => this.props.history.push('/')}>Restart</button>
          </>
        }
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    feeling: state.feelingReducer,
    understanding: state.understandingReducer,
    support: state.supportReducer,
    comments: state.commentsReducer
  }
}

export default connect(mapStateToProps)(withRouter(Review));