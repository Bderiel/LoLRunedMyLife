import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import styles from '../StyleSheet';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';



export default class SingleChamp extends Component {
    constructor(props){
        super(props)
    }
    render() {
        console.log(this.props)
        // const champs = this.props.champions.data;
        // const keys = Object.keys(champs);
        // const arr = keys.map(character => champs[character]);
        return (
                <Text>hello</Text>
                )
    }
}

//export default connect({}, {})(SingleChamp);
