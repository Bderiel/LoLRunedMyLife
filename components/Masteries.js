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
          <View style={{ flex: 1, flexWrap: 'wrap', alignItems: 'center',}}>
            <View style={{ flexDirection:'row'}}>
                        <Button onPress={() => { Actions.SingleMastery({ title: Precision[0].category.name.toUpperCase()}) }}>
                <View style={{ flexDirection: 'column' }}>
                    <Text>{Precision[0].category.name.toUpperCase()}</Text>
                    <Text>{Precision[0].category.description}</Text>
                </View>
                <Image style={{ width: 150, height: 150 }} source={require(`../public/images/precision/precisionicon.png`)}/>
                </Button>
            </View>

            <View style={{ flexDirection:'row'}}>
                        <Button onPress={() => { Actions.SingleMastery({ title: Domination[0].category.name.toUpperCase()}) }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text>{Domination[0].category.name.toUpperCase()}</Text>
                        <Text>{Domination[0].category.description}</Text>
                    </View>
                    <Image style={{ width: 150, height: 150 }} source={require(`../public/images/domination/dominationicon.png`)}/>
                </Button>
            </View>

            <View style={{ flexDirection:'row'}}>
                        <Button onPress={() => { Actions.SingleMastery({ title: Sorcery[0].category.name.toUpperCase()}) }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text>{Sorcery[0].category.name.toUpperCase()}</Text>
                        <Text>{Sorcery[0].category.description}</Text>
                    </View>
                    <Image style={{ width: 150, height: 150 }} source={require(`../public/images/sorcery/sorceryicon.png`)}/>
                </Button>
            </View>

            <View style={{ flexDirection:'row'}}>
                        <Button onPress={() => { Actions.SingleMastery({ title: Resolve[0].category.name.toUpperCase()}) }}>
                    <View style={{ flexDirection: 'column', flexWrap: 'wrap'  }}>
                        <Text>{Resolve[0].category.name.toUpperCase()}</Text>
                        <Text>{Resolve[0].category.description}</Text>
                    </View>
                    <Image style={{ width: 150, height: 150 }} source={require(`../public/images/resolve/resolveicon.png`)}/>
                </Button>
                <Text>{Resolve[0].category.description}</Text>
            </View>

            <View style={{ flexDirection:'row'}}>
                        <Button onPress={() => { Actions.SingleMastery({ title: Inspiration[0].category.name.toUpperCase()}) }}>
                    <View style={{ flexDirection: 'column', flexWrap: 'wrap'  }}>
                        <Text>{Inspiration[0].category.name.toUpperCase()}</Text>
                        <Text>{Inspiration[0].category.description}</Text>
                    </View>
                    <Image style={{ width: 150, height: 150 }} source={require(`../public/images/inspiration/inspirationicon.png`)}/>
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


//require(`../public/images${char.image.slice(1)}`)

//Precision[0].category.name
//require(`../public/images${Precision[0].category.image.slice(1)}`)

