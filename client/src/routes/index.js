// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  CustomOrdersContainer,
  ContactContainer,
  ButtonsContainer,
  WelcomeContainer,
  SigninContainer,
  CartContainer,
} from '../containers';

import { Header, NavBar } from '../components';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { getInitialState, hidrateStoreWithState } from '../actions/AppActions';

class Routes extends Component {
  props: {
    dispatch: Function,
  };

  hidrateStateFromServer = state => {
    this.props.dispatch(hidrateStoreWithState(state));
  };

  componentDidMount() {
    this.props.dispatch(getInitialState(this.hidrateStateFromServer));
  }

  render() {
    return (
      <Router>
        <div className="app-container">
          <Header />
          <NavBar />
          <Route exact path="/" component={WelcomeContainer} />
          <Route path="/signin" component={SigninContainer} />
          <Route path="/cart" component={CartContainer} />
          <Route path="/shop-buttons" component={ButtonsContainer} />
          <Route path="/custom-orders" component={CustomOrdersContainer} />
          <Route path="/contact" component={ContactContainer} />
        </div>
      </Router>
    );
  }
}

export default connect()(Routes);
