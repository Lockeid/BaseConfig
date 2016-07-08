import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import Login from './pages/Login';
import Logout from './pages/Logout';
import Menu from './pages/Menu';
import AlbumList from './pages/AlbumList';

import auth from './services/AuthHandler';

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

function requireAuth(nextState, replaceState) {
  if (!auth.isLoggedIn()) {
    replaceState({ nextPathname: nextState.location.pathname }, '/login');
  }
}

ReactDOM.render(
(
  <Router history={createBrowserHistory()}>
    <Route path="login" component={Login} />
    <Route path="logout" component={Logout} />
    <Route path="/" component={App}>
      <IndexRoute component={AlbumList} onEnter={requireAuth} />
      <Route path="home" component={AlbumList} onEnter={requireAuth} />
      <Route path="submit" onEnter={requireAuth} />
      <Route path="*" component={AlbumList} onEnter={requireAuth}/>
    </Route>
  </Router>
), document.getElementById('root'));
