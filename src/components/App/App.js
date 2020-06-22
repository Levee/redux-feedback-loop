import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Start from '../Start/Start';
import Feeling from '../Feeling/Feeling.js';
import Understanding from '../Understanding/Understanding.js';
import Support from '../Support/Support.js';
import Comments from '../Comments/Comments.js';
import Review from '../Review/Review.js';
import AdminAccess from '../AdminAccess/AdminAccess';
import Admin from '../Admin/Admin';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
        </header>
        <br/>
        {/* creates a router that contains all routes */}
        <Router>
          <AdminAccess />
          <Route exact path="/" component={Start} />
          <Route exact path="/feeling" component={Feeling} />
          <Route exact path="/understanding" component={Understanding} />
          <Route exact path="/support" component={Support} />
          <Route exact path="/comments" component={Comments} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/admin" component={Admin} />
        </Router>
      </div>
    );
  }
}

export default App;
