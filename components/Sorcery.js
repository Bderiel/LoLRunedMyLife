import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import styles from '../StyleSheet';

export default class Sorcery extends Component {
    constructor(props) {
        super(props);
    }
    // filter for keystone, greater rune , rune
    render() {
        const toFilter = this.props.passed
        const keystone = toFilter.filter(cat => cat.type === 'keystone');
        const gRune = toFilter.filter(cat => cat.type === 'greater rune');
        const lRune = toFilter.filter(cat => cat.type === 'rune');
        return (
            <ScrollView>
              <View style={{ backgroundColor: 'black' }}>
                <View style={{ alignItems: 'center', margin: 20 }}>
                    <Text style={styles.header}>Keystone</Text>
                    <Image style={{ width: 150, height: 150 }} source={require(`../images/sorcery/Summon Aery.png`)}/>
                    <Text style={{ color: 'red', fontSize: 20 }}>{keystone[0].name}</Text>
                    <Text style={{ color: 'grey' }}>{keystone[0].description}</Text>

                    <Image style={{ width: 150, height: 150 }} source={require(`../images/sorcery/Arcane Comet.png`)}/>
                    <Text style={{ color: 'red', fontSize: 20 }}>{keystone[1].name}</Text>
                    <Text style={{ color: 'grey' }}>{keystone[1].description}</Text>

                    <Image style={{ width: 150, height: 150 }} source={require(`../images/sorcery/Phase Rush.png`)}/>
                    <Text style={{ color: 'red', fontSize: 20 }}>{keystone[2].name}</Text>
                    <Text style={{ color: 'grey' }}>{keystone[2].description}</Text>

                    <Text style={styles.header}>Greater Runes</Text>
                    <Image style={{ width: 150, height: 150 }} source={require(`../images/sorcery/Nullifying Orb.png`)}/>
                    <Text style={{ color: 'red', fontSize: 20 }}>{gRune[0].name}</Text>
                    <Text style={{ color: 'grey' }}>{keystone[0].description}</Text>

                    <Image style={{ width: 150, height: 150 }} source={require(`../images/sorcery/Manaflow Band.png`)}/>
                    <Text style={{ color: 'red', fontSize: 20 }}>{gRune[1].name}</Text>
                    <Text style={{ color: 'grey' }}>{keystone[1].description}</Text>

                    <Image style={{ width: 150, height: 150 }} source={require(`../images/sorcery/The Ultimate Hat.png`)}/>
                    <Text style={{ color: 'red', fontSize: 20 }}>{gRune[2].name}</Text>
                    <Text style={{ color: 'grey' }}>{keystone[2].description}</Text>

                    <Text style={styles.header}>Runes</Text>

                    <Image style={{ width: 150, height: 150 }} source={require(`../images/sorcery/Transcendence.png`)}/>
                    <Text style={{ color: 'red', fontSize: 20 }}>{lRune[0].name}</Text>
                    <Text style={{ color: 'grey' }}>{keystone[0].description}</Text>

                    <Image style={{ width: 150, height: 150 }} source={require(`../images/sorcery/Celerity.png`)}/>
                    <Text style={{ color: 'red', fontSize: 20 }}>{lRune[1].name}</Text>
                    <Text style={{ color: 'grey' }}>{keystone[1].description}</Text>

                    <Image style={{ width: 150, height: 150 }} source={require(`../images/sorcery/Absolute Focus.png`)}/>
                    <Text style={{ color: 'red', fontSize: 20 }}>{lRune[2].name}</Text>
                    <Text style={{ color: 'grey' }}>{keystone[2].description}</Text>

                    <Image style={{ width: 150, height: 150 }} source={require(`../images/sorcery/Scorch.png`)}/>
                    <Text style={{ color: 'red', fontSize: 20 }}>{lRune[3].name}</Text>
                    <Text style={{ color: 'grey' }}>{keystone[0].description}</Text>

                    <Image style={{ width: 150, height: 150 }} source={require(`../images/sorcery/Waterwalking.png`)}/>
                    <Text style={{ color: 'red', fontSize: 20 }}>{lRune[4].name}</Text>
                    <Text style={{ color: 'grey' }}>{keystone[1].description}</Text>

                    <Image style={{ width: 150, height: 150 }} source={require(`../images/sorcery/Gathering Storm.png`)}/>
                    <Text style={{ color: 'red', fontSize: 20 }}>{lRune[5].name}</Text>
                    <Text style={{ color: 'grey' }}>{keystone[2].description}</Text>
                </View>
              </View>
            </ScrollView>
        );
    }
}