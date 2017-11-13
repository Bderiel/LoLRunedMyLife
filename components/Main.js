import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import { fetchMasteries } from '../redux/masteries';
import { fetchChampions } from '../redux/champions';
import LandingPage from './LandingPage';
import AllChampions from './AllChampions';
import SingleChamp from './SingleChamp';
import Masteries from './Masteries';
import SingleMastery from './SingleMastery';
import styles from '../StyleSheet';

class Main extends Component {
  componentDidMount(props) {
    this.props.initialData(props);
  }
  render() {
    return (
      <Router navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle} barButtonTextStyle={styles.barButtonTextStyle} barButtonIconStyle={styles.barButtonIconStyle}>
        <Scene key="root">
          <Scene key="LandingPage" component={LandingPage} title="        League Of Legends Runed My Life" />
          <Scene key="AllChampions" component={AllChampions} title="All Champions" />
          <Scene key="SingleChamp" component={SingleChamp} />
          <Scene key="Masteries" component={Masteries} title ='Mastery Trees' />
          <Scene key="SingleMastery" component={SingleMastery} />
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
