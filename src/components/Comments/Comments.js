import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Comments extends Component {
  state = {
    comments: '',
    name: ''
  }

  // get comments level and set local state
  setComments = (event) => {
    this.setState({ comments: event.target.value });
  }

  setName = (event) => {
    this.setState({ name: event.target.value });
  }

  // send comments level to global state
  sendComments = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch({ type: 'GET_COMMENTS', payload: this.state.comments });
    dispatch({ type: 'GET_NAME', payload: this.state.name});
    this.props.history.push('/review');
  }

  render() {
    return (
      <>
        <form onSubmit={this.sendComments}>
          <label>Comments</label>
          <textarea onChange={this.setComments} placeholder="Enter comment or leave blank..." />
          <br />
          <input type="text" placeholder="Name..." onChange={this.setName} />
          <input className="button" type="submit" value="Submit" />
        </form>
      </>
    )
  }
}

export default connect()(withRouter(Comments));