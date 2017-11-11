import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
// import Button from 'react-native-button';
// import { Actions } from 'react-native-router-flux';

class Dominance extends Component {
  render() {
    console.log(this.props)
    return (
      <Text>Hello world!</Text>
    );
  }
}

const mapProps = state => ({ masteries: state.masteries });

export default connect(mapProps, {})(Dominance);
