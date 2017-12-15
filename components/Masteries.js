import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Button from 'react-native-button';
import styles from '../StyleSheet';

class Masteries extends Component {
    render() {
        const toFilter = this.props.masteries;
        const Precision = toFilter.filter(cat => cat.name ==='Precision');
        // const Domination = toFilter.filter(cat => cat.name === 'Domination');
        // const Sorcery = toFilter.filter(cat => cat.name === 'Sorcery');
        // const Resolve = toFilter.filter(cat => cat.name === 'Resolve');
        // const Inspiration = toFilter.filter(cat => cat.name === 'Inspiration');
        return (
        <ScrollView >
          <View style={{ flex: 1, alignItems: 'center', backgroundColor:'black'}}>
            <View style={{ flexDirection:'row'}}>
                <Button onPress={() => { Actions.Precision({ passed: Precision }) }}>
                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <Text style={{ color:"red" }}>{Precision[0].name.toUpperCase()}</Text>
                        <Text style={{ color:"grey" }}>Improved Attacks</Text>
                        <Text style={{ color:"grey" }}>Sustained Damage</Text>
                    </View>
                {/* <Image style={{ width: 150, height: 150 }} source={require(`../images/precision/precisionicon.png`)}/> */}
                </Button>
            </View>
            </View>
        </ScrollView>
        );
    }
}

const mapProps = state => ({
    masteries: state.masteries,
});

export default connect(mapProps, {})(Masteries);


