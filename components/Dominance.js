import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
// import Button from 'react-native-button';
// import { Actions } from 'react-native-router-flux';

class Dominance extends Component {
  render() {
    const champs = this.props.champions.data
    let keys = Object.keys(champs)
    console.log(this.props.champions.data[keys[2]])
   const arr=  keys.map(character => { ex: champs[character] })
   console.log(arr)
    return (
      <Text>Hello world!</Text>
    );
  }
}

const mapProps = state => ({ masteries: state.masteries,
  champions: state.champions
});

export default connect(mapProps, {})(Dominance);
