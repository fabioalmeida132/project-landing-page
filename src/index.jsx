import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider  } from 'styled-components';
import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';
import Home from './templates/Home';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route to="*" component={Home}/>
        </Switch>
      </BrowserRouter>
      <GlobalStyles/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
