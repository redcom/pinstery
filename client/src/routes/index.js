// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  AboutContainer,
  CartContainer,
  ContactContainer,
  CustomizeContainer,
  ShopContainer,
  ItemDetails,
  WelcomeContainer,
} from '../containers';

import { Header, NavBar, Footer } from '../components';

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
          <Route path="/about" component={AboutContainer} />
          <Route path="/cart" component={CartContainer} />
          <Route path="/contact" component={ContactContainer} />
          <Route path="/customize" component={CustomizeContainer} />
          <Route path="/shop" component={ShopContainer} />
          <Route path="/itemDetails/:id/:title" component={ItemDetails} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect()(Routes);
