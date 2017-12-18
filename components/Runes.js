import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../StyleSheet';

const Runes = (props) => {
  return (
    <ScrollView >
      <View style={{ backgroundColor: 'black' }}>
        {props.runes.map((el, idx) => {
          let cat = '';
          if (idx === 0) cat = 'Keystone';
          if (idx === 1) cat = 'Greater Runes';
          if (idx === 2) cat = 'Lesser Runes Set 1';
          if (idx === 3) cat = 'Lesser Runes Set 2';
          return (
            <View key={idx} style={{ alignItems: 'center', margin: 20 }}>
              <Text style={styles.header}>{cat}</Text>
              {el.runes.map(rune => (
                <View key={rune.id} style={{ alignItems: 'center', margin: 20 }}>
                  <Text style={{ color: 'red', fontSize: 20 }}>{rune.name}</Text>
                  <Image style={{ width: 100, height: 100 }} source={{ uri: `http://media.services.zam.com/v1/media/byName/${rune.name}.png?width=50`}} />
                  <Text style={{ color: 'grey' }}>{rune.shortDesc}</Text>
                </View>
              ))}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Runes;

Runes.propTypes = {
  runes: PropTypes.arrayOf(PropTypes.any).isRequired,
};
