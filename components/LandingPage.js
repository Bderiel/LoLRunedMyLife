import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import styles from '../StyleSheet';

export default class LandingPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Masteries</Text>
        <Button onPress={Actions.Dominance}>Dominance</Button>
      </View>
    )
  }
}