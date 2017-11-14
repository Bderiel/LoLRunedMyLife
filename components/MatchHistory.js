import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../StyleSheet';
import { connect } from 'react-redux';
import { fetchMatches } from '../redux/summoner';




class MatchHistory extends Component {
    constructor(props) {
        super(props);
        
    }
    componentDidMount() {
           this.props.findPlayer(this.props.summoner)
    
    }
    render() {
        this.props.matches
        return (
            <View>
                <Text>tet</Text>
            </View>
        );
    }
}



const mapProps = state => ({
    champions: state.champions,
    matches : state.matches
});



const mapDispatch = dispatch => ({
    findPlayer: (sum) => {
        dispatch(fetchMatches(sum));
    },
});

export default connect(mapProps, mapDispatch)(MatchHistory)