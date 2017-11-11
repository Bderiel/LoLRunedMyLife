import ShowAllPath from './components/ShowAllPath';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform, Text, View } from 'react-native';
import { fetchMastries } from './redux/masteries';
import store from './redux';
import { Provider } from 'react-redux';


class App extends Component {
  componentDidMount() {
    this.props.initialData();
  }
  render() {
    return (
      <Provider store={store}>
        <ShowAllPath />
      </Provider>
    );
  }
}

const mapProps = null;

const mapDispatchtoProps = dispatch => ({
  initialData: () => {
    dispatch(fetchMastries());
  },
});

export default connect(mapProps, mapDispatchtoProps)(App);
