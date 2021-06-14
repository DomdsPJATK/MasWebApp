import React from 'react';
import Header from '../components/Header';
import { GlobalStyle, Main } from '../styles/GlobalStyles';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import MainPage from '../views/MainPage'
import Form from './Form';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Router>
        <Main>
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route exact path="/match-form">
              <Form />
            </Route>
          </Switch>
        </Main>
      </Router>
    </>
  );
}