import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import styles from '../StyleSheet';

const MatchHistory = (props) => {
  const matches = props.matches;
  const champs = props.champions.data;
  const keys = Object.keys(champs);
  const champions = keys.map(character => champs[character]);
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
};

const mapProps = state => ({
  champions: state.champions,
  matches: state.summoner.matches,
});

export default connect(mapProps, {})(MatchHistory);

MatchHistory.propTypes = {
  matches: PropTypes.objectOf(PropTypes.any).isRequired,
  champions: PropTypes.objectOf(PropTypes.any).isRequired,
};
