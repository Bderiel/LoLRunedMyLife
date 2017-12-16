import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Button from 'react-native-button';
import styles from '../StyleSheet';

class Masteries extends Component {
  render() {
    return (
        <ScrollView >{this.props.masteries.length && this.props.masteries.map(perkStyle=>{
            return(
                <View key={perkStyle.id} style={{ flex: 1, alignItems: 'center', backgroundColor:'black'}}>
            <View style={{ flexDirection:'row'}}>
                <Button onPress={() => { Actions.Runes({ title:'test'  }) }}>
                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                <Text style={{ color: "red" }}>{perkStyle.name.toUpperCase()}</Text>
                        <Text style={{ color:"grey" }}>Improved Attacks</Text>
                        <Text style={{ color:"grey" }}>Sustained Damage</Text>
                    </View>
                            <Image style={{ width: 150, height: 150 }} source={{ uri: `http://media.services.zam.com/v1/media/byName/lolking/img/runes/${perkStyle.name.toLowerCase()}/icon.png`}}/>
                </Button>
            </View>
            </View>
            )
            })}
          
        </ScrollView>
    );
  }
}


const mapProps = state => ({
  masteries: state.masteries,
});

export default connect(mapProps, {})(Masteries);
