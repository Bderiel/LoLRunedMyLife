import React, { Component } from 'react';
import { ImageBackground, Image, View, Text } from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import styles from '../StyleSheet';

export default class LandingPage extends Component {
  render() {
    const remote = 'https://news-a.akamaihd.net/public/images/misc/GameBox.jpg'
    return (
        <ImageBackground source={{ uri: remote }} style={ styles.backgroundImage }>
          <Text>Masteries</Text>
          <Button onPress={Actions.Dominance}>Dominance</Button>
        </ImageBackground>
    )
  }
}
