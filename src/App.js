import React from "react";
import { Provider } from "react-redux";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { SnackbarProvider } from "notistack";
import axios from "axios";

import store, { history } from "./store";
import { checkAuthorization } from "./actions/auth";

import Routes from "./routes";
import COLORS from "./config/colors";

import "./App.scss";

axios.defaults.baseURL = "https://cubahaus-api.herokuapp.com";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: COLORS.PRIMARY_COLOR
    }
  }
});

store.dispatch(checkAuthorization());

const App = () => (
  <Provider store={store}>
    <SnackbarProvider>
      <MuiThemeProvider theme={theme}>
        <Routes history={history} />
      </MuiThemeProvider>
    </SnackbarProvider>
  </Provider>
);

export default App;
