import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {
  render() {
    return (
      <>
        <p>Review</p>
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

export default connect(mapStateToProps)(Review);