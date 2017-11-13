import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import styles from '../StyleSheet';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

class AllChampions extends Component {
  render() {
    const champs = this.props.champions.data;
    const keys = Object.keys(champs);
    const arr = keys.map(character => champs[character]);
    return (
      <ScrollView >
        <View style={ styles.allChampions }>
          {arr.map(char => (
            <View key={char.id} style={{ padding: 10, alignItems: 'center' }}>
              <Button onPress={() => { Actions.SingleChamp({ chamId: char.id, champ:char, title:char.id }) }}>
                <Image
                  style={{ width: 75, height: 75, borderRadius: 50 }}
                  source={{
                  uri: `http://ddragon.leagueoflegends.com/cdn/7.22.1/img/champion/${char.id}.png`
                }}/>
              </Button>
              <Text style={{color:"white"}}>{char.id}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const mapProps = state => ({
  masteries: state.masteries,
  champions: state.champions,
});

export default connect(mapProps, {})(AllChampions);
