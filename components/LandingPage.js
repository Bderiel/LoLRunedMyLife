import React, { Component } from 'react';
import { ImageBackground, Image, View, Text } from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import styles from '../StyleSheet';

const LandingPage = () => {
  const remote = 'https://news-a.akamaihd.net/public/images/misc/GameBox.jpg'
  return (
    <ImageBackground source={{ uri: remote }} style={ styles.backgroundImage }>
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', padding: 150}}>
        <Button style={ styles.button } onPress={Actions.AllChampions}>All Champions</Button>
        <Button style={ styles.button } onPress={Actions.Masteries}>LoL Runes Runed My Life</Button>
        <Button style={styles.button} onPress={Actions.Search}>Match History</Button>
      </View>
    </ImageBackground>
  );
};

export default LandingPage;
