import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import Button from 'react-native-button';
import styles from '../StyleSheet';
import { fetchMatches } from '../redux/summoner';


class SearchChamp extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <TextInput
          style={styles.TextInputStyleClass}
          onChangeText={text => this.setState({ text })}
        />
        <View style={{alignItems: 'center'}}>
        <Button
          containerStyle={{ height: 45, overflow: 'hidden', borderRadius: 4, backgroundColor: 'white' }}
          style={styles.searchButton}
          onPress={() => {
                this.props.fetchMatches(this.state.text);
                 }}
        >Search
        </Button>
          </View>
      </View>
    );
  }
}

const mapProps = state => ({
  champions: state.champions,
  matches: state.matches,
});


const mapDispatch = { fetchMatches };

export default connect(mapProps, mapDispatch)(SearchChamp);
