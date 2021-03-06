import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class AdminAccess extends Component {
  render() {
    return (
      <>
        {/* conditionally render the admin button if you're on the home page */}
        {this.props.location.pathname === '/' ?
        <button style={{ all: 'unset' }} onClick={() => this.props.history.push('/admin')}>
          <svg className="bi bi-shield-lock" width="1.5rem" height="1.5rem"
            viewBox="0 0 16 16" fill="#444" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M5.443 1.991a60.17 60.17 0 0 0-2.725.802.454.454 0 0 0-.315.366C1.87 7.056 3.1 9.9 4.567 11.773c.736.94 1.533 1.636 2.197 2.093.333.228.626.394.857.5.116.053.21.089.282.11A.73.73 0 0 0 8 14.5c.007-.001.038-.005.097-.023.072-.022.166-.058.282-.111.23-.106.525-.272.857-.5a10.197 10.197 0 0 0 2.197-2.093C12.9 9.9 14.13 7.056 13.597 3.159a.454.454 0 0 0-.315-.366c-.626-.2-1.682-.526-2.725-.802C9.491 1.71 8.51 1.5 8 1.5c-.51 0-1.49.21-2.557.491zm-.256-.966C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 0 1 2.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 0 1-2.418 2.3 6.942 6.942 0 0 1-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 0 1-1.007-.586 11.192 11.192 0 0 1-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 0 1 2.415 1.84a61.11 61.11 0 0 1 2.772-.815z" />
            <path d="M9.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            <path d="M7.411 8.034a.5.5 0 0 1 .493-.417h.156a.5.5 0 0 1 .492.414l.347 2a.5.5 0 0 1-.493.585h-.835a.5.5 0 0 1-.493-.582l.333-2z" />
          </svg>
        </button>
        // conditionally render the reset button if you're NOT on the home page
        : <button style={{ all: 'unset' }} onClick={() => {
            const { history, dispatch } = this.props;
            history.push('/');
            dispatch({ type: 'RESET_STATE' });
          }}>
            <svg className="bi bi-arrow-counterclockwise" width="1.5rem" height="1.5rem"
              viewBox="0 0 16 16" fill="#444" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M12.83 6.706a5 5 0 0 0-7.103-3.16.5.5 0 1 1-.454-.892A6 6 0 1 1 2.545 5.5a.5.5 0 1 1 .91.417 5 5 0 1 0 9.375.789z" />
              <path fillRule="evenodd" d="M7.854.146a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 1 0 .708-.708L5.707 3 7.854.854a.5.5 0 0 0 0-.708z" />
            </svg>
        </button> }
        {/* conditionally render back button; switch statement determines which page to return to when the button is pressed */}
        {this.props.location.pathname === '/' ? <></> : (this.props.location.pathname === '/admin' ? <></> : <button style={{ all: 'unset' }} onClick={() => {
          const { history } = this.props;
          switch (this.props.location.pathname){
            case '/feeling':
              history.push('/');
              break;
            case '/understanding':
              history.push('/feeling');
              break;
            case '/support':
              history.push('/understanding');
              break;
            case '/comments':
              history.push('/support');
              break;
            case '/review':
              history.push('/comments');
              break;
            default:
              console.log('Cannot go back any further');
          }
        }}>
          <svg className="bi bi-box-arrow-left" width="1.5rem" height="1.5rem"
            viewBox="0 0 16 16" fill="#444" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4.354 11.354a.5.5 0 0 0 0-.708L1.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z" />
            <path fillRule="evenodd" d="M11.5 8a.5.5 0 0 0-.5-.5H2a.5.5 0 0 0 0 1h9a.5.5 0 0 0 .5-.5z" />
            <path fillRule="evenodd" d="M14 13.5a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 14 2.5H7A1.5 1.5 0 0 0 5.5 4v1.5a.5.5 0 0 0 1 0V4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 0-1 0V12A1.5 1.5 0 0 0 7 13.5h7z" />
          </svg>
        </button>)}
      </>
    )
  }
}

export default connect()(withRouter(AdminAccess));