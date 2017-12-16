import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Button from 'react-native-button';
import styles from '../StyleSheet';

class Masteries extends Component {
    render() {
        const toFilter = this.props.masteries;
        const Precision = toFilter.filter(cat => cat.category.name ==='Precision');
        const Domination = toFilter.filter(cat => cat.category.name === 'Domination');
        const Sorcery = toFilter.filter(cat => cat.category.name === 'Sorcery');
        const Resolve = toFilter.filter(cat => cat.category.name === 'Resolve');
        const Inspiration = toFilter.filter(cat => cat.category.name === 'Inspiration');
        return (
        <ScrollView >
          <View style={{ flex: 1, alignItems: 'center', backgroundColor:'black'}}>
            <View style={{ flexDirection:'row'}}>
                <Button onPress={() => { Actions.Precision({ passed: Precision }) }}>
                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <Text style={{ color:"red" }}>{Precision[0].category.name.toUpperCase()}</Text>
                        <Text style={{ color:"grey" }}>Improved Attacks</Text>
                        <Text style={{ color:"grey" }}>Sustained Damage</Text>
                    </View>
                <Image style={{ width: 150, height: 150 }} source={require(`../images/precision/precisionicon.png`)}/>
                </Button>
            </View>
            <View style={{ flexDirection:'row'}}>
                <Button onPress={() => { Actions.Domination({ passed: Domination}) }}>
                    <View style={{ flexDirection: 'column', alignItems: 'center'  }}>
                        <Text style={{ color:"red" }}>{Domination[0].category.name.toUpperCase()}</Text>
                        <Text style={{ color:"grey" }}>Burst Damage</Text>
                        <Text style={{ color:"grey" }}>Target Access</Text>
                    </View>
                    <Image style={{ width: 150, height: 150 }} source={require(`../images/domination/dominationicon.png`)}/>
                </Button>
            </View>
            <View style={{ flexDirection:'row'}}>
                <Button onPress={() => { Actions.Sorcery({ passed: Sorcery}) }}>
                    <View style={{ flexDirection: 'column', alignItems: 'center'  }}>
                        <Text style={{ color:"red" }}>{Sorcery[0].category.name.toUpperCase()}</Text>
                        <Text style={{ color:"grey" }}>Empowered Abilities</Text>
                        <Text style={{ color:"grey" }}>Resource Manipulation</Text>
                    </View>
                    <Image style={{ width: 150, height: 150 }} source={require(`../images/sorcery/sorceryicon.png`)}/>
                </Button>
            </View>
            <View style={{ flexDirection:'row'}}>
                <Button onPress={() => { Actions.Resolve({ passed: Resolve}) }}>
                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <Text style={{ color:"red" }}>{Resolve[0].category.name.toUpperCase()}</Text>
                        <Text style={{ color:"grey" }}>Durability</Text>
                        <Text style={{ color:"grey" }}>Crowd Control</Text>
                    </View>
                    <Image style={{ width: 150, height: 150 }} source={require(`../images/resolve/resolveicon.png`)}/>
                </Button>
            </View>
            <View style={{ flexDirection:'row'}}>
                <Button onPress={() => { Actions.Inspiration({ passed: Inspiration}) }}>
                    <View style={{ flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={{ color:"red" }}>{Inspiration[0].category.name.toUpperCase()}</Text>
                        <Text style={{ color:"grey" }}>Creative Tools</Text>
                        <Text style={{ color:"grey" }}>Rule Bending</Text>
                    </View>
                    <Image style={{ width: 150, height: 150 }} source={require(`../images/inspiration/inspirationicon.png`)}/>
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


//test