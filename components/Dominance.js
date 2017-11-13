import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import styles from '../StyleSheet';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

class Dominance extends Component {
  render() {
    const champs = this.props.champions.data;
    const keys = Object.keys(champs);
    const arr = keys.map(character => champs[character]);
    return (
      <ScrollView >
        {arr.map(char => (
          <View key={char.id} style={styles.squares}>
            <Button onPress={() => { Actions.SingleChamp({ chamId: char.id, champ:char, title:char.id }) }}>
              <Text>{char.id}</Text>
              <Image
                style={{ width: 50, height: 50 }}
                source={{
                uri: `http://ddragon.leagueoflegends.com/cdn/7.22.1/img/champion/${char.id}.png 
`
}}/>
            </Button>
          </View>
        ))}
      </ScrollView>
    );
  }
}

const mapProps = state => ({
  masteries: state.masteries,
  champions: state.champions,
});

export default connect(mapProps, {})(Dominance);
