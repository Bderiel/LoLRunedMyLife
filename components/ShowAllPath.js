import React, { Component } from 'react';
import {
  Platform,
  Text,
  View
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Main from './Main';
import Dominance from './Dominance';
import Sorcery from './Sorcery';

export default class ShowAllPath extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="Main" component={ Main } title="Main"/>
          <Scene key="Dominance" component={ Dominance } title="Dominance"/>
          <Scene key="Sorcery" component={ Sorcery } title="Sorcery"/>
        </Scene>
      </Router>
    );
  }
}