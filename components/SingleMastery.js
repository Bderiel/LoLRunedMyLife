import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import styles from '../StyleSheet';


export default class SingleMastery extends Component {
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
                <Text style={styles.header}>Keystone</Text>
            {keystone.map(key=>{
                
                return (<View key={key.id} style={{ alignItems: 'center', margin: 10 }}>
                    <Text style={{ color: 'red', fontSize: 20 }}>{key.name}</Text>
                    <Image style={{ width: 250, height: 250 }} source={{ uri: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/ahri_0.jpg` }} />
                    <Text style={{ color: 'grey' }}>{key.description}</Text>
                </View>)
            })}
            
                <Text style={styles.header}>Greater Runes</Text>
                {gRune.map(key => {
                    return (<View key={key.id} style={{ alignItems: 'center', margin: 10 }}>
                        <Text style={{ color: 'red', fontSize: 20 }}>{key.name}</Text>
                        <Image style={{ width: 250, height: 250 }} source={{ uri: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/ahri_0.jpg` }} />
                        <Text style={{ color: 'grey' }}>{key.description}</Text>
                    </View>)
                })}
                <Text style={styles.header}>Runes</Text>
                {lRune.map(key => {
                    return (<View key={key.id} style={{ alignItems: 'center', margin: 10 }}>
                        <Text style={{ color: 'red', fontSize: 20 }}>{key.name}</Text>
                        <Image style={{ width: 250, height: 250 }} source={{ uri: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/ahri_0.jpg` }} />
                        <Text style={{ color: 'grey' }}>{key.description}</Text>
                    </View>)
                })}

            </ScrollView>
        );
    }
}