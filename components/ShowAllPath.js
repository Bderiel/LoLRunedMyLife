import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class ShowAllPath extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>
                    Masteries
        </Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    header: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
    },
    // instructions: {
    //     textAlign: 'center',
    //     color: '#333333',
    //     marginBottom: 5,
    // },
});
