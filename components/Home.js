import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform, Text, View } from 'react-native';

import ShowAllPath from './ShowAllPath';
import { fetchMastries } from '../redux/masteries';


class Home extends Component {
  componentDidMount() {
    //this.props.initialData();
    console.log('123')
  }
  render() {
    return (

      <Text>
              Hello
          </Text>
    );
  }
}


const mapProps = null;

// const mapDispatchtoProps = dispatch => ({
//   initialData: () => {
//     dispatch(fetchMastries());
//   },
const mapDispatchtoProps = null
// });

export default connect(mapProps, mapDispatchtoProps)(Home);
