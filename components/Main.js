import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform, Text, View } from 'react-native';
import { fetchMasteries } from '../redux/masteries';
import { fetchChampions } from '../redux/champions';
import LandingPage from './LandingPage';
import Dominance from './Dominance';
import SingleChamp from './SingleChamp';
import Masteries from './Masteries';
import { Router, Scene } from 'react-native-router-flux';

class Main extends Component {
  componentDidMount(props) {
    this.props.initialData(props);
  }
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="LandingPage" component={LandingPage} title="LoLRunedMyLife" />
          <Scene key="Dominance" component={Dominance} title="Dominance" />
          <Scene key="SingleChamp" component={SingleChamp}/> 
          <Scene key="Masteries" component={Masteries} /> 
          </Scene>
      </Router>
    );
  }
}

const mapProps = null;

const mapDispatchtoProps = dispatch => ({
  initialData: () => {
    dispatch(fetchMasteries());
    dispatch(fetchChampions());
  },
});

export default connect(mapProps, mapDispatchtoProps)(Main);
