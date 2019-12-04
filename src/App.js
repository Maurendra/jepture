import React, {Component, Fragment} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Posts from './components/Posts';

class App extends Component {


  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <Fragment>
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/dashboard" exact component={Dashboard} />
              <Route path="/login" exact component={Login} />
              <Route path="/post" exact component={Posts} />
            </Switch>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
