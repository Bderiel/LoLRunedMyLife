import React, { Component } from 'react';
import {
  Platform,
  Text,
  View
} from 'react-native';
import styles from '../StyleSheet';

export default class ShowAllPath extends Component {
  render() {
    return (
      <View style={styles.container}>
              <Text style={styles.header}>
                    Masteries
                </Text>
      </View>
    );
  }
}

