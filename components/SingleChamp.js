import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../StyleSheet';


export default class SingleChamp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {

  }
  render() {
    const champ = this.props.champ;
    return (
      <View style={styles.singleChampion}>
        <View style={{ alignItems: 'center', margin: 20 }}>
          <Text style={{ color: 'red', fontSize: 20 }}>{champ.id}</Text>

          <Text style={{ color: 'white', fontSize: 16 }}>{champ.title.slice(3)}</Text>

          <Image style={{ width: 390, height: 375 }} source={{ uri: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.id}_0.jpg` }} />

          <Text style={{ color: 'grey', textAlign: 'center' }}>{champ.blurb}</Text>
        </View>
      </View>
    );
  }
}

