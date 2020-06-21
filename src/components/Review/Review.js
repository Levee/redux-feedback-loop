import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Review extends Component {
  state = {
    submitted: false
  }

  sendFeedback = () => {
    const { feeling, understanding, support, comments, dispatch } = this.props;
    if(!feeling || !understanding || !support){
      alert('Error! You skipped a step or reloaded the page. Please start over. You will now be redirected!');
      this.props.history.push('/');
      return;
    }
    this.setState({ submitted: true });
    axios.post('/feedback', {
      feeling,
      understanding,
      support,
      comments
    }).then(out => {
      console.log(out.config.data);
    })
      .catch(err => console.log(err));
    dispatch({ type: 'RESET_STATE' });
  }

  render() {
    const { feeling, understanding, support, comments } = this.props;
    return (
      <>
        <p>Review</p>
        <table>
          <tbody>
            <tr>
              <td>Feeling</td>
              <td>{feeling}</td>
            </tr>
            <tr>
              <td>Understanding</td>
              <td>{understanding}</td>
            </tr>
            <tr>
              <td>Support</td>
              <td>{support}</td>
            </tr>
            <tr>
              <td>Comments</td>
              <td>{comments === '' ? 'None' : comments}</td>
            </tr>
          </tbody>
        </table>
        { this.state.submitted === false
          ? <button className="button" onClick={this.sendFeedback}>Submit Feedback</button>
          : <>
            <label className="success">Success!</label><br />
            <button className="button" onClick={() => this.props.history.push('/')}>Restart</button>
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
    comments: state.commentsReducer,
  }
}

export default connect(mapStateToProps)(withRouter(Review));