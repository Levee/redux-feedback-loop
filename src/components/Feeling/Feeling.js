import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Feeling extends Component {
  state = {
    feeling: 0
  }

  // get feeling level and set local state
  setFeeling = (event) => {
    this.setState({ feeling: event.target.value })
  }

  // send feeling level to global state
  sendFeeling = (event) => {
    if(!this.state.feeling){
      alert('Error! Input cannot be empty.');
      return;
    }
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch({ type: 'GET_FEELING', payload: this.state.feeling });
    this.props.history.push('/understanding');
  }

  render() {
    return (
      <>
        <form onSubmit={this.sendFeeling}>
          <select value={this.state.feeling} onChange={this.setFeeling}>
            <option value={0} disabled>Feeling</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
      </>
    )
  }
}

export default connect()(withRouter(Feeling));