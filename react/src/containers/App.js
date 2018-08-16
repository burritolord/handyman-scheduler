import React, { Component } from 'react';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Layout from './Layout';
import Theme from '../Theme';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';
import NotFound from '../components/Errors/NotFound';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={Theme}>
        <CssBaseline />
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/dashboard"/>} />
              <Route path="/dashboard" render={() => <div>Dashboard</div>} />
              <Route path="/clients/people" render={() => <div>Clients</div>} />
              <Route path="/clients/properties" render={() => <div>properties</div>} />
              <Route path="/work/quotes" render={() => <div>Quotes</div>} />
              <Route path="/work/jobs" render={() => <div>Jobs</div>} />
              <Route path="/work/invoices" render={() => <div>Invoices</div>} />
              <Route path="/calendar" render={() => <div>Calendar</div>} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
