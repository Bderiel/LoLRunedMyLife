import React, { Component } from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import { connect } from 'react-redux';
import styles from '../StyleSheet';
import Button from 'react-native-button';
import {fetchMatches} from '../redux/summoner';


class SearchChamp extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    // e.preventDefault();
    console.log(this.props);
    this.props.fetchMatches(this.state.text);
  }

  render() {
    console.log(this.state.text);
    return (
      <View>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => this.setState({ text })}
        />
        <Button onPress={this.handleSubmit}>Search</Button>
      </View>
    );
  }
}

const mapProps = state => ({
  masteries: state.masteries,
  champions: state.champions,
});

const mapDispatch = { fetchMatches };

export default connect(mapProps, mapDispatch)(SearchChamp);
