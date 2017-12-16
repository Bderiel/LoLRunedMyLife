import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Button from 'react-native-button';
import styles from '../StyleSheet';

const descriptions = {
  Domination: 'HUNT AND ELIMINATE PREY',
  Precision: 'BECOME A LEGEND',
  Resolve: 'LIVE FOREVER',
  Sorcery: 'UNLEASH DESTRUCTION',
  Inspiration: 'OUTWIT MERE MORTALS',
};
class Masteries extends Component {
  render() {
    return (
      <ScrollView >{this.props.masteries.length && this.props.masteries.map((perkStyle) => (
                <View key={perkStyle.id} style={{ flex: 1, alignItems: 'center', backgroundColor:'black'}}>
            <View style={{ flexDirection:'row'}}>
                    <Button onPress={() => {Actions.Runes()}}>
                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                <Text style={{ color: "red" }}>{perkStyle.name.toUpperCase()}</Text>
                            <Text style={{ color: "grey" }}>{descriptions[perkStyle.name]}</Text>
                    </View>
                            <Image style={{ width: 250, height: 250 }} source={{ uri: `http://media.services.zam.com/v1/media/byName/lolking/img/runes/${perkStyle.name.toLowerCase()}/icon.png`}}/>
                </Button>
            </View>
            </View>
            ))}

        </ScrollView>
    );
  }
}


const mapProps = state => ({
  masteries: state.masteries,
});

export default connect(mapProps, {})(Masteries);
