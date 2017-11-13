import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import styles from '../StyleSheet';


export default class SingleMastery extends Component {
    constructor(props) {
        super(props);
    }
    // filter for keystone, greater rune , rune
    render() {
        return (
            <ScrollView>
            <View style={styles.singleChampion}>
                <View style={{ alignItems: 'center', margin: 10 }}>
                    <Text style={{ color: 'red', fontSize: 20 }}>{'keystone name'}</Text>
                    <Image style={{ width: 250, height: 250 }} source={{ uri: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/ahri_0.jpg` }} />
                    <Text style={{ color: 'grey' }}>{'keystone description'}</Text>
                </View>

                <View style={{ alignItems: 'center', margin: 10 }}>
                    <Text style={{ color: 'red', fontSize: 20 }}>{'greater rune name'}</Text>
                    <Image style={{ width: 250, height: 250 }} source={{ uri: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/ahri_0.jpg` }} />
                    <Text style={{ color: 'grey' }}>{'keystone description'}</Text>
                </View>

                <View style={{ alignItems: 'center', margin: 10 }}>
                    <Text style={{ color: 'red', fontSize: 20 }}>{'rune name'}</Text>
                    <Image style={{ width: 250, height: 250 }} source={{ uri: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/ahri_0.jpg` }} />
                    <Text style={{ color: 'grey' }}>{'keystone description'}</Text>
                </View>
            </View>
            </ScrollView>
        );
    }
}