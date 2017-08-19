// @flow
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import styled from 'styled-components';
import Tabs, { Tab } from 'material-ui/Tabs';
type Props = {
  children: Object,
};

const Wrapper = styled.div`
  width: 100%;
`;

class AdminTabs extends Component {
  props: Props;
  state = {
    index: 0,
  };

  handleChange = (event, index) => {
    this.setState({ index });
  };

  render() {
    const { children } = this.props;

    return (
      <Wrapper>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.index}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto"
          >
            <Tab label="Add Products" />
            <Tab label="Edit Products" />
            <Tab label="Categories" />
          </Tabs>
        </AppBar>
        {React.Children.map(
          children,
          (child, index) => index === this.state.index && child,
        )}
      </Wrapper>
    );
  }
}

export default AdminTabs;
