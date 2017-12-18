import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../StyleSheet';

const SingleChamp = (props) => {
  const { champ } = props;
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
};

export default SingleChamp;

SingleChamp.propTypes = {
  champ: PropTypes.objectOf(PropTypes.any).isRequired,
};
