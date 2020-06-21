import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Support extends Component {
  state = {
    support: 0
  }

  // get support level and set local state
  setSupport = (event) => {
    this.setState({ support: event.target.value })
  }

  // send support level to global state
  sendSupport = (event) => {
    if (!this.state.support) {
      alert('Error! Input cannot be empty.');
      return;
    }
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch({ type: 'GET_SUPPORT', payload: Number(this.state.support) });
    this.props.history.push('/comments');
  }

  render() {
    return (
      <>
        <form onSubmit={this.sendSupport}>
          <label>Support Level</label>
          <select value={this.state.support} onChange={this.setSupport}>
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

export default connect()(withRouter(Support));