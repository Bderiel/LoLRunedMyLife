import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import styles from '../StyleSheet';


const AllChampions = (props) => {
  const champs = props.champions.data;
  const keys = Object.keys(champs);
  const arr = keys.map(character => champs[character]);
  return (
    <ScrollView >
      <View style={styles.allChampions}>
        {arr.map(char => (
          <View key={char.id} style={{ padding: 10, alignItems: 'center' }}>
            <Button onPress={() => { Actions.SingleChamp({ chamId: char.id, champ: char, title: char.id }); }}>
              <Image
                style={{ width: 75, height: 75, borderRadius: 50 }}
                defaultSource={require('../images/ring.png')}
                source={{
                uri: `http://ddragon.leagueoflegends.com/cdn/7.22.1/img/champion/${char.id}.png`,
              }} 
              />
            </Button>
            <Text style={{ color: 'white' }}>{char.id}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};


const mapProps = state => ({
  masteries: state.masteries,
  champions: state.champions,
});

export default connect(mapProps, {})(AllChampions);

AllChampions.propTypes = {
  champions: PropTypes.objectOf(PropTypes.any).isRequired,
};
