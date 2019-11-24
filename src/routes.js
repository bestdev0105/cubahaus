import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { ConnectedRouter as Router } from "react-router-redux";
import LoadingOverlay from "react-loading-overlay";

import ScrollToTopRoute from "./ScrollToTopRoute";
import DefaultLayout from "./containers/DefaultLayout";

import Welcome from "./containers/Welcome";
import Login from "./containers/Login";
import LogoutSuccess from "./containers/LogoutSuccess";
import ForgotPassword from "./containers/ForgotPassword";
import ResetPassword from "./containers/ResetPassword";
import Register from "./containers/Register";
import Profile from "./containers/Profile";
import EmailVerification from "./containers/EmailVerification";
import CheckEmail from "./containers/CheckEmail";
import Dashboard from "./containers/Dashboard";
import Notifier from "./containers/Notifier";
import ApplicationRoutes from "./applicationRoutes";
import Help from "./containers/Help";

import Landing from "./containers/Landing";
import LandingCommunity from "./containers/LandingCommunity";
import Blog from "./containers/Blog";
import Faq from "./containers/Faq";
import Blank from "./containers/Blank";

export const PrivateRoute = ({ component: Component, containLayout, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        containLayout ? (
          <DefaultLayout {...props}>
            <Component {...props} />
          </DefaultLayout>
        ) : (
          <Component {...props} />
        )
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export const UnAuthenticatedRoute = ({
  component: Component,
  isLoggedIn, containLayout, 
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Redirect to={{ pathname: "/book" }} />
      ) : (
        containLayout ? (
          <DefaultLayout {...props}>
            <Component {...props} />
          </DefaultLayout>
        ) : (
          <Component {...props} />
        )
      )
    }
  />
);

export const BlankRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      <DefaultLayout {...props}>
        <Component {...props} />
      </DefaultLayout>
    }
  />
);

const Routes = ({ history, isLoggedIn, loading }) => {
  return (
    <Router history={history}>
      <LoadingOverlay active={loading} spinner text="Loading">
        <ScrollToTopRoute>
          <div>
            <Notifier />
            {/* <Route
              exact
              path="/"
              render={props => (
                <Redirect
                  to={{
                    pathname: "/home",
                    state: { from: props.location }
                  }}
                />
              )}
            /> */}
            {/* <Route exact path="/welcome" component={Welcome} /> */}
            <Switch>
              <UnAuthenticatedRoute
                exact
                path="/"
                component={Landing}
                history={history}
                isLoggedIn={isLoggedIn}
                containLayout={true}
              />
              <UnAuthenticatedRoute
                exact
                path="/community"
                component={LandingCommunity}
                history={history}
                isLoggedIn={isLoggedIn}
                containLayout={true}
              />
              <UnAuthenticatedRoute
                exact
                path="/faq"
                component={Faq}
                history={history}
                isLoggedIn={isLoggedIn}
                containLayout={true}
              />
              <UnAuthenticatedRoute
                exact
                path="/blog/:id"
                component={Blog}
                history={history}
                isLoggedIn={isLoggedIn}
                containLayout={true}
              />
              <UnAuthenticatedRoute
                exact
                path="/login"
                component={Login}
                history={history}
                isLoggedIn={isLoggedIn}
                containLayout={true}
              />
              <UnAuthenticatedRoute
                exact
                path="/register"
                component={Register}
                history={history}
                isLoggedIn={isLoggedIn}
                containLayout={true}
              />
              <UnAuthenticatedRoute
                path="/verify-email/:token"
                component={EmailVerification}
                history={history}
                isLoggedIn={isLoggedIn}
                containLayout={true}
              />
              <UnAuthenticatedRoute
                exact
                path="/forgot"
                component={ForgotPassword}
                history={history}
                isLoggedIn={isLoggedIn}
                containLayout={true}
              />
              <UnAuthenticatedRoute
                exact
                path="/logoutSuccess"
                component={LogoutSuccess}
                history={history}
                isLoggedIn={isLoggedIn}
                containLayout={true}
              />
              <UnAuthenticatedRoute
                exact
                path="/password-reset/confirm/:uid/:token/"
                //     path="/password-reset/confirm/"
                component={ResetPassword}
                history={history}
                isLoggedIn={isLoggedIn}
                containLayout={true}
              />
              <PrivateRoute
                exact
                path="/book"
                component={Dashboard}
                history={history}
                isLoggedIn={isLoggedIn}
                containLayout={true}
              />
              <PrivateRoute
                path="/application"
                component={ApplicationRoutes}
                history={history}
                isLoggedIn={isLoggedIn}
                containLayout={true}
              />
              <PrivateRoute
                exact
                path="/checkEmail"
                component={CheckEmail}
                history={history}
                isLoggedIn={isLoggedIn}
                containLayout={true}
              />
              <PrivateRoute
                exact
                path="/profile"
                component={Profile}
                history={history}
                isLoggedIn={isLoggedIn}
                containLayout={true}
              />
              <PrivateRoute
                exact
                path="/help"
                component={Help}
                history={history}
                isLoggedIn={isLoggedIn}
                containLayout={true}
              />
              <BlankRoute component={Blank} />
            </Switch>
          </div>
        </ScrollToTopRoute>
      </LoadingOverlay>
    </Router>
  );
};

const mapStateToProps = ({ auth, community, room, docs, info }) => ({
  isLoggedIn: auth.loggedInUser !== null,
  loading:
    auth.loading ||
    community.loading ||
    room.loading ||
    docs.loading ||
    info.loading
});

export default connect(mapStateToProps)(Routes);
