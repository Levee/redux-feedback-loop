import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Start extends Component {
  render() {
    return (
      <>
        <h1>We want <em>your</em> feedback!</h1>
        <button className="button" onClick={() => this.props.history.push('/feeling')}>Begin</button>
      </>
    )
  }
}

export default withRouter(Start);