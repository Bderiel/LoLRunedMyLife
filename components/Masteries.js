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
                    <View>
                        <Button onPress={() => { Actions.SingleChamp({}) }}>
                        <Text style={styles.header}>{Precision[0].category.name.toUpperCase()}</Text>
                            <Image
                                style={{ width: 250, height: 250 }}
                                source={
                                    require(`../public/images/precision/precisionicon.png`)
                                } />
                        </Button>
                    <Text>{Precision[0].category.description}</Text>
                    </View>
                <View>
                    <Button onPress={() => { Actions.SingleChamp({}) }}>
                        <Text style={styles.header}>{Domination[0].category.name.toUpperCase()}</Text>
                        <Image
                            style={{ width: 250, height: 250 }}
                            source={
                                require(`../public/images/domination/dominationicon.png`)
                            } />
                    </Button>
                    <Text>{Domination[0].category.description}</Text>
                </View>

                <View>
                    <Button onPress={() => { Actions.SingleChamp({}) }}>
                        <Text style={styles.header}>{Sorcery[0].category.name.toUpperCase()}</Text>
                        <Image
                            style={{ width: 250, height: 250 }}
                            source={
                                require(`../public/images/sorcery/sorceryicon.png`)
                            } />
                    </Button>
                    <Text>{Sorcery[0].category.description}</Text>
                </View>

                <View>
                    <Button onPress={() => { Actions.SingleChamp({}) }}>
                        <Text style={styles.header}>{Resolve[0].category.name.toUpperCase()}</Text>
                        <Image
                            style={{ width: 250, height: 250 }}
                            source={
                                require(`../public/images/resolve/resolveicon.png`)
                            } />
                    </Button>
                    <Text>{Resolve[0].category.description}</Text>
                </View>

                <View>
                    <Button onPress={() => { Actions.SingleChamp({}) }}>
                        <Text style={styles.header}>{Inspiration[0].category.name.toUpperCase()}</Text>
                        <Image
                            style={{ width: 250, height: 250 }}
                            source={
                                require(`../public/images/inspiration/inspirationicon.png`)
                            } />
                    </Button>
                    <Text>{Inspiration[0].category.description}</Text>
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

