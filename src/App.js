import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import requireAuth from "./containers/Authenticate"
import Logout from './views/pages/logout';
import './App.css'
import { ThemeProvider } from '@material-ui/core/styles';
import { themeLight } from './theme';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/Auth'));

// Pages
const Login = React.lazy(() => import('./views/pages/Login/index'));
const Page404 = React.lazy(() => import('./views/pages/page404'));
const Page500 = React.lazy(() => import('./views/pages/page500'));
const ForgotPassword = React.lazy(() => import('./views/pages/forgotPassword'));


class App extends Component {

  render() {
    return (
      <ThemeProvider theme={themeLight}>
        <Router>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
              <Route exact path="/logout" name="Logout" render={props => <Logout {...props} />} />
              <Route exact path="/forgot-password" name="Forgot Password Page" render={props => <ForgotPassword {...props} />} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} />
              <Route path="/" name="Home" component={requireAuth(TheLayout)} />
            </Switch>
          </React.Suspense>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
