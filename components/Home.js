import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform, Text, View } from 'react-native';

import ShowAllPath from './ShowAllPath';
import { fetchMasteries } from '../redux/masteries';


class Home extends Component {
  componentDidMount() {
    this.props.initialData();
  }
  render() {
    return (

      <Text>
        Hello
          </Text>
    );
  }
}


const mapProps = null;

const mapDispatchtoProps = dispatch => ({
  initialData: () => {
    dispatch(fetchMasteries());
  },
});

export default connect(mapProps, mapDispatchtoProps)(Home);
