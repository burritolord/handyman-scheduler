import React, { Component } from 'react';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
              <Route exact path="/" render={() => <div>Home</div>} />
              <Route path="/clients" render={() => <div>Clients</div>} />
              <Route path="/invoices" render={() => <div>Invoices</div>} />
              <Route path="/quotes" render={() => <div>Quotes</div>} />
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
