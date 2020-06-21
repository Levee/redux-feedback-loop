import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Understanding extends Component {
  state = {
    understanding: 0
  }

  // get understanding level and set local state
  setUnderstanding = (event) => {
    this.setState({ understanding: event.target.value })
  }

  // send understanding level to global state
  sendUnderstanding = (event) => {
    if (!this.state.understanding) {
      alert('Error! Input cannot be empty.');
      return;
    }
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch({ type: 'GET_UNDERSTANDING', payload: Number(this.state.understanding) });
    this.props.history.push('/support');
  }

  render() {
    return (
      <>
        <h3>How well did you understand the content? 5 being very well and 1 being not at all.</h3>
        <form onSubmit={this.sendUnderstanding}>
          <label>Understanding Level</label>
          <select value={this.state.understanding} onChange={this.setUnderstanding}>
            <option value={0} disabled>Choose</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <input className="button" type="submit" value="Submit" />
        </form>
      </>
    )
  }
}

export default connect()(withRouter(Understanding));