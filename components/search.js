import React, { Component } from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import styles from '../StyleSheet';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import { fetchMatches } from '../redux/summoner';

import { connect } from 'react-redux';


class SearchChamp extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor:'black'}}>
        <TextInput
          style={{ height: 40, backgroundColor: 'white', borderWidth: 1 }}
          onChangeText={text => this.setState({ text })}
        />
            <Button onPress={() => {
                this.props.fetchMatches(this.state.text)
                 {/* Actions.MatchHistory({ summoner: this.state.text })  */}
                 
                 }}>Search</Button>
      </View>
    );
  }
}

const mapProps = state => ({
    champions: state.champions,
    matches: state.matches
});



const mapDispatch = {fetchMatches}

export default connect(mapProps, mapDispatch)(SearchChamp)
