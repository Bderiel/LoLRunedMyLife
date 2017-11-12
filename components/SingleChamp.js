import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import styles from '../StyleSheet';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';


export default class SingleChamp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const champ = this.props.champ;
    return (
      <View>
          <Text>{champ.id}</Text>
          <Text>{champ.title}</Text>
          <Text>{champ.blurb}</Text>
          <Text></Text>
      </View>
    );
  }
}

// export default connect({}, {})(SingleChamp);
