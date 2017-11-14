import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import styles from '../StyleSheet';
import { connect } from 'react-redux';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';


class MatchHistory extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const matches = this.props.matches.data.matches;
    const champs = this.props.champions.data;
    const keys = Object.keys(champs);
    const champions = keys.map(character => champs[character]);
    console.log(champions);

    return (
      <ScrollView style={{ backgroundColor: 'black' }}>
        {matches.map((el) => {
                    const champ = champions.filter(test => test.key == el.champion)[0];
                    return (
                      <View >
                        <Button onPress={() => { Actions.SingleChamp({ chamId: champ.id, champ, title: champ.id }); }}>
                          <Text style={{ color: 'red' }}>{champ.id}</Text>
                          <Image
                            style={{ width: 75, height: 75, borderRadius: 50 }}
                            source={{
                                        uri: `http://ddragon.leagueoflegends.com/cdn/7.22.1/img/champion/${champ.id}.png`,
                                    }}
                          />
                        </Button>
                        <Text style={{ color: 'goldenrod' }}>Role: {el.lane}</Text>
                      </View>
                    );
                })}
      </ScrollView>
    );
  }
}


const mapProps = state => ({
  champions: state.champions,
  matches: state.summoner,
});


export default connect(mapProps, {})(MatchHistory);
