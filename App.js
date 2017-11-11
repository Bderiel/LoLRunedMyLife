import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';
import store from './redux';
import { Provider } from 'react-redux';
import  Home  from './components/Home';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

