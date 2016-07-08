import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

class App extends Component {
  static propTypes = {
    children: React.PropTypes.object.isRequired,
  };

  render() {
    return (
      <div style={{paddingLeft: 250, height: '100%'}}>
        <Menu
          style={{top: 0, bottom: 0, left: 0, position: 'fixed', width: 250}}
        />
        {this.props.children}
      </div>
    );
  }
}


ReactDOM.render(
(
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App} />
  </Router>
), document.getElementById('root'));
