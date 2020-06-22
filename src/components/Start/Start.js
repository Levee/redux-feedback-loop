import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Start extends Component {
  render() {
    return (
      <>
        {/* simple home page, nothing flashy; button pushes to the /feeling page using withRouter */}
        <h1>We want <em>your</em> feedback!</h1>
        <button className="button" onClick={() => this.props.history.push('/feeling')}>Begin</button>
      </>
    )
  }
}

export default withRouter(Start);