// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  AboutContainer,
  CartContainer,
  JournalContainer,
  MoreContainer,
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
          <Route exact path="/" component={CartContainer} />
          <Route path="/cart" component={CartContainer} />
          <Route path="/journal" component={JournalContainer} />
          <Route path="/about" component={AboutContainer} />
          <Route path="/more" component={MoreContainer} />
        </div>
      </Router>
    );
  }
}

export default connect()(Routes);
