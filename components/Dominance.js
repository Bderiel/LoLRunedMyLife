import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
// import Button from 'react-native-button';
// import { Actions } from 'react-native-router-flux';

class Dominance extends Component {
  render() {
    const champs = this.props.champions.data;
    const keys = Object.keys(champs);
    const arr = keys.map(character => champs[character]);
    console.log(arr);
    return (
    <View>
      {arr.map(char=>{
        return(
          <View>
          <Text key={char.id}>{char.id}</Text>
          <Image
            style={{ width: 50, height: 50 }}
              source={{ uri: 'http://pluspng.com/img-png/league-of-legends-png-league-of-legends-png-image-png-image-200.png' }}
          />
          </View>
        )
      })}
    </View>
    )
  }
}

const mapProps = state => ({
 masteries: state.masteries,
  champions: state.champions,
});

export default connect(mapProps, {})(Dominance);
